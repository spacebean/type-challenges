export type MyReturnType<T extends Function> = T extends (...args: keyof unknown) => infer O
    ? O
    : never
