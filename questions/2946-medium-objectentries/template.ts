export type ObjectEntries<T, R = Required<T>> = {
  [K in keyof R]: [K, R[K]];
}[keyof R];
