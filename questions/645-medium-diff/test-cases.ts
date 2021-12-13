import { Equal, Expect } from '@type-challenges/utils';
import { Diff } from './template';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>, Expect<Equal<Diff<Bar, Foo>, { gender: number }>>];
