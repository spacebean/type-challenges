type Unbox<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? First extends Promise<infer I>
    ? [I, ...Unbox<Rest>]
    : [First, ...Unbox<Rest>]
    : [];

export declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<Unbox<T>>;
