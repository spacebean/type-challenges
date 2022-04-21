import { Equal, Expect } from '@type-challenges/utils';
import { TupleToObject } from './template';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >
];

// @ts-expect-error
// noinspection JSUnusedLocalSymbols
type error = TupleToObject<[[1, 2], {}]>;
