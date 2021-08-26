import { Equal, Expect, NotAny } from '@type-challenges/utils';
import { HelloWorld } from './template';

// noinspection JSUnusedLocalSymbols
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
