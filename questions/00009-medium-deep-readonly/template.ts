export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends [any]
    ? T[K]
    : T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K]
}
