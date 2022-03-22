import { Equal, Expect } from '@type-challenges/utils';
import { Awaited } from './template';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
  Expect<Equal<Awaited<Z>, string | number>>
];

// @ts-expect-error
// noinspection JSUnusedLocalSymbols
type error = Awaited<number>;
