export type MyParameters<T extends (...args: keyof unknown) => unknown> = T extends (
  ...args: infer I
) => unknown
  ? I
  : never
