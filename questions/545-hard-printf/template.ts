export type Format<S extends string> = S extends `${any}%${infer First}${infer Rest}`
  ? First extends 's'
    ? (arg: string) => Format<Rest>
    : First extends 'd'
    ? (arg: number) => Format<Rest>
    : Format<Rest>
  : string;
