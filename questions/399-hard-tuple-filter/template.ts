export type FilterOut<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? [First] extends [U]
    ? FilterOut<Rest, U>
    : [First, ...FilterOut<Rest, U>]
  : [];
