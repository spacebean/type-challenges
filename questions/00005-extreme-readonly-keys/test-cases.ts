import type { Equal, Expect } from '@type-challenges/utils';
import type { GetReadonlyKeys } from './template';

interface Todo1 {
    readonly title: string;
    description: string;
    completed: boolean;
}

interface Todo2 {
    readonly title: string;
    readonly description: string;
    completed?: boolean;
}

type cases = [
    Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
    Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>
];
