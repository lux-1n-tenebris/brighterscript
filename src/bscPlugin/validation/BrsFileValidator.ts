import { isAliasStatement, isBody, isClassStatement, isCommentStatement, isConstStatement, isDottedGetExpression, isDottedSetStatement, isEnumStatement, isForEachStatement, isForStatement, isFunctionExpression, isFunctionStatement, isImportStatement, isIndexedGetExpression, isIndexedSetStatement, isInterfaceStatement, isLibraryStatement, isLiteralExpression, isNamespaceStatement, isTypecastStatement, isUnaryExpression, isWhileStatement } from '../../astUtils/reflection';
import { createVisitor, WalkMode } from '../../astUtils/visitors';
import { DiagnosticMessages } from '../../DiagnosticMessages';
import type { BrsFile } from '../../files/BrsFile';
import type { OnFileValidateEvent } from '../../interfaces';
import { TokenKind } from '../../lexer/TokenKind';
import type { AstNode, Expression, Statement } from '../../parser/AstNode';
import { CallExpression, type FunctionExpression, type LiteralExpression } from '../../parser/Expression';
import { ParseMode } from '../../parser/Parser';
import type { ContinueStatement, EnumMemberStatement, EnumStatement, ForEachStatement, ForStatement, ImportStatement, LibraryStatement, WhileStatement } from '../../parser/Statement';
import { DynamicType } from '../../types/DynamicType';
import { InterfaceType } from '../../types/InterfaceType';
import util from '../../util';
import type { Range } from 'vscode-languageserver';

export class BrsFileValidator {
    constructor(
        public event: OnFileValidateEvent<BrsFile>
    ) {
    }

    public process() {
        util.validateTooDeepFile(this.event.file);
        this.walk();
        this.flagTopLevelStatements();
        //only validate the file if it was actually parsed (skip files containing typedefs)
        if (!this.event.file.hasTypedef) {
            this.validateImportStatements();
        }
    }

