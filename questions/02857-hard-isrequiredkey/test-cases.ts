import type { Equal, Expect } from '@type-challenges/utils'
import type { IsRequiredKey } from './template'

type cases = [
    Expect<Equal<IsRequiredKey<{ a: number b?: string }, 'a'>, true>>,
    Expect<Equal<IsRequiredKey<{ a: number b?: string }, 'b'>, false>>,
    Expect<Equal<IsRequiredKey<{ a: number b?: string }, 'b' | 'a'>, false>>
]
