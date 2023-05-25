export type MyOmit<T, U extends keyof T> = {
    [K in keyof T as Exclude<K, U>]: T[K]
}
