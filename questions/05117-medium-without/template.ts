type Contains<T, U> = T extends [infer Head, ...infer Tail]
  ? Head extends U
    ? true
    : Contains<Tail, U>
  : T extends U
  ? true
  : false

export type Without<T, U> = T extends [infer Head, ...infer Tail]
  ? Contains<U, Head> extends true
    ? Without<Tail, U>
    : [Head, ...Without<Tail, U>]
  : []
