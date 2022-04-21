import { Equal, Expect } from '@type-challenges/utils';
import { If } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<If<true, 'a', 'b'>, 'a'>>, Expect<Equal<If<false, 'a', 2>, 2>>];

// @ts-expect-error
// noinspection JSUnusedLocalSymbols
type error = If<null, 'a', 'b'>;
