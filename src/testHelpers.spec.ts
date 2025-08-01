import type { BscFile, BsDiagnostic } from './interfaces';
import * as assert from 'assert';
import chalk from 'chalk';
import type { CodeDescription, CompletionItem, CompletionList, Diagnostic, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, integer, Range } from 'vscode-languageserver';
import { createSandbox } from 'sinon';
import { expect } from './chai-config.spec';
import type { CodeActionShorthand } from './CodeActionUtil';
import { codeActionUtil } from './CodeActionUtil';
import type { BrsFile } from './files/BrsFile';
import type { Program } from './Program';
import { standardizePath as s } from './util';
import type { CodeWithSourceMap } from 'source-map';
import { getDiagnosticLine } from './diagnosticUtils';
import { firstBy } from 'thenby';
import undent from 'undent';
import type { WorkspaceConfig } from './lsp/ProjectManager';

export const cwd = s`${__dirname}/../`;
export const tempDir = s`${__dirname}/../.tmp`;
export const rootDir = s`${tempDir}/rootDir`;
export const stagingDir = s`${tempDir}/stagingDir`;
export const workspaceSettings: WorkspaceConfig = {
    workspaceFolder: rootDir,
    languageServer: {
        enableThreading: false,
        enableProjectDiscovery: true
    }
};

export const trim = undent;
const sinon = createSandbox();

beforeEach(() => {
    sinon.restore();
});
afterEach(() => {
    sinon.restore();
});

type DiagnosticCollection = { getDiagnostics(): Array<Diagnostic> } | { diagnostics: Diagnostic[] } | Diagnostic[];
type DiagnosticCollectionAsync = DiagnosticCollection | { getDiagnostics(): Promise<Array<Diagnostic>> };

function getDiagnostics(arg: DiagnosticCollection): BsDiagnostic[] {
    if (Array.isArray(arg)) {
        return arg as BsDiagnostic[];
    } else if ((arg as any).getDiagnostics) {
        return (arg as any).getDiagnostics();
    } else if ((arg as any).diagnostics) {
        return (arg as any).diagnostics;
    } else {
        throw new Error('Cannot derive a list of diagnostics from ' + JSON.stringify(arg));
    }
}

function sortDiagnostics(diagnostics: BsDiagnostic[]) {
    return diagnostics.sort(
        firstBy<BsDiagnostic>('code')
            .thenBy<BsDiagnostic>('message')
            .thenBy<BsDiagnostic>((a, b) => (a.range?.start?.line ?? 0) - (b.range?.start?.line ?? 0))
            .thenBy<BsDiagnostic>((a, b) => (a.range?.start?.character ?? 0) - (b.range?.start?.character ?? 0))
            .thenBy<BsDiagnostic>((a, b) => (a.range?.end?.line ?? 0) - (b.range?.end?.line ?? 0))
            .thenBy<BsDiagnostic>((a, b) => (a.range?.end?.character ?? 0) - (b.range?.end?.character ?? 0))
    );
}

function cloneObject<TOriginal, TTemplate>(original: TOriginal, template: TTemplate, defaultKeys: Array<keyof TOriginal>) {
    const clone = {} as Partial<TOriginal>;
    let keys = Object.keys(template ?? {}) as Array<keyof TOriginal>;
    //if there were no keys provided, use some sane defaults
    keys = keys.length > 0 ? keys : defaultKeys;

    //copy only compare the specified keys from actualDiagnostic
    for (const key of keys) {
        clone[key] = original[key];
    }
    return clone;
}

export interface PartialDiagnostic {
    range?: Range;
    severity?: DiagnosticSeverity;
    code?: integer | string;
    codeDescription?: Partial<CodeDescription>;
    source?: string;
    message?: string;
    tags?: Partial<DiagnosticTag>[];
    relatedInformation?: Partial<DiagnosticRelatedInformation>[];
    data?: unknown;
    file?: Partial<BscFile>;
}

/**
 *  Helper function to clone a Diagnostic so it will give partial data that has the same properties as the expected
 */
