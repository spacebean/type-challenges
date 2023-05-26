export type Format<S extends string> = S extends `${string}%${infer First}${infer Rest}`
    ? First extends 's'
    ? (arg: string) => Format<Rest>
    : First extends 'd'
    ? (arg: number) => Format<Rest>
    : Format<Rest>
    : string;
