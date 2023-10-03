"use client";

import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["h3"], "ref">;

export function EducationHeading(props: Props) {
    const colorTheme = useColorThemeContext()[0];

    return (
        <h3
            {...props}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        text-lg tabAndUp:text-xl
                        font-semibold
                        capitalize
                        w-fit
                        border-b
                        border-current
                        pr-2
                        sticky
                        top-0
                        z-10
                        mb-2
                        ${
                            colorTheme === "light"
                            ? helpers.formatClassName(
                                `
                                    bg-white
                                `
                            )
                            : helpers.formatClassName(
                                `
                                    bg-black
                                `
                            )
                        }
                    `
                ),
                props.className
            )}
        />
    );
}
