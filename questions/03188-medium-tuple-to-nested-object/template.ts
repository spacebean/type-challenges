export type TupleToNestedObject<T, U> = T extends [string, ...infer Rest]
    ? { [_ in T[0]]: TupleToNestedObject<Rest, U> }
    : U;
