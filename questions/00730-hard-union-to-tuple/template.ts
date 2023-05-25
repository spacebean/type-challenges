import type { UnionToIntersection } from 'utility-types'

export type UnionToTuple<T> = UnionToIntersection<
    T extends unknown ? (_: T) => void : never
> extends (_: infer I) => void
    ? [...UnionToTuple<Exclude<T, I>>, I]
    : []
