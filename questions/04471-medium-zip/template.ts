export type Zip<T, U, R extends unknown[] = []> = [T, U] extends [
  [infer H1, ...infer T1],
  [infer H2, ...infer T2]
]
  ? Zip<T1, T2, [...R, [H1, H2]]>
  : R
