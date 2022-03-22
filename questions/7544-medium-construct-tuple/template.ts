export type ConstructTuple<N extends number, R extends unknown[] = []> = R['length'] extends N
  ? R
  : ConstructTuple<N, [...R, unknown]>;
