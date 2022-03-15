import { Equal, Expect } from '@type-challenges/utils';
import { StartsWith } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>
];
