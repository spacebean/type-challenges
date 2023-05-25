import type { Equal, Expect } from '@type-challenges/utils'
import type { CapitalizeNestObjectKeys } from './template'

type foo = {
    foo: string
    bars: [{ foo: string }]
}

type Foo = {
    Foo: string
    Bars: [{
        Foo: string
    }]
}

type cases = [
    Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>
]
