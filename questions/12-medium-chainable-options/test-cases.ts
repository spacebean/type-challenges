import { Alike, Expect } from '@type-challenges/utils';
import { Chainable } from './template';

declare const a: Chainable;

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

const result1 = a.option('foo', 123).option('bar', { value: 'Hello World' }).option('name', 'type-challenges').get();

const result2 = a.option('name', 'another name').option('name', 'last name').get();

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Alike<typeof result1, Expected1>>, Expect<Alike<typeof result2, Expected2>>];
