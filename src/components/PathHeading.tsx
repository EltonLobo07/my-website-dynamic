"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { constants } from "~/constants";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

type Props = Omit<JSX.IntrinsicElements["h2"], "ref" | "children" | "style">;

const unknownPageTitle = "unknown page";

export function PathHeading(props: Props) {
    const path = usePathname();

    let pathIndex: number;
    let content: string;
    if ((pathIndex = constants.linkNameAndFullPath.findIndex(([name, fullPath]) => fullPath === path)) === -1) {
        content = unknownPageTitle;
    } else {
        content = constants.linkNameAndFullPath[pathIndex][0];
    }

    return (
        <h2
            {...props}
            style = {{
                ...(
                    content === unknownPageTitle
                    ? styles.visuallyHidden
                    : {}
                )
            }}
            className = {twMerge(
                helpers.formatClassName(
                    `   
                        text-2xl tabAndUp:text-3xl
                        capitalize
                        font-semibold
                    `
                ),
                props.className
            )}
        >
            {content}
        </h2>
    );
}
