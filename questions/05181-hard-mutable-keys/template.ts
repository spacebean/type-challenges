import type { Equal } from '@type-challenges/utils';

export type MutableKeys<T> = keyof {
    [K in keyof T as Equal<{ [_ in K]: T[K] }, { readonly [_ in K]: T[K] }> extends true
    ? never
    : K]: T[K]
};
