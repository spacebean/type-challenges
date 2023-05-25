export type RemoveIndexSignature<T> = {
    [K in keyof T as number extends K
    ? never
    : string extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K]
}
