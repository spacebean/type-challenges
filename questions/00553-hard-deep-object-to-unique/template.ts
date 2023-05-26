export type DeepObjectToUniq<O extends object> = {
    [K in keyof O]: O[K] extends object ? O[K] & { uniq?: { [_ in K]: O }; } : O[K]
};
