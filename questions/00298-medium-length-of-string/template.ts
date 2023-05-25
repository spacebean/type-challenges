type StringToTuple<S extends string> = S extends `${string}${infer Rest}`
    ? [unknown, ...StringToTuple<Rest>]
    : []

export type LengthOfString<S extends string> = StringToTuple<S>['length']
