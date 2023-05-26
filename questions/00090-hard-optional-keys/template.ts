import type { GetOptional } from '../00059-hard-get-optional/template';

export type OptionalKeys<T> = keyof GetOptional<T>;
