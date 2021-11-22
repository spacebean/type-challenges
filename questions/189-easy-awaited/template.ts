export type Awaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? Awaited<R>
    : R
  : never;
