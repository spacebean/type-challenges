type InferComputed<T> = {
  [K in keyof T]: T[K] extends (...args: keyof unknown) => unknown ? ReturnType<T[K]> : never
}

type Options<D, C, M> = {
  data(this: undefined): D
  computed: C & ThisType<D>
  methods: M & ThisType<InferComputed<D & C> & M>
}

export declare function SimpleVue<D, C, M>(options: Options<D, C, M>): unknown
