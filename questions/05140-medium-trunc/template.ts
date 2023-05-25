export type Trunc<T extends string | number> = `${T}` extends `${infer R}.${string}` ? R : `${T}`
