export type Diff<O, O1> = {
    [K in keyof O | keyof O1 as K extends keyof O ? (K extends keyof O1 ? never : K) : K]: (O &
        O1)[K]
}
