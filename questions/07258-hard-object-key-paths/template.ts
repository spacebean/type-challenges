export type ObjectKeyPaths<T extends object> = keyof {
    [K in keyof T as T[K] extends object
    ?
    | K
    | `${K extends string ? K : never}.${ObjectKeyPaths<T[K]> extends infer I
    ? I extends string | number | symbol
    ? I
    : never
    : never}`
    : K]: never
}
