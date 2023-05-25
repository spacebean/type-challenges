export type ToNumber<S extends string, T extends unknown[] = []> = `${T['length']}` extends S
    ? T['length']
    : ToNumber<S, [unknown, ...T]>
