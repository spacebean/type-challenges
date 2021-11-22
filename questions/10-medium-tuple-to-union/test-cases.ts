import {Equal, Expect} from '@type-challenges/utils';
import {TupleToUnion} from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
