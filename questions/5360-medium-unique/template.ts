type Contains<T, U extends unknown[]> = U extends [infer Head, ...infer Tail]
  ? T extends Head
    ? true
    : Contains<T, Tail>
  : false;

export type Unique<T, Result extends unknown[] = []> = T extends [infer Head, ...infer Tail]
  ? Contains<Head, Result> extends true
    ? Unique<Tail, Result>
    : Unique<Tail, [...Result, Head]>
  : Result;
