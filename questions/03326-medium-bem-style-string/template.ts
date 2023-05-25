type Split<T extends string[], D extends string> = T extends [] ? '' : `${D}${T[number]}`

export type BEM<B extends string, E extends string[], M extends string[]> = `${B}${Split<
  E,
  '__'
>}${Split<M, '--'>}`
