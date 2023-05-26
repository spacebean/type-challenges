import type { CamelCase } from '../00114-hard-camelcase/template';

export type Camelize<T> = {
    [K in keyof T as K extends string ? CamelCase<K> : K]: T[K] extends [infer I]
    ? [Camelize<I>]
    : T[K] extends object
    ? Camelize<T[K]>
    : T[K]
};
