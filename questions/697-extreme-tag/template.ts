import { IsNever } from '../1042-medium-isnever/template';
import { Equal, IsAny } from '@type-challenges/utils';
import { IsUnion } from '../1097-medium-isunion/template';

export type Tags<T, A extends readonly string[]> = () => [T, A];

type GetTagged<T> = T extends Tags<infer R, any> ? R : never;

type IsUnknown<T> = Equal<T, unknown> extends true ? true : false;

type SetTags<T, A extends readonly string[]> = true extends IsNever<T> | IsAny<T> | IsUnknown<T>
  ? Tags<T, A>
  : T | (T & Tags<T, A>);

type Rest<T extends readonly string[]> = T extends readonly [any, ...infer Rest]
  ? Rest extends ReadonlyArray<string>
    ? Rest
    : never
  : [];

type ContainsTag<A extends readonly string[], S extends string> = A extends readonly [any, ...any]
  ? Equal<A[0], S> extends true
    ? true
    : ContainsTag<Rest<A>, S>
  : false;

type ContainsTags<A extends readonly string[], B extends readonly string[]> = A extends readonly [
  any,
  ...any
]
  ? A extends [...B, ...any]
    ? true
    : ContainsTags<Rest<A>, B>
  : false;

type ContainsExactTags<A extends readonly string[], B extends readonly string[]> = A extends B
  ? true
  : false;

type IsTuple<T> = T extends readonly any[] ? T : never;

export type GetTags<T> = IsNever<Exclude<T, GetTagged<T>>> extends true
  ? true extends IsNever<T> | IsAny<T>
    ? []
    : T extends Tags<any, infer R>
    ? R
    : never
  : T extends Tags<never, infer R>
  ? R
  : [];

export type Tag<T, S extends string> = SetTags<UnTag<T>, [...GetTags<T>, S]>;

export type UnTag<T> = T extends any ? (T extends Tags<infer R, any> ? R : T) : never;

export type HasTag<T, S extends string, U = GetTags<T>> = IsUnion<U> extends true
  ? false
  : ContainsTag<IsTuple<U>, S>;

export type HasTags<T, A extends readonly string[], U = GetTags<T>> = IsUnion<U> extends true
  ? false
  : ContainsTags<IsTuple<U>, A>;

export type HasExactTags<T, A extends readonly string[], U = GetTags<T>> = IsUnion<U> extends true
  ? false
  : ContainsExactTags<IsTuple<U>, A>;
