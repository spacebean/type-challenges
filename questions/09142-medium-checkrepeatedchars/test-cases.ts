import type { Equal, Expect } from '@type-challenges/utils';
import type { CheckRepeatedChars } from './template';

type cases = [
    Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
    Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
    Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
    Expect<Equal<CheckRepeatedChars<''>, false>>
];
