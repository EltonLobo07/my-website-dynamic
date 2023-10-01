"use client";

import { 
    Menu,
    Transition 
} from "@headlessui/react";
import { Menu as MenuIcon } from "~/components/icons/Menu";
import { X } from "~/components/icons/X";
import { constants } from "~/constants";
import { helpers } from "~/helpers";
import { styles } from "~/styles";
import { NavLink } from "~/components/NavLink";
import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";

type Props = Omit<JSX.IntrinsicElements["div"], "ref" | "children">;

export function RootNavMenu(props: Props) {
    const colorTheme = useColorThemeContext()[0];
    const { roundedBtn } = styles.tw;

    const lightTheme = colorTheme === "light";

    return (
        <Menu
            as = "div"
            {...props}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        relative
                    `
                ),
                props.className
            )}
        >
            {
                ({ open }) => {
                    const Icon = open ? X : MenuIcon;
                    return (
                        <>
                            <Menu.Button
                                className = {helpers.formatClassName(
                                    `
                                        relative
                                        ${roundedBtn.common}
                                        ${roundedBtn.themeDependent.value[colorTheme]}
                                        ${roundedBtn.themeDependent.hover[colorTheme]}
                                    `
                                )}
                            >
                                <span
                                    style = {styles.visuallyHidden}
                                >
                                    open main navigation menu
                                </span>
                                <Icon 
                                    aria-hidden
                                />
                            </Menu.Button>
                            <Transition
                                enter = "transition duration-100 ease-out"
                                enterFrom = "transform scale-95 opacity-0"
                                enterTo = "transform scale-100 opacity-100"
                                leave = "transition duration-75 ease-out"
                                leaveFrom = "transform scale-100 opacity-100"
                                leaveTo = "transform scale-95 opacity-0"
                            >
                                <Menu.Items
                                    as = "ul"
                                    className = {helpers.formatClassName(
                                        `
                                            absolute
                                            right-0
                                            translate-y-[1.125rem]
                                            p-24px
                                            rounded-[12px]
                                            border
                                            min-w-[160px]
                                            shadow-lg
                                            ${
                                                lightTheme
                                                ? "border-plaster bg-white"
                                                : "border-carbon bg-black"
                                            }
                                        `
                                    )}
                                >
                                    {
                                        constants.linkNameAndFullPath
                                            .map(([name, path], linkNum) => (
                                                <Menu.Item
                                                    as = "li"
                                                    key = {path}
                                                    className = {helpers.formatClassName(
                                                        `
                                                            ${
                                                                linkNum > 0
                                                                ? "mt-4"
                                                                : ""
                                                            }
                                                        `
                                                    )}
                                                >
                                                    {({ active, close }) => (
                                                        <NavLink
                                                            href = {path}
                                                            onClick = {() => close()}
                                                            className = {helpers.formatClassName(
                                                                `
                                                                    text-lg
                                                                    font-medium
                                                                    w-full
                                                                    ${
                                                                        active
                                                                        ? lightTheme
                                                                        ? "text-black"
                                                                        : "text-white"
                                                                        : ""
                                                                    }
                                                                `
                                                            )}
                                                        >
                                                            {name}
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            ))
                                    }
                                </Menu.Items>
                            </Transition>
                        </>
                    );
                }
            }
        </Menu>
    );
}
