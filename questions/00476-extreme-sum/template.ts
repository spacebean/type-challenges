export type Tuple0_9 = [
    [],
    [unknown],
    [unknown, unknown],
    [unknown, unknown, unknown],
    [unknown, unknown, unknown, unknown],
    [unknown, unknown, unknown, unknown, unknown],
    [unknown, unknown, unknown, unknown, unknown, unknown],
    [unknown, unknown, unknown, unknown, unknown, unknown, unknown],
    [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown],
    [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
];

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Tuple0_9Index = `${Digits}`;
type DigitToTuple<Index extends Tuple0_9Index> = Tuple0_9[Index];

type IsArray<T> = T extends unknown[] ? T : never;

export type DigitsToTuples<S extends string> = S extends `${infer First}${infer Rest}`
    ? First extends Tuple0_9Index
    ? [DigitToTuple<First>, ...DigitsToTuples<Rest>]
    : never
    : [];

type StringToTuple<S extends string> = S extends `${string}${infer Rest}`
    ? [any, ...StringToTuple<Rest>]
    : [];

export type Longer<A extends string, B extends string> = StringToTuple<A> extends [
    unknown,
    ...unknown[],
    StringToTuple<B>
]
    ? true
    : false;

type SingleSum<X extends unknown[], Y extends unknown[]> = [...X, ...Y];

type SplitSingleSum<T extends unknown[]> = T extends [unknown, ...Tuple0_9[9]]
    ? [[unknown], []]
    : T extends [...infer Reminder, unknown, ...Tuple0_9[9]]
    ? [[unknown], Reminder]
    : [[], T];

export type ProcessSum<
    X extends unknown[],
    Y extends unknown[],
    Reminder extends unknown[] = [],
    Temp extends unknown[] = []
    > = Y extends [...infer YS, infer Y0]
    ? X extends [...infer XS, infer X0]
    ? SplitSingleSum<SingleSum<IsArray<X0>, [...IsArray<Y0>, ...Reminder]>> extends infer I
    ? I extends unknown[][]
    ? ProcessSum<XS, YS, I[0], [I[1], ...Temp]>
    : never
    : never
    : never
    : X extends []
    ? Reminder extends []
    ? Temp
    : [Reminder, ...Temp]
    : Reminder extends []
    ? [...X, ...Temp]
    : ProcessSum<X, [Reminder], [], Temp>;

export type TuplesToNumber<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? `${IsArray<First>['length']}${TuplesToNumber<Rest>}`
    : '';

export type Sum<A extends string | number | bigint, B extends string | number | bigint> = Longer<
    `${A}`,
    `${B}`
> extends true
    ? TuplesToNumber<ProcessSum<DigitsToTuples<`${A}`>, DigitsToTuples<`${B}`>>>
    : TuplesToNumber<ProcessSum<DigitsToTuples<`${B}`>, DigitsToTuples<`${A}`>>>;
