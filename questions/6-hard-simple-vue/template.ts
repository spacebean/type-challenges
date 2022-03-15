type InferComputed<T extends Record<string, any>> = {
  [K in keyof T]: ReturnType<T[K]>;
};

type Options<D, C, M> = {
  data(this: undefined): D;
  computed: C & ThisType<D>;
  methods: M & ThisType<InferComputed<D & C> & M>;
};

export declare function SimpleVue<D, C, M>(options: Options<D, C, M>): unknown;
