import { Equal, Expect } from '@type-challenges/utils';
import { IsPalindrome } from './template'; // noinspection JSUnusedLocalSymbols

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>
];
