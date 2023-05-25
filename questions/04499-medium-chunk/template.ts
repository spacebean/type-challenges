type SplitAt<
  T extends unknown[],
  N extends number,
  R extends [unknown[], unknown[]] = [[], []]
> = R[1]['length'] extends N
  ? R
  : T extends [infer First, ...infer Rest]
  ? SplitAt<Rest, N, [Rest, [...R[1], First]]>
  : R

export type Chunk<
  T extends unknown[],
  N extends number,
  R extends unknown[] = [],
  Temp extends [unknown[], unknown[]] = SplitAt<T, N>
> = Temp extends [[], []]
  ? R
  : Temp extends [[...unknown[]], [...unknown[]]]
  ? Chunk<Temp[0], N, [...R, Temp[1]]>
  : Temp extends [[], [...unknown[]]]
  ? [...R, Temp[1]]
  : R
