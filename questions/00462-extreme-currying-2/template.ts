type Remove<X extends unknown[], Y extends unknown[]> = Y extends [unknown, ...infer YS]
  ? X extends [unknown, ...infer XS]
    ? Remove<XS, YS>
    : []
  : X

type PartialParameters<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [] | [First] | [First, ...PartialParameters<Rest>]
  : []

type Curry<I extends unknown[], O> = I extends [infer First, ...infer Rest]
  ? <P extends unknown[] = PartialParameters<Rest>>(
      arg: First,
      ..._: P
    ) => Curry<Remove<Rest, P>, O>
  : O

export declare function DynamicParamsCurrying<I extends unknown[], O>(
  fn: (...args: I) => O
): Curry<I, O>
