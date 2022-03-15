export type MyParameters<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer I
) => unknown
  ? I
  : never;
