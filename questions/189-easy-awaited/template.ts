export type Awaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never;
