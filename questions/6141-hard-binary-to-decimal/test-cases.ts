import { Equal, Expect } from '@type-challenges/utils';
import { BinaryToDecimal } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'100'>, 4>>,
  Expect<Equal<BinaryToDecimal<'01'>, 1>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>
];
