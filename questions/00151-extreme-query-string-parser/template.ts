import type { Equal } from '@type-challenges/utils'

type Split<
    S extends string,
    Separator extends string
    > = S extends `${infer First}${Separator}${infer Rest}` ? [First, ...Split<Rest, Separator>] : [S]

type Contains<T extends unknown[], S extends string> = T extends [infer First, ...infer Rest]
    ? Equal<First, S> extends true
    ? true
    : Contains<Rest, S>
    : false

type Uniq<T extends unknown[], Result extends unknown[] = []> = T extends [string, ...infer Rest]
    ? Contains<Result, T[0]> extends true
    ? Uniq<Rest, Result>
    : Uniq<Rest, [...Result, T[0]]>
    : Result

type StringToObject<S extends string> = S extends `${infer First}=${infer Rest}`
    ? { [_ in First]: Rest }
    : { [_ in S]: true }

type StringsToObjects<T extends unknown[]> = T extends [string, ...infer Rest]
    ? [StringToObject<T[0]>, ...StringsToObjects<Rest>]
    : []

type Merge<X extends object, Y extends object> = {
    [K in keyof X | keyof Y]: K extends keyof X
    ? K extends keyof Y
    ? X[K] extends infer I
    ? I extends unknown[]
    ? [...I, Y[K]]
    : [I, Y[K]]
    : never
    : X[K]
    : K extends keyof Y
    ? Y[K]
    : never
}

type Merges<T extends unknown[], Result extends object = {}> = T extends [object, ...infer Rest]
    ? Merges<Rest, Merge<Result, T[0]>>
    : Result

export type ParseQueryString<S extends string> = S extends ''
    ? {}
    : Merges<StringsToObjects<Uniq<Split<S, '&'>>>>
