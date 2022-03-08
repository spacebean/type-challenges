import { Absolute } from '../529-medium-absolute/template';

export enum Comparison {
  Greater,
  Equal,
  Lower,
}

type StringToTuple<S extends string> = S extends `${any}${infer Rest}`
  ? [any, ...StringToTuple<Rest>]
  : [];

type CharToTuple<S extends string, Result extends any[] = []> = `${Result['length']}` extends S
  ? Result
  : CharToTuple<S, [any, ...Result]>;

type CompareByDigits<A, B> = A extends `${infer X}${infer XS}`
  ? B extends `${infer Y}${infer YS}`
    ? CharToTuple<X> extends [...any, ...CharToTuple<Y>]
      ? Comparison.Greater
      : CharToTuple<Y> extends [...any, ...CharToTuple<X>]
      ? Comparison.Lower
      : CompareByDigits<XS, YS>
    : never
  : never;

type Compare<
  A extends string,
  B extends string,
  X extends any[] = StringToTuple<A>,
  Y extends any[] = StringToTuple<B>
> = X extends [any, ...any, ...Y]
  ? Comparison.Lower
  : Y extends [any, ...any, ...X]
  ? Comparison.Greater
  : CompareByDigits<A, B>;

type ComparatorImpl<A extends number, B extends number> = A extends B
  ? Comparison.Equal
  : `${A}` extends `-${any}`
  ? `${B}` extends `-${any}`
    ? Compare<Absolute<A>, Absolute<B>> extends Comparison.Lower
      ? Comparison.Greater
      : Comparison.Lower
    : Comparison.Lower
  : `${B}` extends `-${any}`
  ? Comparison.Greater
  : Compare<`${A}`, `${B}`>;

export type Comparator<A extends number, B extends number> = ComparatorImpl<A, B>;
