import { Equal, Expect } from '@type-challenges/utils';
import { Mutable } from './template';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>];
