export type Permutation<T, U = T> = [T] extends [never] ? [] : U extends any ? [U, ...Permutation<Exclude<T, U>>] : [];
