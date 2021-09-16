type FlattenDepthImpl<T, N extends number, Temp extends any[] = []> = T extends [any, ...infer Rest]
  ? Temp['length'] extends N
    ? T
    : T[0] extends any[]
    ? [...FlattenDepthImpl<T[0], N, [[], ...Temp]>, ...FlattenDepthImpl<Rest, N, Temp>]
    : [T[0], ...FlattenDepthImpl<Rest, N, Temp>]
  : [];

export type FlattenDepth<T, N extends number = 1> = FlattenDepthImpl<T, N>;
