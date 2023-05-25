type Or<X extends boolean, Y extends boolean> = X extends true
    ? true
    : Y extends true
    ? true
    : false

export type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    InRange extends boolean = false,
    Index extends unknown[] = []
    > = Start extends End
    ? T
    : Index['length'] extends End
    ? T
    : T extends [infer First, ...infer Rest]
    ? Or<Index['length'] extends Start ? true : false, InRange> extends true
    ? [N, ...Fill<Rest, N, Start, End, true, [...Index, unknown]>]
    : [First, ...Fill<Rest, N, Start, End, false, [...Index, unknown]>]
    : T
