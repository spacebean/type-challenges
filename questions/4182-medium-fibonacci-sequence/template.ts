import { MinusOne } from '../2257-medium-minusone/template';

export type Fibonacci<
  T extends number,
  Prev extends unknown[] = [],
  Next extends unknown[] = [unknown]
> = T extends 0 ? Prev['length'] : Fibonacci<MinusOne<T>, Next, [...Prev, ...Next]>;
