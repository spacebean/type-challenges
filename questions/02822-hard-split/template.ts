export type Split<S extends string, SEP extends string> = S extends ''
    ? SEP extends ''
    ? []
    : [S]
    : S extends `${infer First}${SEP}${infer Rest}`
    ? [First, ...Split<Rest, SEP>]
    : [string] extends [S]
    ? string[]
    : [S];
