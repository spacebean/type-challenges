type InferGetters<T> = {
  [K in keyof T]: T[K] extends (...args: keyof unknown) => unknown ? ReturnType<T[K]> : never
}

type Store<S, G, A> = {
  id: string
  state: () => S
  getters: G & ThisType<Readonly<S> & InferGetters<G>>
  actions: A & ThisType<S & Readonly<InferGetters<G>> & A>
}

export declare function defineStore<S, G, A>(store: Store<S, G, A>): S & A & InferGetters<G>
