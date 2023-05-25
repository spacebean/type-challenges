import type { Equal, Expect } from '@type-challenges/utils'
import type { Awaited } from './template'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
  Expect<Equal<Awaited<Z>, string | number>>,
  Expect<Equal<Awaited<Z1>, string | boolean>>,
  Expect<Equal<Awaited<T>, number>>
]

// @ts-expect-error
type error = Awaited<number>
