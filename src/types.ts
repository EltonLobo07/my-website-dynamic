export type CSSVar = `--${string}`;

export type CustomPropsObj<TCustomProps extends {[K: string]: any}> = {
    [CustomProp in keyof TCustomProps as `$${CustomProp & string}`]: TCustomProps[CustomProp]
};
