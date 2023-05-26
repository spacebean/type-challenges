import type { ReplaceAll } from '../00119-medium-replaceall/template';

export type DropString<S extends string, R extends string> = R extends `${infer First}${infer Rest}`
    ? DropString<ReplaceAll<S, First, ''>, Rest>
    : S;
