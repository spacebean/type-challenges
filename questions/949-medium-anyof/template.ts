type IsFalse = false | 0 | '' | [] | { [_ in any]: never };

export type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? [First] extends [IsFalse]
    ? AnyOf<Rest>
    : true
  : false;
