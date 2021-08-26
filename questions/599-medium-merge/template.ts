export type Merge<F, S, E extends keyof F = Exclude<keyof F, keyof S>> = {
  [K in E | keyof S]: K extends E ? F[K] : K extends keyof S ? S[K] : never;
};
