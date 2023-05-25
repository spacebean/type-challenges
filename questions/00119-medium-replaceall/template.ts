export type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
    ? S
    : S extends `${infer First}${From}${infer Rest}`
    ? `${First}${To}${ReplaceAll<Rest, From, To>}`
    : S