    /**
     * Walk the full AST
     */
    private walk() {
        const visitor = createVisitor({
            MethodStatement: (node) => {
                //add the `super` symbol to class methods
                node.func.body.symbolTable.addSymbol('super', undefined, DynamicType.instance);
            },
            CallfuncExpression: (node) => {
                if (node.args.length > 5) {
                    this.event.file.addDiagnostic({
                        ...DiagnosticMessages.callfuncHasToManyArgs(node.args.length),
                        range: node.methodName.range
                    });
                }
            },
            EnumStatement: (node) => {
                this.validateDeclarationLocations(node, 'enum', () => util.createBoundingRange(node.tokens.enum, node.tokens.name));

                this.validateEnumDeclaration(node);

                //register this enum declaration
                if (node.tokens.name) {
                    node.parent.getSymbolTable()?.addSymbol(node.tokens.name.text, node.tokens.name.range, DynamicType.instance);
                }
            },
            ClassStatement: (node) => {
                this.validateDeclarationLocations(node, 'class', () => util.createBoundingRange(node.classKeyword, node.name));

                //register this class
                if (node.name) {
                    node.parent.getSymbolTable()?.addSymbol(node.name.text, node.name.range, DynamicType.instance);
                }
            },
            AssignmentStatement: (node) => {
                //register this variable
                if (node.name) {
                    node.parent.getSymbolTable()?.addSymbol(node.name.text, node.name.range, DynamicType.instance);
                }
            },
            DottedSetStatement: (node) => {
                this.validateNoOptionalChainingInVarSet(node, [node.obj]);
            },
            IndexedSetStatement: (node) => {
                this.validateNoOptionalChainingInVarSet(node, [node.obj]);
            },
            ForEachStatement: (node) => {
                //register the for loop variable
                node.parent.getSymbolTable()?.addSymbol(node.item.text, node.item.range, DynamicType.instance);
            },
            NamespaceStatement: (node) => {
                this.validateDeclarationLocations(node, 'namespace', () => util.createBoundingRange(node.keyword, node.nameExpression));

                if (node.name) {
                    node.parent.getSymbolTable().addSymbol(
                        node.name.split('.')[0],
                        node.nameExpression.range,
                        DynamicType.instance
                    );
                }
            },
            FunctionStatement: (node) => {
                this.validateDeclarationLocations(node, 'function', () => util.createBoundingRange(node.func.functionType, node.name));
                if (node.name?.text) {
                    node.parent.getSymbolTable().addSymbol(
                        node.name.text,
                        node.name.range,
                        DynamicType.instance
                    );
                }

                const namespace = node.findAncestor(isNamespaceStatement);
                //this function is declared inside a namespace
                if (namespace) {
                    //add the transpiled name for namespaced functions to the root symbol table
                    const transpiledNamespaceFunctionName = node.getName(ParseMode.BrightScript);
                    const funcType = node.func.getFunctionType();
                    funcType.setName(transpiledNamespaceFunctionName);

                    if (node.name) {
                        this.event.file.parser.ast.symbolTable.addSymbol(
                            transpiledNamespaceFunctionName,
                            node.name.range,
                            funcType
                        );
                    }
                }
            },
            FunctionExpression: (node) => {
                if (!node.symbolTable.hasSymbol('m')) {
                    node.symbolTable.addSymbol('m', undefined, DynamicType.instance);
                }
                this.validateFunctionParameterCount(node);
            },
            FunctionParameterExpression: (node) => {
                if (node.name) {
                    const paramName = node.name.text;
                    const symbolTable = node.getSymbolTable();
                    symbolTable?.addSymbol(paramName, node.name.range, node.type);
                }
            },
            InterfaceStatement: (node) => {
                this.validateDeclarationLocations(node, 'interface', () => util.createBoundingRange(node.tokens.interface, node.tokens.name));
                if (node.tokens.name) {
                    node.parent?.getSymbolTable()?.addSymbol(node.tokens.name.text, node.tokens.name.range, new InterfaceType(new Map()));
                }
            },
            ConstStatement: (node) => {
                this.validateDeclarationLocations(node, 'const', () => util.createBoundingRange(node.tokens.const, node.tokens.name));
                if (node.tokens.name) {
                    node.parent.getSymbolTable().addSymbol(node.tokens.name.text, node.tokens.name.range, DynamicType.instance);
                }
            },
            CatchStatement: (node) => {
                node.parent.getSymbolTable().addSymbol(node.exceptionVariable.text, node.exceptionVariable.range, DynamicType.instance);
            },
            DimStatement: (node) => {
                if (node.identifier) {
                    node.parent.getSymbolTable().addSymbol(node.identifier.text, node.identifier.range, DynamicType.instance);
                }
            },
            ReturnStatement: (node) => {
                const func = node.findAncestor<FunctionExpression>(isFunctionExpression);
                //these situations cannot have a value next to `return`
                if (
                    //`function as void`, `sub as void`
                    func?.returnTypeToken?.kind === TokenKind.Void ||
                    //`sub` <without return value>
                    (func.functionType?.kind === TokenKind.Sub && !func.returnTypeToken)
                ) {
                    //there may not be a return value
                    if (node.value) {
                        this.event.file.addDiagnostic({
                            ...DiagnosticMessages.voidFunctionMayNotReturnValue(func.functionType?.text),
                            range: node.range
                        });
                    }

                } else {
                    //there MUST be a return value
                    if (!node.value) {
                        this.event.file.addDiagnostic({
                            ...DiagnosticMessages.nonVoidFunctionMustReturnValue(func?.functionType?.text),
                            range: node.range
                        });
                    }
                }
            },
            ContinueStatement: (node) => {
                this.validateContinueStatement(node);
            }
        });

        this.event.file.ast.walk((node, parent) => {
            visitor(node, parent);
        }, {
            walkMode: WalkMode.visitAllRecursive
        });
    }

    /**
     * Validate that a statement is defined in one of these specific locations
     *  - the root of the AST
     *  - inside a namespace
     * This is applicable to things like FunctionStatement, ClassStatement, NamespaceStatement, EnumStatement, InterfaceStatement
     */
    private validateDeclarationLocations(statement: Statement, keyword: string, rangeFactory?: () => (Range | undefined)) {
        //if nested inside a namespace, or defined at the root of the AST (i.e. in a body that has no parent)
        if (isNamespaceStatement(statement.parent?.parent) || (isBody(statement.parent) && !statement.parent?.parent)) {
            return;
        }
        //the statement was defined in the wrong place. Flag it.
        this.event.file.addDiagnostic({
            ...DiagnosticMessages.keywordMustBeDeclaredAtNamespaceLevel(keyword),
            range: rangeFactory?.() ?? statement.range
        });
    }

