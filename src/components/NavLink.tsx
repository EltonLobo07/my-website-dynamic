"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";

type Props = Omit<Parameters<typeof Link>[0], "ref">;

export function NavLink(props: Props) {
    const pathname = usePathname();
    const colorTheme = useColorThemeContext()[0];
    
    const isCurLinkActive = pathname === props.href;
    const lightTheme = colorTheme === "light";

    return (
        <Link 
            {...props}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        inline-block
                        text-xl
                        font-semibold
                        capitalize
                        border-b
                        ${
                            colorTheme === "light" 
                            ? isCurLinkActive
                              ? "text-black"
                              : "text-argent" 
                            : isCurLinkActive
                              ? "text-white"
                              : "text-charmed-chalice"
                        }
                        ${
                            isCurLinkActive
                            ? "border-current"
                            : "border-transparent"
                        }
                        ${
                            lightTheme
                            ? "hover:text-black"
                            : "hover:text-white"
                        }
                    `
                ),
                props.className
            )}
        />
    );
}
