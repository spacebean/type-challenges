import type { UnionToIntersection } from 'utility-types';

export type ObjectFromEntries<T> = UnionToIntersection<
    T extends [string, unknown] ? { [_ in T[0]]: T[1] } : never
> extends infer I
    ? { [K in keyof I]: I[K] }
    : never;
