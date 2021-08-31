import { UnionToTuple } from '../730-hard-union-to-tuple/template';

type Tuple = any[];

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type DigitString = `${Digit}${string}`;

type IsTuple<T> = T extends Tuple ? true : false;

type KeysUnion<T> = IsTuple<T> extends true ? DigitString & keyof T : string & keyof T;

type Keys<T, Keys = UnionToTuple<KeysUnion<T>>> = IsTuple<Keys> extends true ? Keys : never;

type SetValue<T, Key extends keyof any, Value> = Value extends any
  ? IsTuple<T> extends true
    ? {
        [K in keyof T]: K extends Key ? Value : T[K];
      }
    : {
        [K in keyof T | Key]: K extends Key ? Value : K extends keyof T ? T[K] : never;
      }
  : never;

type Reduce<T, Keys extends Tuple> = T extends any
  ? Keys extends [any, ...infer Rest]
    ? Reduce<SetValue<T, Keys[0], DistributeUnions<T[Keys[0]]>>, Rest>
    : T
  : never;

export type DistributeUnions<T> = T extends object ? Reduce<T, Keys<T>> : T;
