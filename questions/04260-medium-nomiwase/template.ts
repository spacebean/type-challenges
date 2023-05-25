export type AllCombinations<
  S extends string,
  E extends string = ''
> = S extends `${infer F}${infer R}`
  ? `${F}${AllCombinations<`${R}${E}`>}` | AllCombinations<R, `${E}${F}`>
  : ''
