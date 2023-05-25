type CreateTuple10<T extends unknown[]> = [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T
]

type CreateTuple1<S extends string, Result extends unknown[] = []> = `${Result['length']}` extends S
    ? Result
    : CreateTuple1<S, [unknown, ...Result]>

type CreateTuple<
    S extends string,
    Result extends unknown[] = []
    > = S extends `${infer First}${infer Rest}`
    ? CreateTuple<Rest, [...CreateTuple10<Result>, ...CreateTuple1<First>]>
    : Result

export type MinusOne<T extends number> = CreateTuple<`${T}`> extends [unknown, ...infer R]
    ? R['length']
    : never
