export type Push<T extends unknown[], U> = [U] extends [T[number]]
    ? T
    : T extends [...infer I]
    ? [...I, U]
    : [U]
