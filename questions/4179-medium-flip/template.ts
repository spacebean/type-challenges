export type Flip<T> = {
  [K in keyof T as `${NonNullable<T[K]>}`]: K;
};
