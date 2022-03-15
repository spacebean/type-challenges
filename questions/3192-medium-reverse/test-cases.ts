import { Equal, Expect } from '@type-challenges/utils';
import { Reverse } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
];
