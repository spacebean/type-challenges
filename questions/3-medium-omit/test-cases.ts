import { Equal, Expect } from '@type-challenges/utils';
import { MyOmit } from './template';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// @ts-expect-error
// noinspection JSUnusedLocalSymbols
type error = MyOmit<Todo, 'description' | 'invalid'>;

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
];