export function cloneDiagnostic(actualDiagnosticInput: BsDiagnostic, expectedDiagnostic: BsDiagnostic) {
    const actualDiagnostic = cloneObject(
        actualDiagnosticInput,
        expectedDiagnostic,
        ['message', 'code', 'range', 'severity', 'relatedInformation']
    );
    //deep clone relatedInformation if available
    if (actualDiagnostic.relatedInformation) {
        for (let j = 0; j < actualDiagnostic.relatedInformation.length; j++) {
            actualDiagnostic.relatedInformation[j] = cloneObject(
                actualDiagnostic.relatedInformation[j],
                expectedDiagnostic?.relatedInformation?.[j],
                ['location', 'message']
            ) as any;
        }
    }
    //deep clone file info if available
    if (actualDiagnostic.file) {
        actualDiagnostic.file = cloneObject(
            actualDiagnostic.file,
            expectedDiagnostic?.file,
            ['srcPath', 'pkgPath']
        ) as any;
    }
    return actualDiagnostic;
}

/**
 * Ensure the DiagnosticCollection exactly contains the data from expected list.
 * @param arg - any object that contains diagnostics (such as `Program`, `Scope`, or even an array of diagnostics)
 * @param expected an array of expected diagnostics. if it's a string, assume that's a diagnostic error message
 */
export async function expectDiagnosticsAsync(arg: DiagnosticCollectionAsync, expected: Array<PartialDiagnostic | string | number>) {
    expectDiagnostics(
        await Promise.resolve(getDiagnostics(arg as any)),
        expected
    );
}

/**
 * Ensure the DiagnosticCollection exactly contains the data from expected list.
 * @param arg - any object that contains diagnostics (such as `Program`, `Scope`, or even an array of diagnostics)
 * @param expectedDiagnostics an array of expected diagnostics. if it's a string, assume that's a diagnostic error message
 */
export function expectDiagnostics(arg: DiagnosticCollection, expectedDiagnostics: Array<PartialDiagnostic | string | number>) {
    const [actual, expected] = normalizeDiagnostics(getDiagnostics(arg), expectedDiagnostics);
    expect(actual).to.eql(expected);
}

/**
 * Normalizes a collection of diagnostics for comparison
 * @param actualDiagnostics the actual diagnostics that were found
 * @param expectedDiagnostics the diagnostics we're expecing
 */
export function normalizeDiagnostics(actualDiagnostics: BsDiagnostic[], expectedDiagnostics: Array<PartialDiagnostic | string | number>) {
    actualDiagnostics = sortDiagnostics([...actualDiagnostics]);

    expectedDiagnostics = sortDiagnostics(
        expectedDiagnostics.map(x => {
            let result = x;
            if (typeof x === 'string') {
                result = { message: x };
            } else if (typeof x === 'number') {
                result = { code: x };
            }
            return result as unknown as BsDiagnostic;
        })
    );

    for (let i = 0; i < actualDiagnostics.length; i++) {
        const expectedDiagnostic = expectedDiagnostics[i] as BsDiagnostic;
        const actualDiagnostic = cloneDiagnostic(actualDiagnostics[i], expectedDiagnostic);
        actualDiagnostics[i] = actualDiagnostic as any;
    }
    return [actualDiagnostics, expectedDiagnostics];
}

/**
 * Ensure the DiagnosticCollection includes data from expected list (note - order does not matter).
 * @param arg - any object that contains diagnostics (such as `Program`, `Scope`, or even an array of diagnostics)
 * @param expected an array of expected diagnostics. if it's a string, assume that's a diagnostic error message
 */
export function expectDiagnosticsIncludes(arg: DiagnosticCollection, expected: Array<PartialDiagnostic | string | number>) {
    const actualDiagnostics = getDiagnostics(arg);
    const expectedDiagnostics =
        expected.map(x => {
            let result = x;
            if (typeof x === 'string') {
                result = { message: x };
            } else if (typeof x === 'number') {
                result = { code: x };
            }
            return result as unknown as BsDiagnostic;
        });

    let expectedFound = 0;

    for (const expectedDiagnostic of expectedDiagnostics) {
        const foundDiag = actualDiagnostics.find((actualDiag) => {
            const actualDiagnosticClone = cloneDiagnostic(actualDiag, expectedDiagnostic);
            return JSON.stringify(actualDiagnosticClone) === JSON.stringify(expectedDiagnostic);
        });
        if (foundDiag) {
            expectedFound++;
        }

    }
    expect(expectedFound).to.eql(expectedDiagnostics.length);
}

/**
 * Test that the given object has zero diagnostics. If diagnostics are found, they are printed to the console in a pretty fashion.
 */
