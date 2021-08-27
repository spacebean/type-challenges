import { Equal, Expect } from '@type-challenges/utils';
import { PercentageParser } from './template';

type Case1 = ['', '', ''];
type Case2 = ['+', '', ''];
type Case3 = ['+', '1', ''];
type Case4 = ['+', '100', '%'];
type Case5 = ['', '10', '%'];
type Case6 = ['-', '99', '%'];

// noinspection JSUnusedLocalSymbols
type cases = [
  Expect<Equal<PercentageParser<''>, Case1>>,
  Expect<Equal<PercentageParser<'+'>, Case2>>,
  Expect<Equal<PercentageParser<'+1'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'10%'>, Case5>>,
  Expect<Equal<PercentageParser<'-99%'>, Case6>>
];
