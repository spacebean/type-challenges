import { Equal, Expect } from '@type-challenges/utils';
import { ToNumber } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>
];
