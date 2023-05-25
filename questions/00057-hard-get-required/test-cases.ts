import type { Equal, Expect } from '@type-challenges/utils'
import type { GetRequired } from './template'

type cases = [
    Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>
]
