"use client";

import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";

type Props = 
    Omit<JSX.IntrinsicElements["span"], "ref" | "children"> & 
    {
        children: string
    };

export function Tag(props: Props) {
    const {
        children,
        ...otherProps
    } = props;

    const colorTheme = useColorThemeContext()[0];

    return (
        <span
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        py-1
                        px-2
                        rounded-2xl
                        text-sm
                        font-normal
                        border
                        ${
                            colorTheme === "light"
                            ? helpers.formatClassName(
                                `
                                    border-plaster
                                    bg-black/10      
                                    text-black
                                `
                            )
                            : helpers.formatClassName(
                                `
                                    border-carbon
                                    bg-white/10
                                    text-white
                                `
                            )
                        }
                    `
                ),
                otherProps.className
            )}
        >
            {children}
        </span>
    );
}
