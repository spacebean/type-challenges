import type { Comparator, Comparison } from '../00274-extreme-integers-comparator/template';

export type GreaterThan<T extends number, U extends number> = Comparator<
    T,
    U
> extends Comparison.Greater
    ? true
    : false;
