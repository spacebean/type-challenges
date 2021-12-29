import { Equal, Expect } from '@type-challenges/utils'
import { EndsWith } from './template'

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>
];
