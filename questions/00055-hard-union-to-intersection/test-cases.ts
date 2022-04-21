import { Equal, Expect } from '@type-challenges/utils';
import { UnionToIntersection } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<
    Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>
  >
];
