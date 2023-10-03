"use client";

import { helpers } from "~/helpers";
import { styles } from "~/styles";
import { twMerge } from "tailwind-merge";
import { ExternalLink } from "~/components/icons/ExternalLink";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { RightArrow } from "~/components/icons/RightArrow";

type Props = 
    Omit<
        JSX.IntrinsicElements["a"], 
        | "ref" 
        | "children"
    > & {
        children: React.ReactNode,
        hideArrow?: boolean,
        useRightArrow?: boolean
    };

export function Anchor(props: Props) {
    const {
        children,
        hideArrow,
        useRightArrow,
        ...otherProps
    } = props;

    const colorTheme = useColorThemeContext()[0];

    let externalLinkArrow: JSX.Element | null = null;
    if (otherProps.target === "_blank" && !hideArrow) {
        const Icon = useRightArrow ? RightArrow : ExternalLink;
        externalLinkArrow = (
            <>
                <span
                    style = {styles.visuallyHidden}
                >
                    (opens in a new tab)
                </span>
                {

                }
                <Icon
                    aria-hidden
                    className = {helpers.formatClassName(
                        `
                            w-[1em]
                            h-[1em]
                            flex-shrink-0
                        `
                    )} 
                />
            </>
        );
    }

    return (
        <a
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        relative
                        mx-1
                        ${externalLinkArrow ? "flex items-end" : ""}
                        inline-flex
                        gap-x-1
                        items-center
                        border-b
                        border-transparent hover:border-current
                        whitespace-nowrap
                        ${
                            colorTheme === "light"
                            ? "text-blue-600"
                            : "text-blue-400"
                        }
                    `
                ),
                otherProps.className
            )}
        >
            {
                typeof children === "object"
                ? children
                : <span>{children}</span>
            }
            {externalLinkArrow}
        </a>
    );
}
