export type Push<T, U> = T extends [...infer I] ? [...I, U] : [U];
