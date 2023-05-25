export type Unshift<T extends unknown[], U> = [U] extends [T[number]]
    ? T
    : T extends [...infer I]
    ? [U, ...I]
    : [U]
