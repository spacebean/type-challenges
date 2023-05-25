export type IndexOf<T, U, Index extends unknown[] = []> = T extends [infer Head, ...infer Tail]
  ? Head extends U
    ? Index['length']
    : IndexOf<Tail, U, [...Index, unknown]>
  : -1