export function expectZeroDiagnostics(arg: DiagnosticCollection) {
    const diagnostics = getDiagnostics(arg);
    if (diagnostics.length > 0) {
        let message = `Expected 0 diagnostics, but instead found ${diagnostics.length}:`;
        for (const diagnostic of diagnostics) {
            //escape any newlines
            diagnostic.message = diagnostic.message.replace(/\r/g, '\\r').replace(/\n/g, '\\n');
            message += `\n        • bs${diagnostic.code} "${diagnostic.message}" at ${diagnostic.file?.srcPath ?? ''}#(${diagnostic.range?.start.line}:${diagnostic.range?.start.character})-(${diagnostic.range?.end.line}:${diagnostic.range?.end.character})`;
            //print the line containing the error (if we can find it)srcPath
            const line = diagnostic.file?.fileContents?.split(/\r?\n/g)?.[diagnostic.range?.start.line];
            if (line) {
                message += '\n' + getDiagnosticLine(diagnostic, line, chalk.red);
            }
        }
        assert.fail(message);
    }
}

/**
 * Test if the arg has any diagnostics. This just checks the count, nothing more.
 * @param diagnosticsCollection a collection of diagnostics
 * @param length if specified, checks the diagnostic count is exactly that amount. If omitted, the collection is just verified as non-empty
 */
export function expectHasDiagnostics(diagnosticsCollection: DiagnosticCollection, length: number | null = null) {
    const diagnostics = getDiagnostics(diagnosticsCollection);
    if (length) {
        expect(diagnostics).lengthOf(length);
    } else {
        expect(diagnostics).not.empty;
    }
}

/**
 * Remove sourcemap information at the end of the source
 */
export function trimMap(source: string) {
    return source.replace(/('|<!--)\/\/# sourceMappingURL=.*$/m, '').trimEnd();
}

export function expectCodeActions(test: () => any, expected: CodeActionShorthand[]) {
    const sinon = createSandbox();
    const stub = sinon.stub(codeActionUtil, 'createCodeAction');
    try {
        test();
    } finally {
        sinon.restore();
    }

    const args = stub.getCalls().map(x => x.args[0]);
    //delete any `diagnostics` arrays to help with testing performance (since it's circular...causes all sorts of issues)
    for (let arg of args) {
        delete arg.diagnostics;
    }
    expect(args).to.eql(expected);
}

export function expectInstanceOf<T>(items: any[], constructors: Array<new (...args: any[]) => T>) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const constructor = constructors[i];
        if (!(item instanceof constructor)) {
            throw new Error(`Expected index ${i} to be instanceof ${constructor.name} but instead found ${item.constructor?.name}`);
        }
    }
}

export function getTestTranspile(scopeGetter: () => [program: Program, rootDir: string]) {
    return getTestFileAction((file) => {
        return file.program['_getTranspiledFileContents'](file);
    }, scopeGetter);
}

export function getTestGetTypedef(scopeGetter: () => [program: Program, rootDir: string]) {
    return getTestFileAction((file) => {
        return {
            code: (file as BrsFile).getTypedef(),
            map: undefined
        } as any as CodeWithSourceMap;
    }, scopeGetter);
}

function getTestFileAction(
    action: (file: BscFile) => CodeWithSourceMap,
    scopeGetter: () => [program: Program, rootDir: string]
) {
    return function testFileAction(source: string, expected?: string, formatType: 'trim' | 'none' = 'trim', pkgPath = 'source/main.bs', failOnDiagnostic = true) {
        let [program, rootDir] = scopeGetter();
        expected = expected ? expected : source;
        let file = program.setFile<BrsFile>({ src: s`${rootDir}/${pkgPath}`, dest: pkgPath }, source);
        program.validate();
        if (failOnDiagnostic !== false) {
            expectZeroDiagnostics(program);
        }
        let codeWithMap = action(file);

        let sources = [trimMap(codeWithMap.code), expected];

        for (let i = 0; i < sources.length; i++) {
            if (formatType === 'trim') {
                sources[i] = trim(sources[i]);
            }
        }

        expect(sources[0]).to.equal(sources[1]);
        return {
            file: file,
            source: source,
            expected: expected,
            actual: codeWithMap.code,
            map: codeWithMap.map
        };
    };
}

/**
 * Create a new object based on the keys from another object
 */
function pick<T extends Record<string, any>>(example: T, subject: Record<string, any>): T {
    if (!subject) {
        return subject as T;
    }
    const result = {};
    for (const key of Object.keys(example)) {
        result[key] = subject?.[key];
    }
    return result as T;
}

/**
 * Test a set of completions includes the provided items
 */
