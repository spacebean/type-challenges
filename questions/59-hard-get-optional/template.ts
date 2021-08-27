import { Equal } from '@type-challenges/utils';

export type GetOptional<T> = {
  [K in keyof T as Equal<{ [_ in K]: T[K] }, { [_ in K]?: T[K] }> extends true ? K : never]: T[K];
};
