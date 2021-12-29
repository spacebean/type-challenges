import { Equal, Expect } from '@type-challenges/utils'
import { Last } from './template' // noinspection JSUnusedLocalSymbols

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<Last<[3, 2, 1]>, 1>>, Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>];
