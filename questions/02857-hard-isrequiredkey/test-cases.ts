import { Equal, Expect } from '@type-challenges/utils';
import { IsRequiredKey } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>
];
