export type TupleToNestedObject<T, U> = T extends [any, ...infer Rest]
  ? { [_ in T[0]]: TupleToNestedObject<Rest, U> }
  : U;
