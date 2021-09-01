import { Equal, Expect } from '@type-challenges/utils';
import { ObjectFromEntries } from './template';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>];
