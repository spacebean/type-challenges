import type { Reverse } from '../03192-medium-reverse/template'

export type FlipArguments<T> = T extends (...args: infer I) => infer O
  ? (...args: Reverse<I>) => O
  : never
