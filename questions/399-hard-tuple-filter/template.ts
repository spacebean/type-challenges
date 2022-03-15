export type FilterOut<T extends unknown[], U> = T extends [infer First, ...infer Rest]
  ? [First] extends [U]
    ? FilterOut<Rest, U>
    : [First, ...FilterOut<Rest, U>]
  : [];
