type Join<T extends string[], D extends string> = T extends [any]
  ? T[0]
  : T extends [any, ...infer Rest]
  ? Rest extends string[]
    ? `${T[0]}${D}${Join<Rest, D>}`
    : never
  : '';

export declare function join<D extends string>(delimiter: D): <T extends string[]>(...parts: T) => Join<T, D>;
