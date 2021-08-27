import { UnionToIntersection } from 'utility-types';

export type UnionToTuple<T> = UnionToIntersection<T extends any ? (_: T) => void : never> extends (_: infer I) => void
  ? [I, ...UnionToTuple<Exclude<T, I>>]
  : [];
