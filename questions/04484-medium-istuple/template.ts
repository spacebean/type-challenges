export type IsTuple<T> = T extends
    | [unknown, ...unknown[]]
    | readonly [unknown, ...unknown[]]
    | []
    | readonly []
    ? true
    : false
