import { Equal, Expect } from '@type-challenges/utils';
import { MyReadonly } from './template';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];
