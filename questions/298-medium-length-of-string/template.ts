type StringToTuple<S extends string> = S extends `${any}${infer Rest}`
  ? [any, ...StringToTuple<Rest>]
  : [];

export type LengthOfString<S extends string> = StringToTuple<S>['length'];