export function expectCompletionsIncludes(collection: CompletionItem[] | CompletionList, expectedItems: Array<string | Partial<CompletionItem>>) {
    const completions = Array.isArray(collection) ? collection : collection.items;

    for (const expectedItem of expectedItems) {
        if (typeof expectedItem === 'string') {
            expect(completions.map(x => x.label)).includes(expectedItem);
        } else {
            //match all existing properties of the expectedItem
            let actualItem = pick(
                expectedItem,
                completions.find(x => x.label === expectedItem.label)!
            );
            expect(actualItem).to.eql(expectedItem);
        }
    }
}

/**
 * Expect that the completions list does not include the provided items
 */
export function expectCompletionsExcludes(completions: CompletionItem[], expectedItems: Array<string | Partial<CompletionItem>>) {
    for (const expectedItem of expectedItems) {
        if (typeof expectedItem === 'string') {
            expect(completions.map(x => x.label)).not.includes(expectedItem);
        } else {
            //match all existing properties of the expectedItem
            let actualItem = pick(
                expectedItem,
                completions.find(x => x.label === expectedItem.label)!
            );
            expect(actualItem).to.not.eql(expectedItem);
        }
    }
}

export function expectThrows(callback: () => any, expectedMessage: string | undefined = undefined, failedTestMessage = 'Expected to throw but did not') {
    let wasExceptionThrown = false;
    try {
        callback();
    } catch (e) {
        wasExceptionThrown = true;
        if (expectedMessage) {
            expect((e as any).message).to.eql(expectedMessage);
        }
    }
    if (wasExceptionThrown === false) {
        throw new Error(failedTestMessage);
    }
}

export async function expectThrowsAsync(callback: () => any, expectedMessage = undefined, failedTestMessage = 'Expected to throw but did not') {
    let wasExceptionThrown = false;
    try {
        await Promise.resolve(callback());
    } catch (e) {
        wasExceptionThrown = true;
        if (expectedMessage) {
            expect((e as Error)?.message).to.eql(expectedMessage);
        }
    }
    if (wasExceptionThrown === false) {
        throw new Error(failedTestMessage);
    }
}

export function objectToMap<T>(obj: Record<string, T>) {
    const result = new Map<string, T>();
    for (let key in obj) {
        result.set(key, obj[key]);
    }
    return result;
}

export function mapToObject<T>(map: Map<any, T>) {
    const result = {} as Record<string, T>;
    for (let [key, value] of map) {
        result[key] = value;
    }
    return result;
}

export function stripConsoleColors(inputString) {
    // Regular expression to match ANSI escape codes for colors
    // eslint-disable-next-line no-control-regex
    const colorPattern = /\u001b\[(?:\d*;){0,5}\d*m/g;

    // Remove all occurrences of ANSI escape codes
    return inputString.replace(colorPattern, '');
}

type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

/**
 * Mock something, and get a promise when it has been called once
 */
export async function onCalledOnce<T, K extends keyof T>(thing: T, method: K): Promise<FunctionReturnType<T[K]>> {
    return new Promise((resolve, reject) => {
        const stub = sinon.stub(thing, method).callsFake(async function _(this: any, ...args: any[]) {
            const result = await stub.wrappedMethod.apply(this, args);
            sinon.restore();
            resolve(result);
            return result;
        });
    });
}


/**
 * Create a stub that resolves a promise after the function has settled for a period of time
 */
export function createInactivityStub<T, K extends keyof T>(obj: T, methodName: keyof T, inactivityPeriod = 400, sinonRef = sinon) {
    // Store reference to the original method
    const originalMethod = obj[methodName];

    // Track the timeout for inactivity
    let inactivityTimeout;

    // Create the inactivity promise
    let inactivityPromiseResolve;
    const inactivityPromise = new Promise((resolve) => {
        inactivityPromiseResolve = resolve;
    });

    // Stub the method
    const stub = sinonRef.stub(obj, methodName).callsFake(function (this: any, ...args) {
        // Call the original method
        const result = (originalMethod as any).apply(this, args);

        // Clear previous inactivity timeout and restart the timer
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(() => {
            inactivityPromiseResolve();
        }, inactivityPeriod);

        return result;
    });

    // Return the stub and inactivity promise
    return {
        stub: stub,
        promise: inactivityPromise
    };
}

export async function once<T = any>(
    obj: { on: (event, callback) => () => void },
    event: string
): Promise<T[]> {
    return new Promise<T[]>((resolve) => {
        const off = obj.on('diagnostics', (...args) => {
            off();
            resolve(args);
        });
    });
}
