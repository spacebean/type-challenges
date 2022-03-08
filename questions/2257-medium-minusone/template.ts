type CreateTuple10<T extends any[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];

type CreateTuple1<S extends string, Result extends any[] = []> = `${Result['length']}` extends S
  ? Result
  : CreateTuple1<S, [any, ...Result]>;

type CreateTuple<
  S extends string,
  Result extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? CreateTuple<Rest, [...CreateTuple10<Result>, ...CreateTuple1<First>]>
  : Result;

export type MinusOne<T extends number> = CreateTuple<`${T}`> extends [any, ...infer R]
  ? R['length']
  : never;
