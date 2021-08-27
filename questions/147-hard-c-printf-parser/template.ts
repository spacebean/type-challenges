type ControlsMap = {
  c: 'char';
  s: 'string';
  d: 'dec';
  o: 'oct';
  h: 'hex';
  f: 'float';
  p: 'pointer';
};

export type ParsePrintFormat<S extends string> = S extends `${any}%${infer First}${infer Rest}`
  ? First extends keyof ControlsMap
    ? [ControlsMap[First], ...ParsePrintFormat<Rest>]
    : ParsePrintFormat<Rest>
  : [];
