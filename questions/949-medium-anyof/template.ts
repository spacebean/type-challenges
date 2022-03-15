type IsFalse = false | 0 | '' | [] | { [_ in any]: never };

export type AnyOf<T extends readonly unknown[]> = T extends [infer First, ...infer Rest]
  ? [First] extends [IsFalse]
    ? AnyOf<Rest>
    : true
  : false;
