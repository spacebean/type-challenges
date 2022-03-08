import { Equal, Expect } from '@type-challenges/utils';
import { Currying } from './template';

const curried1 = Currying((_a: string, _b: number, _c: boolean) => true);
const curried2 = Currying(
  (_a: string, _b: number, _c: boolean, _d: boolean, _e: boolean, _f: string, _g: boolean) => true
);

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>>,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >
];
