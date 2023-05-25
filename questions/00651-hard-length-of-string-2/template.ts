export type LengthOfString<
  S extends string,
  Temp extends unknown[] = []
> = S extends `${infer A}${infer B}${infer C}${infer D}${infer F}${infer E}${infer G}${infer H}`
  ? LengthOfString<H, [...Temp, A, B, C, D, F, E, G]>
  : S extends `${infer A}${infer B}${infer C}${infer D}${infer F}${infer E}${infer G}`
  ? LengthOfString<G, [...Temp, A, B, C, D, F, E]>
  : S extends `${infer A}${infer B}${infer C}${infer D}${infer F}${infer E}`
  ? LengthOfString<E, [...Temp, A, B, C, D, F]>
  : S extends `${infer A}${infer B}${infer C}${infer D}${infer F}`
  ? LengthOfString<F, [...Temp, A, B, C, D]>
  : S extends `${infer A}${infer B}${infer C}${infer D}`
  ? LengthOfString<D, [...Temp, A, B, C]>
  : S extends `${infer A}${infer B}${infer C}`
  ? LengthOfString<C, [...Temp, A, B]>
  : S extends `${infer A}${infer B}`
  ? LengthOfString<B, [...Temp, A]>
  : Temp['length']
