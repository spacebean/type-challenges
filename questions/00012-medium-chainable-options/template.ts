export type Chainable<T = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & { [_ in K]: V }>
    get(): T
}
