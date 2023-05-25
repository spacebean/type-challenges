export type PartialByKeys<T, U extends string | number | symbol = keyof T> = Partial<
  Pick<T, Extract<U, keyof T>>
> &
  Omit<T, U> extends infer I
  ? {
      [K in keyof I]: I[K]
    }
  : never
