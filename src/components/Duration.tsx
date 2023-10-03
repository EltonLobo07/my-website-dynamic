"use client";

import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { styles } from "~/styles";
import { CustomPropsObj } from "~/types";
import { Calendar } from "~/components/icons/Calendar";

type Props = 
    Omit<JSX.IntrinsicElements["p"], "ref" | "children"> & 
    CustomPropsObj<{
        from: string,
        to: string
    }>;

export function Duration(props: Props) {
    const {
        $from,
        $to,
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
                        relative
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
            <span
                style = {styles.visuallyHidden}
            >
                duration
            </span>
            <Calendar
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
            <span
                className = {helpers.formatClassName(
                    `
                        flex
                        gap-x-1
                        items-baseline
                    `
                )}
            >
                <span
                    style = {styles.visuallyHidden}
                >
                    from
                </span>
                <span>
                    {$from}
                </span>
                <span
                    aria-hidden
                >
                    -
                </span>
                <span
                    style = {styles.visuallyHidden}
                >
                    to
                </span>
                <span>
                    {$to}
                </span>
            </span>
        </p>
    );
}
