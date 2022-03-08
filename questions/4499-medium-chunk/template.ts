type SplitAt<
  T extends any[],
  N extends number,
  R extends [any[], any[]] = [[], []]
> = R[1]['length'] extends N
  ? R
  : T extends [infer First, ...infer Rest]
  ? SplitAt<Rest, N, [Rest, [...R[1], First]]>
  : R;

type Chunk<
  T extends any[],
  N extends number,
  R extends any[] = [],
  Temp extends [any[], any[]] = SplitAt<T, N>
> = Temp extends [[], []]
  ? R
  : Temp extends [[...any], [...any]]
  ? Chunk<Temp[0], N, [...R, Temp[1]]>
  : Temp extends [[], [...any]]
  ? [...R, Temp[1]]
  : R;
