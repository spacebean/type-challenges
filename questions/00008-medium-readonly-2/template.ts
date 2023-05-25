export type MyReadonly2<T, U extends keyof T = never> = [U] extends [never]
  ? Readonly<T>
  : Readonly<Pick<T, U>> & Omit<T, U>
