type Doubling<T extends unknown[]> = [...T, ...T];

export type BinaryToDecimal<
    S extends string,
    Result extends unknown[] = []
    > = S extends `${infer First}${infer Rest}`
    ? First extends '0'
    ? BinaryToDecimal<Rest, Doubling<Result>>
    : BinaryToDecimal<Rest, [...Doubling<Result>, unknown]>
    : Result['length'];
