export type IsTuple<T> = T extends [any, ...any] | readonly [any, ...any] | [] | readonly []
  ? true
  : false;
