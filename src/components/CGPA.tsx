"use client";

import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { Pen } from "~/components/icons/Pen";
import { twMerge } from "tailwind-merge";

type Props = Omit<JSX.IntrinsicElements["p"], "ref" | "children"> & {children: string | number};

export function CGPA(props: Props) {
    const {
        children,
        ...otherProps
    } = props;

    const colorTheme = useColorThemeContext()[0];

    const lightTheme = colorTheme === "light";

    return (
        <p
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        uppercase
                        text-sm
                        ${
                            lightTheme
                            ? "text-cynical-black"
                            : "text-white-edgar"
                        }
                        flex
                        gap-x-2
                        items-center
                    `
                ),
                otherProps.className
            )}
        >
            <Pen
                aria-hidden
                strokeWidth = {1.25}
                className = {helpers.formatClassName(
                    `
                        ${
                            lightTheme
                            ? "text-argent"
                            : "text-squant"
                        }
                    `
                )}
            />
            <span>
                CGPA : {children}
            </span>
        </p>
    );
}
