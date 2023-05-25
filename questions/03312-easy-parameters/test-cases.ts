import type { Equal, Expect } from '@type-challenges/utils'
import type { MyParameters } from './template'

const foo = (_arg1: string): void => {}
const bar = (_arg1: boolean, _arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
    Expect<Equal<MyParameters<typeof foo>, [string]>>,
    Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
    Expect<Equal<MyParameters<typeof baz>, []>>
]
