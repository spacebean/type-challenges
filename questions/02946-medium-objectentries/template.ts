import type { IsNever } from '../01042-medium-isnever/template'

export type ObjectEntries<T, R = Required<T>> = {
  [K in keyof R]: [K, IsNever<R[K]> extends true ? undefined : R[K]]
}[keyof R]
