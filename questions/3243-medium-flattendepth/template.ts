export type FlattenDepth<T, N extends number = 1, Temp extends any[] = []> = T extends [
  any,
  ...infer Rest
]
  ? Temp['length'] extends N
    ? T
    : T[0] extends any[]
    ? [...FlattenDepth<T[0], N, [[], ...Temp]>, ...FlattenDepth<Rest, N, Temp>]
    : [T[0], ...FlattenDepth<Rest, N, Temp>]
  : [];
