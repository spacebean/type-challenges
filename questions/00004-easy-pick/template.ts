export type MyPick<T, U extends keyof T> = {
  [K in keyof T as K extends U ? K : never]: T[K]
}
