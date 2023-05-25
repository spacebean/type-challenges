export type CamelCase<S extends string> = S extends `${infer First}_${infer Second}${infer Rest}`
    ? `${Lowercase<First>}${Capitalize<Second>}${CamelCase<Rest>}`
    : Lowercase<S>
