"use client";

import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["div"], "ref" | "children">;

export function VerticalLayoutSeparator(props: Props) {
    const colorTheme = useColorThemeContext()[0];

    return (
        <div
            {...props}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        min-w-[1px]
                        h-full
                        ${
                            colorTheme === "light"
                            ? "bg-plaster"
                            : "bg-carbon"
                        }
                    `
                ),
                props.className
            )}
        >
        </div>
    );
}
