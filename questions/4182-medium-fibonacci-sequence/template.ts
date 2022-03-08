import { MinusOne } from '../2257-medium-minusone/template';

export type Fibonacci<
  T extends number,
  Prev extends any[] = [],
  Next extends any[] = [any]
> = T extends 0 ? Prev['length'] : Fibonacci<MinusOne<T>, Next, [...Prev, ...Next]>;
