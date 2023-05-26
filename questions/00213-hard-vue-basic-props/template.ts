type InferComputed<T> = {
    [K in keyof T]: T[K] extends (...args: keyof unknown) => unknown ? ReturnType<T[K]> : never
};

type TypeConstructor<T> = (new (...args: keyof unknown) => T & object) | (() => T);

type PropType<T> = TypeConstructor<T> | TypeConstructor<T>[];

type Prop<T> = PropType<T> | { type: PropType<T>; };

type InferPropType<P> = P extends Prop<infer R> ? (unknown extends R ? unknown : R) : any;

type InferProps<P> = {
    [K in keyof P]: InferPropType<P[K]>
};

type Options<P, D, C, M, Props> = {
    props: P,
    data(this: Props): D,
    computed: C & ThisType<D>,
    methods: M & ThisType<InferComputed<C> & M & Props>;
};

export declare function VueBasicProps<P, D, C, M, Props = InferProps<P>>(
    options: Options<P, D, C, M, Props>
): unknown;
