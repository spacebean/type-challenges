import type { Equal, Expect } from '@type-challenges/utils'
import type { FirstUniqueCharIndex } from './template'

type cases = [
    Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
    Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
    Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>
]
