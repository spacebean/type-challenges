export type Get<T, S extends string> = S extends `${infer First}.${infer Rest}`
    ? First extends keyof T
    ? Get<T[First], Rest>
    : never
    : S extends keyof T
    ? T[S]
    : never
