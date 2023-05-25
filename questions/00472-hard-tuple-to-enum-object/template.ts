type Index<T extends readonly unknown[]> = T extends readonly [unknown, ...infer Rest]
    ? Index<Rest> | Rest['length']
    : 0

export type Enum<T extends readonly string[], N extends boolean = false> = {
    readonly [K in Index<T> as Capitalize<T[K]>]: N extends true ? K : T[K]
}
