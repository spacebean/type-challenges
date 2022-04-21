import { Equal, Expect } from '@type-challenges/utils';
import { AppendArgument } from './template';

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, c: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (c: undefined) => void;

// noinspection JSUnusedLocalSymbols
type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];
