export type AppendToObject<T, U extends string, V, E extends keyof T = Exclude<keyof T, U>> = {
    [K in E | U]: K extends U ? V : K extends E ? T[K] : never
}
