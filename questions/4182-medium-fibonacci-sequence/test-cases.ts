import { Equal, Expect } from '@type-challenges/utils';
import { Fibonacci } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<Fibonacci<0>, 0>>,
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
];
