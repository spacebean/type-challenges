export type CamelCase<S extends string> = S extends `${infer First}-${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? Rest extends Capitalize<Rest>
      ? `${First}-${CamelCase<Rest>}`
      : `${First}${CamelCase<Capitalize<Rest>>}`
    : `${First}-${CamelCase<Rest>}`
  : S;
