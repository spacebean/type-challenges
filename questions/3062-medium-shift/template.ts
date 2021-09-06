export type Shift<T> = T extends [any, ...infer Rest] ? Rest : [];
