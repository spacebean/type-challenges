type Unbox<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends Promise<infer I>
    ? [I, ...Unbox<Rest>]
    : [First, ...Unbox<Rest>]
  : [];

export declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<Unbox<T>>;
