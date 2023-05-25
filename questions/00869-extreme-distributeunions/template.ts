import type { UnionToTuple } from '../00730-hard-union-to-tuple/template'

type Tuple = unknown[]

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type DigitString = `${Digit}${string}`

type IsTuple<T> = T extends Tuple ? true : false

type KeysUnion<T> = IsTuple<T> extends true ? DigitString & keyof T : string & keyof T

type Keys<T, Keys = UnionToTuple<KeysUnion<T>>> = IsTuple<Keys> extends true ? Keys : never

type SetValue<T, Key extends keyof T, Value> = Value extends unknown
    ? IsTuple<T> extends true
    ? {
        [K in keyof T]: K extends Key ? Value : T[K]
    }
    : {
        [K in keyof T | Key]: K extends Key ? Value : K extends keyof T ? T[K] : never
    }
    : never

type Reduce<T, Keys extends Tuple> = T extends unknown
    ? Keys extends [infer Head, ...infer Rest]
    ? Head extends keyof T
    ? Reduce<SetValue<T, Head, DistributeUnions<T[Head]>>, Rest>
    : never
    : T
    : never

export type DistributeUnions<T> = T extends object ? Reduce<T, Keys<T>> : T
