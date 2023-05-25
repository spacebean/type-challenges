export type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? Rest extends Capitalize<Rest>
    ? Rest extends Uncapitalize<Rest>
      ? `${First}${KebabCase<Rest>}`
      : `${Uncapitalize<First>}-${KebabCase<Uncapitalize<Rest>>}`
    : `${Uncapitalize<First>}${KebabCase<Rest>}`
  : S
