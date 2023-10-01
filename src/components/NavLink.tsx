"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";

/*
    ${
                            colorTheme === "light" 
                            ? addActiveStyle
                              ? "text-black"
                              : "text-argent" 
                            : addActiveStyle
                              ? "text-white"
                              : "text-charmed-chalice"
                        }
*/

type Props = 
    Omit<Parameters<typeof Link>[0], "ref"> & 
    {
        addActiveStyle?: boolean,
        addHoverStyle?: boolean,
        addFocusStyle?: boolean
    };

export function NavLink(props: Props) {
    const pathname = usePathname();
    const colorTheme = useColorThemeContext()[0];
    
    const isCurLinkActive = pathname === props.href;
    const lightTheme = colorTheme === "light";

    const {
        addActiveStyle: addActiveStyleProp,
        addHoverStyle,
        addFocusStyle,
        ...otherProps
    } = props;

    const addActiveStyle = isCurLinkActive && addActiveStyleProp;

    return (
        <Link 
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        inline-block
                        capitalize
                        border-b
                        ${
                            colorTheme === "light" 
                            ? addActiveStyle
                              ? "text-black"
                              : "text-argent" 
                            : addActiveStyle
                              ? "text-white"
                              : "text-charmed-chalice"
                        }
                        ${
                            addActiveStyle
                            ? "border-current"
                            : "border-transparent"
                        }
                        ${
                            addHoverStyle
                            ? lightTheme
                              ? "hover:text-black"
                              : "hover:text-white"
                            : ""
                        }
                        ${
                            addFocusStyle
                            ? lightTheme
                                ? "focus:text-black"
                                : "focus:text-white"
                            : ""
                        }
                    `
                ),
                props.className
            )}
        />
    );
}
