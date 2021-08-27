type InferComputed<T extends Record<string, any>> = {
  [K in keyof T]: ReturnType<T[K]>;
};

type TypeConstructor<T> = (new (...args: any[]) => T & object) | (() => T);

type PropType<T> = TypeConstructor<T> | TypeConstructor<T>[];

type Prop<T> = PropType<T> | { type: PropType<T> };

type InferPropType<P> = P extends Prop<infer R> ? (unknown extends R ? any : R) : any;

type InferProps<P> = {
  [K in keyof P]: InferPropType<P[K]>;
};

type Options<P, D, C, M, Props> = {
  props: P;
  data(this: Props): D;
  computed: C & ThisType<D>;
  methods: M & ThisType<InferComputed<C> & M & Props>;
};

export declare function VueBasicProps<P, D, C, M, Props = InferProps<P>>(options: Options<P, D, C, M, Props>): any;
