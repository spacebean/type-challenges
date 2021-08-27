type Curry<I extends any[], O extends boolean> = I extends [infer First, ...infer Rest]
  ? (arg: First) => Curry<Rest, O>
  : O;

export declare function Currying<I extends any[], O extends boolean>(fn: (...args: I) => O): Curry<I, O>;
