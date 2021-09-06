import { Equal, Expect } from '@type-challenges/utils';
import { Shift } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>, Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>];
