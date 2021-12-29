import { Equal, Expect } from '@type-challenges/utils'
import { GetOptional } from './template'

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>
];
