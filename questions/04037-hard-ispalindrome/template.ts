import type { Equal } from '@type-challenges/utils'
import type { Reverse } from '../03192-medium-reverse/template'

type StringToTuple<S extends string> = S extends `${infer Head}${infer Tail}`
  ? [Head, ...StringToTuple<Tail>]
  : []

export type IsPalindrome<T extends string | number, A = StringToTuple<`${T}`>> = Equal<
  A,
  Reverse<A>
>
