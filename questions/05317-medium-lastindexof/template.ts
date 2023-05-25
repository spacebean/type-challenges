export type LastIndexOf<T extends unknown[], U extends number> = T extends [
    ...infer Head,
    infer Last
]
    ? Last extends U
    ? Head['length']
    : LastIndexOf<Head, U>
    : -1
