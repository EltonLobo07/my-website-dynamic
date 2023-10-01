"use client";

import { twMerge } from "tailwind-merge";
import { useScrollbarClass } from "~/custom-hooks/useScrollbarClass";

type Props = Omit<JSX.IntrinsicElements["div"], "ref">;

export function ScrollbarStyleSetterDiv(props: Props) {
    return (
        <div
            {...props}
            className = {twMerge(
                useScrollbarClass(),
                props.className
            )}
        >
            {props.children}
        </div>
    );
}
