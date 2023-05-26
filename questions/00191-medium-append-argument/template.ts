export type AppendArgument<T extends Function, A> = T extends (...args: infer I) => infer O
    ? (...args: [...I, A]) => O
    : never;
