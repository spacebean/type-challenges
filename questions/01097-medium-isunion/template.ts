import type { UnionToIntersection } from 'utility-types';

export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;
