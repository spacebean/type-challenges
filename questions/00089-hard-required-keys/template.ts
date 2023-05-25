import type { GetRequired } from '../00057-hard-get-required/template'

export type RequiredKeys<T> = keyof GetRequired<T>
