import { Equal, Expect } from '@type-challenges/utils';
import { LookUp } from './template';

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type Animal = Cat | Dog;

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<LookUp<Animal, 'dog'>, Dog>>, Expect<Equal<LookUp<Animal, 'cat'>, Cat>>];
