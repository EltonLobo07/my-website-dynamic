"use client";

import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { CustomPropsObj } from "~/types";
import { Anchor } from "~/components/Anchor";

type Props = 
    Omit<JSX.IntrinsicElements["section"], "ref" | "children"> &
    CustomPropsObj<
        {
            otherProjects: Record<"name" | "link", string>[]
        }
    >;

export function OtherProjects(props: Props) {
    const colorTheme = useColorThemeContext()[0];
    const lightTheme = colorTheme === "light";

    const {
        $otherProjects,
        ...otherProps
    } = props;

    return (
        <section
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        flex
                        flex-col
                        items-center
                    `
                ),  
                otherProps.className
            )}
        >
            <h3
                className = {helpers.formatClassName(
                    `
                        text-base
                        font-medium
                        capitalize
                        py-2
                        px-4
                        rounded-[0.25rem]
                        translate-y-1/2
                        border
                        ${
                            lightTheme
                            ? "border-plaster bg-white text-black"
                            : "border-carbon bg-black text-white"
                        }
                    `
                )}
            >
                other projects
            </h3>
            <ul
                className = {helpers.formatClassName(
                    `
                        w-full
                        border
                        rounded-[16px]
                        flex
                        flex-col
                        items-center
                        gap-y-4
                        pt-14
                        px-16px
                        pb-[56px]
                        ${
                            lightTheme
                            ? "border-plaster"
                            : "border-carbon"
                        }        
                    `
                )}
            >
                {
                    $otherProjects.map(otherProject => (
                        <li
                            key = {otherProject.link}
                            className = {helpers.formatClassName(
                                `
                                    text-wrap
                                    text-center
                                `
                            )}
                        >
                            <Anchor
                                hideArrow
                                target = "_blank"
                                href = {otherProject.link}
                                className = {helpers.formatClassName(
                                    `
                                        capitalize
                                        whitespace-normal
                                    `
                                )}
                            >
                                {otherProject.name}
                            </Anchor>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
