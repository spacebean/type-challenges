export type MyOmit<T, U> = {
  [K in keyof T as Exclude<K, U>]: T[K];
};
