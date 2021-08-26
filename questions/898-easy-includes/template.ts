export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? [First] extends [U]
    ? [U] extends [First]
      ? true
      : Includes<Rest, U>
    : Includes<Rest, U>
  : false;
