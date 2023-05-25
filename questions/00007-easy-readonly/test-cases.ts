import type { Equal, Expect } from '@type-challenges/utils'
import type { MyReadonly } from './template'

interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]
