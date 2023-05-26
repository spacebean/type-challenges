export type Shift<T> = T extends [unknown, ...infer Rest] ? Rest : [];
