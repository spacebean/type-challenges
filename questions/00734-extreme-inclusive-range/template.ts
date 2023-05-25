import type { Last } from '../00015-medium-last/template'

type _Repeat<N extends number, T extends unknown[] = []> = T['length'] extends N
  ? [...T, T['length']]
  : { __rec: _Repeat<N, [...T, T['length']]> }

type _Recurse<T> = T extends { __rec: never }
  ? never
  : T extends { __rec: { __rec: infer U } }
  ? { __rec: _Recurse<U> }
  : T extends { __rec: infer U }
  ? U
  : T

type Recurse<T> = T extends { __rec: unknown } ? Recurse<_Recurse<T>> : T

type Repeat<N extends number> = Recurse<_Repeat<N>>

type IsArray<T> = T extends unknown[] ? T : never

export type InclusiveRange<
  Lower extends number,
  Higher extends number,
  LowerTuple = Repeat<Lower>,
  HigherTuple = Repeat<Higher>
> = HigherTuple extends [...IsArray<LowerTuple>, ...infer R]
  ? [Last<IsArray<LowerTuple>>, ...R]
  : []