    private validateFunctionParameterCount(func: FunctionExpression) {
        if (func.parameters.length > CallExpression.MaximumArguments) {
            //flag every parameter over the limit
            for (let i = CallExpression.MaximumArguments; i < func.parameters.length; i++) {
                this.event.file.addDiagnostic({
                    ...DiagnosticMessages.tooManyCallableParameters(func.parameters.length, CallExpression.MaximumArguments),
                    range: func.parameters[i].name.range
                });
            }
        }
    }

    private validateEnumDeclaration(stmt: EnumStatement) {
        const members = stmt.getMembers();
        //the enum data type is based on the first member value
        const enumValueKind = (members.find(x => x.value)?.value as LiteralExpression)?.token?.kind ?? TokenKind.IntegerLiteral;
        const memberNames = new Set<string>();
        for (const member of members) {
            const memberNameLower = member.name?.toLowerCase();

            /**
             * flag duplicate member names
             */
            if (memberNames.has(memberNameLower)) {
                this.event.file.addDiagnostic({
                    ...DiagnosticMessages.duplicateIdentifier(member.name),
                    range: member.range
                });
            } else {
                memberNames.add(memberNameLower);
            }

            //Enforce all member values are the same type
            this.validateEnumValueTypes(member, enumValueKind);
        }
    }

    private validateEnumValueTypes(member: EnumMemberStatement, enumValueKind: TokenKind) {
        let memberValueKind: TokenKind;
        let memberValue: Expression;
        if (isUnaryExpression(member.value)) {
            memberValueKind = (member.value?.right as LiteralExpression)?.token?.kind;
            memberValue = member.value?.right;
        } else {
            memberValueKind = (member.value as LiteralExpression)?.token?.kind;
            memberValue = member.value;
        }
        const range = (memberValue ?? member)?.range;
        if (
            //is integer enum, has value, that value type is not integer
            (enumValueKind === TokenKind.IntegerLiteral && memberValueKind && memberValueKind !== enumValueKind) ||
            //has value, that value is not a literal
            (memberValue && !isLiteralExpression(memberValue))
        ) {
            this.event.file.addDiagnostic({
                ...DiagnosticMessages.enumValueMustBeType(
                    enumValueKind.replace(/literal$/i, '').toLowerCase()
                ),
                range: range
            });
        }

        //is non integer value
        if (enumValueKind !== TokenKind.IntegerLiteral) {
            //default value present
            if (memberValueKind) {
                //member value is same as enum
                if (memberValueKind !== enumValueKind) {
                    this.event.file.addDiagnostic({
                        ...DiagnosticMessages.enumValueMustBeType(
                            enumValueKind.replace(/literal$/i, '').toLowerCase()
                        ),
                        range: range
                    });
                }

                //default value missing
            } else {
                this.event.file.addDiagnostic({
                    file: this.event.file,
                    ...DiagnosticMessages.enumValueIsRequired(
                        enumValueKind.replace(/literal$/i, '').toLowerCase()
                    ),
                    range: range
                });
            }
        }
    }

    /**
     * Find statements defined at the top level (or inside a namespace body) that are not allowed to be there
     */
    private flagTopLevelStatements() {
        const statements = [...this.event.file.ast.statements];
        while (statements.length > 0) {
            const statement = statements.pop();
            if (isNamespaceStatement(statement)) {
                statements.push(...statement.body.statements);
            } else {
                //only allow these statement types
                if (
                    !isFunctionStatement(statement) &&
                    !isClassStatement(statement) &&
                    !isEnumStatement(statement) &&
                    !isInterfaceStatement(statement) &&
                    !isCommentStatement(statement) &&
                    !isLibraryStatement(statement) &&
                    !isImportStatement(statement) &&
                    !isConstStatement(statement) &&
                    !isTypecastStatement(statement) &&
                    !isAliasStatement(statement)
                ) {
                    this.event.file.addDiagnostic({
                        ...DiagnosticMessages.unexpectedStatementOutsideFunction(),
                        range: statement.range
                    });
                }
            }
        }
    }

