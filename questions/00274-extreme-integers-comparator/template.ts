import type { Absolute } from '../00529-medium-absolute/template'

export enum Comparison {
    Greater,
    Equal,
    Lower
}

type StringToTuple<S extends string> = S extends `${string}${infer Rest}`
    ? [unknown, ...StringToTuple<Rest>]
    : []

type CharToTuple<S extends string, Result extends unknown[] = []> = `${Result['length']}` extends S
    ? Result
    : CharToTuple<S, [unknown, ...Result]>

type CompareByDigits<A, B> = A extends `${infer X}${infer XS}`
    ? B extends `${infer Y}${infer YS}`
    ? CharToTuple<X> extends [...unknown[], ...CharToTuple<Y>]
    ? Comparison.Greater
    : CharToTuple<Y> extends [...unknown[], ...CharToTuple<X>]
    ? Comparison.Lower
    : CompareByDigits<XS, YS>
    : never
    : never

type Compare<
    A extends string,
    B extends string,
    X extends unknown[] = StringToTuple<A>,
    Y extends unknown[] = StringToTuple<B>
    > = X extends [unknown, ...unknown[], ...Y]
    ? Comparison.Lower
    : Y extends [unknown, ...unknown[], ...X]
    ? Comparison.Greater
    : CompareByDigits<A, B>

type ComparatorImpl<A extends number, B extends number> = A extends B
    ? Comparison.Equal
    : `${A}` extends `-${string}`
    ? `${B}` extends `-${string}`
    ? Compare<Absolute<A>, Absolute<B>> extends Comparison.Lower
    ? Comparison.Greater
    : Comparison.Lower
    : Comparison.Lower
    : `${B}` extends `-${string}`
    ? Comparison.Greater
    : Compare<`${A}`, `${B}`>

export type Comparator<A extends number, B extends number> = ComparatorImpl<A, B>
