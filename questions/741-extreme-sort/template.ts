import { Comparator, Comparison } from '../274-extreme-integers-comparator/template';

type Greater<X extends number, Y extends number> = Comparator<X, Y> extends Comparison.Greater ? true : false;

type IsNumber<T> = T extends number ? T : never;

type Exchange<T extends any[], P extends boolean, Temp extends any[] = []> = T extends [
  ...infer Rest,
  infer PreLast,
  infer Last
]
  ? Greater<IsNumber<Last>, IsNumber<PreLast>> extends P
    ? Exchange<[...Rest, Last], P, [PreLast, ...Temp]>
    : [...T, ...Temp]
  : [...T, ...Temp];

type InsertionSort<T extends any[], P extends boolean, Result extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? InsertionSort<Rest, P, Exchange<[...Result, First], P>>
  : Result;

export type Sort<T extends any[], P extends boolean = false> = InsertionSort<T, P>;
