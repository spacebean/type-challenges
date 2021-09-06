export type Unshift<T, U> = T extends [...infer I] ? [U, ...I] : [U];
