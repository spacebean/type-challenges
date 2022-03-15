import {
  DigitsToTuples,
  Longer,
  ProcessSum,
  Tuple0_9,
  TuplesToNumber,
} from '../476-extreme-sum/template';

type IsArray<T> = T extends any[] ? T : never;

type SingleMultiply<
  X extends unknown[],
  Y extends unknown[],
  Result extends unknown[] = []
> = Y extends [unknown, ...infer Rest] ? SingleMultiply<X, Rest, [...X, ...Result]> : Result;

type SplitSingleMultiply<T extends unknown[], Temp extends unknown[] = []> = T extends [
  ...infer Reminder,
  unknown,
  ...Tuple0_9[9]
]
  ? SplitSingleMultiply<Reminder, [unknown, ...Temp]>
  : [Temp, T];

type MultipleWithSingleMultiply<
  X extends unknown[],
  Y extends unknown[],
  Reminder extends unknown[] = [],
  Temp extends unknown[] = []
> = Y extends []
  ? []
  : X extends [...infer Rest, infer Last]
  ? Last extends unknown[]
    ? SplitSingleMultiply<[...SingleMultiply<Last, Y>, ...Reminder]> extends infer R
      ? MultipleWithSingleMultiply<Rest, Y, IsArray<R>[0], [IsArray<R>[1], ...Temp]>
      : never
    : never
  : Reminder extends []
  ? Temp
  : [Reminder, ...Temp];

type ListOfMultiplies<
  X extends unknown[],
  Y extends unknown[],
  Zeroes extends unknown[] = [],
  Result extends unknown[] = []
> = Y extends [...infer YS, infer Y0]
  ? Y0 extends []
    ? ListOfMultiplies<X, YS, [[], ...Zeroes], [[], ...Result]>
    : ListOfMultiplies<
        X,
        YS,
        [[], ...Zeroes],
        [[...MultipleWithSingleMultiply<X, IsArray<Y0>>, ...Zeroes], ...Result]
      >
  : Result;

type ProcessMultiply<T extends unknown[], Result extends unknown[] = []> = T extends [
  ...infer Rest,
  infer First
]
  ? ProcessMultiply<Rest, ProcessSum<IsArray<First>, Result>>
  : Result;

export type Multiply<
  A extends string | number | bigint,
  B extends string | number | bigint
> = `${A}` extends `${0}`
  ? '0'
  : `${B}` extends `${0}`
  ? `${B}`
  : Longer<`${A}`, `${B}`> extends true
  ? TuplesToNumber<
      ProcessMultiply<ListOfMultiplies<DigitsToTuples<`${A}`>, DigitsToTuples<`${B}`>>>
    >
  : TuplesToNumber<
      ProcessMultiply<ListOfMultiplies<DigitsToTuples<`${B}`>, DigitsToTuples<`${A}`>>>
    >;
