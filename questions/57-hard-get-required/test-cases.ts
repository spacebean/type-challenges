import {Equal, Expect} from '@type-challenges/utils';
import {GetRequired} from './template';

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>
];
