type IndexMatches<
  Head extends any[],
  Tail extends any[],
  Index extends number
> = `${Index}` extends `-${Tail['length']}`
  ? true
  : `${Index}` extends `${Head['length']}`
  ? true
  : false;

type Or<X extends boolean, Y extends boolean> = X extends true
  ? true
  : Y extends true
  ? true
  : false;

type SliceImpl<
  Start extends number,
  End extends number,
  Head extends any[],
  Tail extends any[],
  Result extends any[],
  InRange extends boolean = false
> = Tail extends [infer First, ...infer Rest]
  ? IndexMatches<Head, Tail, End> extends true
    ? Result
    : Or<IndexMatches<Head, Tail, Start>, InRange> extends true
    ? SliceImpl<Start, End, [...Head, First], Rest, [...Result, First], true>
    : SliceImpl<Start, End, [...Head, First], Rest, Result>
  : Result;

export type Slice<
  Arr extends any[],
  Start extends number = 0,
  End extends number = Arr['length']
> = SliceImpl<Start, End, [], Arr, []>;
