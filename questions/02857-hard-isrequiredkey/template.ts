import type { UnionToIntersection } from 'utility-types';
import type { GetRequired } from '../00057-hard-get-required/template';

export type IsRequiredKey<T, K extends keyof T> = UnionToIntersection<
    keyof GetRequired<T>
> extends UnionToIntersection<K>
    ? true
    : false;
