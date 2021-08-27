export type ToNumber<S extends string, T extends any[] = []> = `${T['length']}` extends S
  ? T['length']
  : ToNumber<S, [any, ...T]>;
