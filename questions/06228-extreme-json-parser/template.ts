type Parser<T> = T extends `${' ' | '\n'}${infer R}`
    ? Parser<R>
    : T extends `null${infer R}`
    ? [null, R]
    : T extends `true${infer R}`
    ? [true, R]
    : T extends `false${infer R}`
    ? [false, R]
    : T extends `"${infer R}`
    ? JString<R>
    : T extends `[${infer R}`
    ? JArray<R>
    : T extends `{${infer R}`
    ? JObject<R>
    : undefined

type ControlChars = { r: '\r' n: '\n' b: '\b' f: '\f' }

type JString<T, S extends string = ''> = T extends `"${infer R}`
    ? [S, R]
    : (
        T extends `\\${infer F}${infer R}`
        ? F extends keyof ControlChars
        ? [F, R]
        : undefined
        : undefined
    ) extends [infer F, infer R]
    ? JString<R, `${S}${F extends keyof ControlChars ? ControlChars[F] : undefined}`>
    : T extends `${infer F}${infer R}`
    ? JString<R, `${S}${F}`>
    : undefined

type JArray<T, A extends unknown[] = []> = T extends `]${infer R}`
    ? [A, R]
    : T extends `,${infer R}`
    ? JArray<R, A>
    : Parser<T> extends [infer F, infer R]
    ? JArray<R, [...A, F]>
    : undefined

type Merge<T> = {
    [K in keyof T]: T[K]
}

type JObject<T, S extends string = '', O extends object = {}> = T extends `${' ' | '\n'}${infer R}`
    ? JObject<R, S, O>
    : T extends `}${infer R}`
    ? [O, R]
    : T extends `"${string}`
    ? Parser<T> extends [`${infer F}`, infer R]
    ? JObject<R, F, O>
    : undefined
    : T extends `,${infer R}`
    ? JObject<R, S, O>
    : T extends `:${infer R}`
    ? Parser<R> extends [infer F, infer R]
    ? JObject<R, '', Merge<{ [_ in S]: F } & O>>
    : undefined
    : undefined

export type Parse<S extends string> = Parser<S> extends [infer R, unknown] ? R : never
