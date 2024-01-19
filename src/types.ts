export type CSSVar = `--${string}`;

export type CustomPropsObj<TCustomProps extends {[K: string]: any}> = {
    [CustomProp in keyof TCustomProps as `$${CustomProp & string}`]: TCustomProps[CustomProp]
};

export type ReadonlyArrayAtLeastOne<T> = readonly [T, ...T[]];

export type CustomDate = string;
