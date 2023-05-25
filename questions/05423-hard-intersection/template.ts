type Contains<T, U extends unknown[]> = U extends [infer Head, ...infer Tail]
    ? T extends Head
    ? true
    : Contains<T, Tail>
    : false

type ContainsAll<T, U extends unknown[]> = U extends [infer Head, ...infer Tail]
    ? Head extends unknown[]
    ? Contains<T, Head> extends true
    ? ContainsAll<T, Tail>
    : never
    : T extends Head
    ? ContainsAll<T, Tail>
    : never
    : T

export type Intersection<T extends unknown[]> = T extends [infer X, ...infer XS]
    ? X extends [infer Y, ...infer YS]
    ? ContainsAll<Y, XS> | Intersection<[YS, ...XS]>
    : ContainsAll<X, XS>
    : never
