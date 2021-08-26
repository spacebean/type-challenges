// noinspection JSUnusedLocalSymbols

import { Equal, Expect } from '@type-challenges/utils';
import { Awaited } from './template';

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type cases = [Expect<Equal<Awaited<X>, string>>, Expect<Equal<Awaited<Y>, { field: number }>>];

// @ts-expect-error
type error = Awaited<number>;
