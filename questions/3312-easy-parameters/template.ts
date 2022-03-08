export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer I) => any
  ? I
  : never;
