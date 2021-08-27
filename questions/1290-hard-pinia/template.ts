type InferGetters<T extends Record<string, any>> = {
  [K in keyof T]: ReturnType<T[K]>;
};

type Store<S, G, A> = {
  id: string;
  state: () => S;
  getters: G & ThisType<Readonly<S> & InferGetters<G>>;
  actions: A & ThisType<S & Readonly<InferGetters<G>> & A>;
};

export declare function defineStore<S, G, A>(store: Store<S, G, A>): S & A & InferGetters<G>;
