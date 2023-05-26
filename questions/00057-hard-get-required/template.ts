import type { Equal } from '@type-challenges/utils';

export type GetRequired<T> = {
    [K in keyof T as Equal<{ [_ in K]: T[K] }, { [_ in K]?: T[K] }> extends true ? never : K]: T[K]
};
