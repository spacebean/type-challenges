export type PercentageParser<S extends string> = S extends `+${infer Digits}%`
  ? ['+', Digits, '%']
  : S extends `-${infer Digits}%`
  ? ['-', Digits, '%']
  : S extends `+${infer Digits}`
  ? ['+', Digits, '']
  : S extends `-${infer Digits}`
  ? ['-', Digits, '']
  : S extends `${infer Digits}%`
  ? ['', Digits, '%']
  : ['', S, ''];
