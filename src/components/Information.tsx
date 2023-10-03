"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";
import { CustomPropsObj } from "~/types";
import { Heading } from "~/components/Heading";
import { X } from "~/components/icons/X";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { Info } from "~/components/icons/Info";

type Props = 
    Omit<JSX.IntrinsicElements["section"], "ref" | "children"> &
    CustomPropsObj<{
        message: string,
        customTitle?: string,
        headingLvl: 1 | 2 | 3 | 4 | 5 | 6
    }>;

export function Information(props: Props) {
    const {
        $message,
        $headingLvl,
        $customTitle,
        ...otherProps
    } = props;

    const [removeSectionTriggered, setRemoveSectionTriggered] = React.useState(false);
    const [removeSection, setRemoveSection] = React.useState(false);
    const colorTheme = useColorThemeContext()[0];
    const lightTheme = colorTheme === "light";

    React.useEffect(() => {
        if (removeSectionTriggered) {
            setTimeout(() => {
                setRemoveSection(true);
            }, 1000);
        }
    }, [removeSectionTriggered]);

    if (removeSection) {
        return null;
    }

    return (
        <section
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        transition-opacity
                        duration-1000
                        border
                        rounded-[8px]
                        flex
                        gap-x-4
                        items-center
                        p-16px
                        ${
                            lightTheme
                            ? helpers.formatClassName(
                                `
                                    bg-[#f2F2f2]
                                    border-plaster
                                `
                            )
                            : helpers.formatClassName(
                                `
                                    bg-[#1A1A1A]
                                    border-carbon
                                `
                            )
                        }
                        ${
                            removeSectionTriggered
                            ? "opacity-0"
                            : "opacity-100"
                        }
                    `
                ),
                otherProps.className
            )}
        >
            <Info 
                aria-hidden
                className = {helpers.formatClassName(
                    `
                        flex-shrink-0
                    `
                )}
            />
            <div
                className = {helpers.formatClassName(
                    `
                        flex-grow
                        flex
                        flex-col
                        gap-x-2
                    `
                )}
            >
                <Heading
                    lvl = {$headingLvl}
                    className = {helpers.formatClassName(
                        `
                            capitalize
                            text-base
                            font-semibold
                        `
                    )}
                >
                    {$customTitle ?? "information"}
                </Heading>
                <p
                    className = {helpers.formatClassName(
                        `
                            text-sm
                            ${
                                lightTheme
                                ? "text-argent"
                                : "text-charmed-chalice"
                            }
                        `
                    )}
                >
                    {$message}
                </p>
            </div>
            <button
                aria-label = "remove information section"
                disabled = {removeSectionTriggered}
                onClick = {() => setRemoveSectionTriggered(true)}
                className = {helpers.formatClassName(
                    `
                        flex-shrink-0
                        self-start
                        p-[8px]
                        rounded-full
                        border
                        ${
                            lightTheme
                            ? "border-plaster bg-[#FAFAFA] text-[#989898] "
                            : "border-carbon bg-[#111111] text-[#7E7E7E] "
                        }
                        ${
                            !removeSectionTriggered
                            ? lightTheme
                              ? "hover:bg-black/10 hover:text-black"
                              : "hover:bg-white/10 hover:text-white"
                            : ""
                        }
                    `
                )}
            >
                <X 
                    aria-hidden
                    className = {helpers.formatClassName(
                        `
                            w-[16px]
                            h-[16px]
                        `
                    )}
                />
            </button>
        </section>
    );
}
