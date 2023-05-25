type Tuple0_9 = [
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
]

type Sum<X extends readonly unknown[], Y extends readonly unknown[]> = [...X, ...Y]

type Tuple10 = Sum<Tuple0_9[1], Tuple0_9[9]>
type Tuple30 = Sum<Tuple10, Sum<Tuple10, Tuple10>>
type Tuple50 = Sum<Tuple10, Sum<Tuple30, Tuple10>>

type Code = {
    a: Tuple0_9[0]
    b: Tuple0_9[1]
    c: Tuple0_9[2]
    d: Tuple0_9[3]
    e: Tuple0_9[4]
    f: Tuple0_9[5]
    g: Tuple0_9[6]
    h: Tuple0_9[7]
    i: Tuple0_9[8]
    j: Tuple0_9[9]
    k: Tuple30
    l: Sum<Tuple30, Tuple0_9[1]>
    m: Sum<Tuple30, Tuple0_9[2]>
    n: Sum<Tuple30, Tuple0_9[3]>
    o: Sum<Tuple30, Tuple0_9[4]>
    p: Sum<Tuple30, Tuple0_9[5]>
    q: Sum<Tuple30, Tuple0_9[6]>
    r: Sum<Tuple30, Tuple0_9[7]>
    s: Sum<Tuple30, Tuple0_9[8]>
    t: Sum<Tuple30, Tuple0_9[9]>
    u: Tuple50
    v: Sum<Tuple50, Tuple0_9[1]>
    w: Sum<Tuple50, Tuple0_9[2]>
    x: Sum<Tuple50, Tuple0_9[3]>
    y: Sum<Tuple50, Tuple0_9[4]>
    z: Sum<Tuple50, Tuple0_9[5]>
}

type IsArray<T extends readonly unknown[]> = number extends T['length'] ? true : false

type KeyToNumber<S extends string> = S extends `${infer First}${infer Rest}`
    ? First extends keyof Code
    ? [...Code[First], ...KeyToNumber<Rest>]
    : []
    : []

declare const CODE: unique symbol

type WithIndex<Element, Key extends string, KeyCode extends number = KeyToNumber<Key>['length']> = {
    [CODE]: KeyCode
} & {
        [_ in KeyCode]: Element
    }

export type Index<Array extends { [CODE]: number }> = Array[typeof CODE]

export function assertArrayIndex<T extends readonly unknown[], K extends string>(
    _array: IsArray<T> extends true ? T : never,
    _key: K
): asserts _array is IsArray<T> extends true ? T & WithIndex<T[number], K> : never {}
