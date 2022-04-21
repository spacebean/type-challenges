import { UnionToIntersection } from 'utility-types';

type Get<T, S extends string> = S extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? { [_ in First]: Get<T[First], Rest> }
    : never
  : S extends keyof T
  ? { [_ in S]: T[S] }
  : never;

export type DeepPick<T, U> = UnionToIntersection<U extends string ? Get<T, U> : never>;
