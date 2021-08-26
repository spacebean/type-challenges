import { Alike, Expect } from '@type-challenges/utils';
import { Chainable } from './template';

declare const a: Chainable;

const result = a.option('foo', 123).option('bar', { value: 'Hello World' }).option('name', 'type-challenges').get();

type Expected = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Alike<typeof result, Expected>>];
