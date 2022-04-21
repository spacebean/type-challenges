export type CapitalizeWords<S extends string> = S extends `${infer First} ${infer Rest}`
  ? `${Capitalize<First>} ${CapitalizeWords<Capitalize<Rest>>}`
  : S extends `${infer First}.${infer Rest}`
  ? `${Capitalize<First>}.${CapitalizeWords<Capitalize<Rest>>}`
  : S extends `${infer First},${infer Rest}`
  ? `${Capitalize<First>},${CapitalizeWords<Capitalize<Rest>>}`
  : Capitalize<S>;
