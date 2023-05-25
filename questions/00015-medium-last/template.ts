export type Last<T extends unknown[]> = T extends [...unknown[], infer R] ? R : never
