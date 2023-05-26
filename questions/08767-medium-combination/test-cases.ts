import type { Equal, Expect } from '@type-challenges/utils';
import type { Combination } from './template';

type cases = [
    Expect<
        Equal<
            Combination<['foo', 'bar', 'baz']>,
            'foo' | 'bar' | 'baz' | 'foo bar baz' | 'bar foo' | 'baz foo' | 'baz bar'
        >
    >
];
