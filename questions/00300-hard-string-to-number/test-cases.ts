import type { Equal, Expect } from '@type-challenges/utils';
import type { ToNumber } from './template';

type cases = [
    Expect<Equal<ToNumber<'0'>, 0>>,
    Expect<Equal<ToNumber<'5'>, 5>>,
    Expect<Equal<ToNumber<'12'>, 12>>,
    Expect<Equal<ToNumber<'27'>, 27>>,
    Expect<Equal<ToNumber<'18@7_$%'>, never>>
];
