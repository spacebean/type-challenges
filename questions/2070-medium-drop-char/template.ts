import { ReplaceAll } from '../119-medium-replaceall/template';

export type DropChar<S extends string, C extends string> = ReplaceAll<S, C, ''>;
