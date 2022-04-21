// M => minuend, S => subtrahend
import { ConstructTuple } from '../07544-medium-construct-tuple/template';

export type Subtract<M extends number, S extends number> = ConstructTuple<M> extends [
  ...infer R,
  ...ConstructTuple<S>
]
  ? R['length']
  : never;
