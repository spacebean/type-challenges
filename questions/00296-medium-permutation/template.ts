export type Permutation<T, U = T> = [T] extends [never]
  ? []
  : U extends unknown
  ? [U, ...Permutation<Exclude<T, U>>]
  : [];
