import { DigitsToTuples, Longer, ProcessSum, Tuple0_9, TuplesToNumber } from '../476-extreme-sum/template';

type IsArray<T> = T extends any[] ? T : never;

type SingleMultiply<X extends any[], Y extends any[], Result extends any[] = []> = Y extends [any, ...infer Rest]
  ? SingleMultiply<X, Rest, [...X, ...Result]>
  : Result;

type SplitSingleMultiply<T extends any[], Temp extends any[] = []> = T extends [...infer Reminder, any, ...Tuple0_9[9]]
  ? SplitSingleMultiply<Reminder, [any, ...Temp]>
  : [Temp, T];

type MultipleWithSingleMultiply<
  X extends any[],
  Y extends any[],
  Reminder extends any[] = [],
  Temp extends any[] = []
> = Y extends []
  ? []
  : X extends [...infer Rest, infer Last]
  ? Last extends any[]
    ? SplitSingleMultiply<[...SingleMultiply<Last, Y>, ...Reminder]> extends infer R
      ? MultipleWithSingleMultiply<Rest, Y, IsArray<R>[0], [IsArray<R>[1], ...Temp]>
      : never
    : never
  : Reminder extends []
  ? Temp
  : [Reminder, ...Temp];

type ListOfMultiplies<
  X extends any[],
  Y extends any[],
  Zeroes extends any[] = [],
  Result extends any[] = []
> = Y extends [...infer YS, infer Y0]
  ? Y0 extends []
    ? ListOfMultiplies<X, YS, [[], ...Zeroes], [[], ...Result]>
    : ListOfMultiplies<X, YS, [[], ...Zeroes], [[...MultipleWithSingleMultiply<X, IsArray<Y0>>, ...Zeroes], ...Result]>
  : Result;

type ProcessMultiply<T extends any[], Result extends any[] = []> = T extends [...infer Rest, infer First]
  ? ProcessMultiply<Rest, ProcessSum<IsArray<First>, Result>>
  : Result;

export type Multiply<A extends string | number | bigint, B extends string | number | bigint> = `${A}` extends `${0}`
  ? '0'
  : `${B}` extends `${0}`
  ? `${B}`
  : Longer<`${A}`, `${B}`> extends true
  ? TuplesToNumber<ProcessMultiply<ListOfMultiplies<DigitsToTuples<`${A}`>, DigitsToTuples<`${B}`>>>>
  : TuplesToNumber<ProcessMultiply<ListOfMultiplies<DigitsToTuples<`${B}`>, DigitsToTuples<`${A}`>>>>;