    private validateImportStatements() {
        let topOfFileIncludeStatements = [] as Array<LibraryStatement | ImportStatement>;
        for (let stmt of this.event.file.parser.ast.statements) {
            //skip comments
            if (isCommentStatement(stmt)) {
                continue;
            }
            //if we found a non-library statement, this statement is not at the top of the file
            if (isLibraryStatement(stmt) || isImportStatement(stmt)) {
                topOfFileIncludeStatements.push(stmt);
            } else {
                //break out of the loop, we found all of our library statements
                break;
            }
        }

        let statements = [
            // eslint-disable-next-line @typescript-eslint/dot-notation
            ...this.event.file['_parser'].references.libraryStatements,
            // eslint-disable-next-line @typescript-eslint/dot-notation
            ...this.event.file['_parser'].references.importStatements
        ];
        for (let result of statements) {
            //if this statement is not one of the top-of-file statements,
            //then add a diagnostic explaining that it is invalid
            if (!topOfFileIncludeStatements.includes(result)) {
                if (isLibraryStatement(result)) {
                    this.event.file.diagnostics.push({
                        ...DiagnosticMessages.libraryStatementMustBeDeclaredAtTopOfFile(),
                        range: result.range,
                        file: this.event.file
                    });
                } else if (isImportStatement(result)) {
                    this.event.file.diagnostics.push({
                        ...DiagnosticMessages.importStatementMustBeDeclaredAtTopOfFile(),
                        range: result.range,
                        file: this.event.file
                    });
                }
            }
        }
    }

    private validateContinueStatement(statement: ContinueStatement) {
        const validateLoopTypeMatch = (expectedLoopType: TokenKind) => {
            //coerce ForEach to For
            expectedLoopType = expectedLoopType === TokenKind.ForEach ? TokenKind.For : expectedLoopType;
            const actualLoopType = statement.tokens.loopType;
            if (actualLoopType && expectedLoopType?.toLowerCase() !== actualLoopType.text?.toLowerCase()) {
                this.event.file.addDiagnostic({
                    range: statement.tokens.loopType.range,
                    ...DiagnosticMessages.expectedToken(expectedLoopType)
                });
            }
        };

        //find the parent loop statement
        const parent = statement.findAncestor<WhileStatement | ForStatement | ForEachStatement>((node) => {
            if (isWhileStatement(node)) {
                validateLoopTypeMatch(node.tokens.while.kind);
                return true;
            } else if (isForStatement(node)) {
                validateLoopTypeMatch(node.forToken.kind);
                return true;
            } else if (isForEachStatement(node)) {
                validateLoopTypeMatch(node.tokens.forEach.kind);
                return true;
            }
        });
        //flag continue statements found outside of a loop
        if (!parent) {
            this.event.file.addDiagnostic({
                range: statement.range,
                ...DiagnosticMessages.illegalContinueStatement()
            });
        }
    }

    /**
     * Validate that there are no optional chaining operators on the left-hand-side of an assignment, indexed set, or dotted get
     */
    private validateNoOptionalChainingInVarSet(parent: AstNode, children: AstNode[]) {
        const nodes = [...children, parent];
        //flag optional chaining anywhere in the left of this statement
        while (nodes.length > 0) {
            const node = nodes.shift();
            if (
                // a?.b = true or a.b?.c = true
                ((isDottedSetStatement(node) || isDottedGetExpression(node)) && node.dot?.kind === TokenKind.QuestionDot) ||
                // a.b?[2] = true
                (isIndexedGetExpression(node) && (node?.questionDotToken?.kind === TokenKind.QuestionDot || node.openingSquare?.kind === TokenKind.QuestionLeftSquare)) ||
                // a?[1] = true
                (isIndexedSetStatement(node) && node.openingSquare?.kind === TokenKind.QuestionLeftSquare)
            ) {
                //try to highlight the entire left-hand-side expression if possible
                let range: Range;
                if (isDottedSetStatement(parent)) {
                    range = util.createBoundingRange(parent.obj, parent.dot, parent.name);
                } else if (isIndexedSetStatement(parent)) {
                    range = util.createBoundingRange(parent.obj, parent.openingSquare, parent.index, parent.closingSquare);
                } else {
                    range = node.range;
                }

                this.event.file.addDiagnostic({
                    ...DiagnosticMessages.noOptionalChainingInLeftHandSideOfAssignment(),
                    range: range
                });
            }

            if (node === parent) {
                break;
            } else {
                nodes.push(node.parent);
            }
        }
    }
}
