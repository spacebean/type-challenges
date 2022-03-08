export type RequiredByKeys<T, U extends keyof any = keyof T> = Required<
  Pick<T, Extract<U, keyof T>>
> &
  Omit<T, U> extends infer I
  ? {
      [K in keyof I]: I[K];
    }
  : never;
