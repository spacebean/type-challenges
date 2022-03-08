type Remove<X extends any[], Y extends any[]> = Y extends [any, ...infer YS]
  ? X extends [any, ...infer XS]
    ? Remove<XS, YS>
    : []
  : X;

type PartialParameters<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [] | [First] | [First, ...PartialParameters<Rest>]
  : [];

type Curry<I extends any[], O> = I extends [infer First, ...infer Rest]
  ? <P extends any[] = PartialParameters<Rest>>(arg: First, ..._: P) => Curry<Remove<Rest, P>, O>
  : O;

export declare function DynamicParamsCurrying<I extends any[], O>(
  fn: (...args: I) => O
): Curry<I, O>;
