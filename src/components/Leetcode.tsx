"use client";

import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { Anchor } from "~/components/Anchor";
import { twMerge } from "tailwind-merge";

type Props = Omit<JSX.IntrinsicElements["div"], "ref" | "children">;

export function Leetcode(props: Props) {
    const colorTheme = useColorThemeContext()[0];

    return (
        <div
            {...props}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        flex
                        flex-col
                        gap-y-2
                        pb-[4px]
                    `
                ),
                props.className
            )}
        >
            <span
                className = {helpers.formatClassName(
                    `
                        text-base tabAndUp:text-lg
                    `
                )}
            >
                Learning data structures & algorithms using Leetcode
            </span>
            <p
                className = {helpers.formatClassName(
                    `
                        text-sm
                        ${
                            colorTheme === "light"
                            ? "text-young-night"
                            : "text-white-edgar"
                        }
                    `
                )}
            >
                Trying to find the best solution to a problem is one of the challenges I like to tackle as a software developer. To do this, I may need to create a new algorithm, use an existing algorithm, or use some data structure that is appropriate for the problem at hand. This is just one of the many reasons why I&apos;ve been practicing data structures and algorithms on Leetcode.
            </p>
            <Anchor
                target = "_blank"
                href = "https://leetcode.com/eltonsw00/"
                className = {helpers.formatClassName(
                    `
                        w-fit
                    `
                )}
            >
                My Leetcode profile
            </Anchor>
        </div>
    );
}
