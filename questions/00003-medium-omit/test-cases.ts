import type { Equal, Expect } from '@type-challenges/utils'
import type { MyOmit } from './template'

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
    completed: boolean
}

interface Expected2 {
    title: string
}

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]
