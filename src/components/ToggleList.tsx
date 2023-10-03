"use client";

import {
    Transition, 
    Disclosure 
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";
import { CustomPropsObj } from "~/types";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { Anchor } from "~/components/Anchor";

type Props = 
    Omit<JSX.IntrinsicElements["div"], "ref" | "children"> & 
    CustomPropsObj<{
        title: string,
        content: React.ReactNode,
        link?: Record<"href" | "ariaLabel", string> & {content: React.ReactNode, hideArrow?: boolean},
        btnAndAnchorContainerClassName?: string
    }>;

export function ToggleList(props: Props) {
    const {
        $title,
        $link,
        $content,
        $btnAndAnchorContainerClassName,
        ...otherProps
    } = props;

    const colorTheme = useColorThemeContext()[0];
    const lightTheme = colorTheme === "light";

    function getTriangle(
        open: boolean, 
        additionalProps?: Omit<JSX.IntrinsicElements["span"], "ref" | "children">
    ) {
        return (
            <span
                {...additionalProps}
                className = {twMerge(
                    helpers.formatClassName(
                        `
                            inline-block
                            transition-transform
                            ${
                                open
                                ? "rotate-180"
                                : "rotate-90"
                            }   
                        `
                    ),
                    additionalProps?.className
                )}
            >
                ▲
            </span>
        );
    }

    const commonClasses = helpers.formatClassName(
        `
            flex
            gap-x-2
        `
    );

    return (
        <Disclosure
            as = "div"
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        flex
                        flex-col
                        gap-y-1
                    `
                ),
                otherProps.className
            )}
        >
            {
                ({ open }) => (
                    <>
                        <div
                            className = {twMerge(
                                helpers.formatClassName(
                                    `
                                        flex
                                        gap-x-2
                                        items-center
                                    `
                                ),
                                $btnAndAnchorContainerClassName
                            )}
                        >
                            <Disclosure.Button
                                aria-label = {`learn more about ${$title}`}
                                className = {helpers.formatClassName(
                                    `
                                        ${commonClasses}
                                        items-center
                                        ${
                                            lightTheme 
                                            ? "text-squant hover:text-black"
                                            : "text-charmed-chalice hover:text-white"
                                        }
                                    `
                                )}
                            >
                                {getTriangle(open)}
                                <span>
                                    {$title}
                                </span> 
                            </Disclosure.Button>
                            {
                                $link !== undefined && (
                                    <Anchor
                                        target = "_blank"
                                        href = {$link.href}
                                        aria-label = {$link.ariaLabel}
                                        hideArrow = {$link.hideArrow}
                                    >
                                        {$link.content}
                                    </Anchor>
                                )
                            }
                        </div>
                        <div
                            className = {helpers.formatClassName(
                                `
                                    ${commonClasses}
                                    ${
                                        open
                                        ? ""
                                        : "hidden"
                                    }
                                `
                            )}
                        >
                            {getTriangle(
                                open,
                                {
                                    "aria-hidden": true,
                                    className: "opacity-0"
                                }
                            )}
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel
                                    className = {helpers.formatClassName(
                                        `
                                            text-sm
                                            ${
                                                lightTheme
                                                ? "text-young-night"
                                                : "text-white-edgar"
                                            }
                                        `
                                    )}
                                >
                                    {$content}
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    </>
                )
            }
        </Disclosure>
    );
}
