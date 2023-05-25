export type Join<T extends unknown[], U extends string | number> = T extends [unknown]
  ? T[0]
  : T extends [string, ...infer Tail]
  ? `${T[0]}${U}${Join<Tail, U>}`
  : ''
