"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["h3"], "ref">;

export function EducationOrSkillHeading(props: Props) {
    const [isPinned, setIsPinned] = React.useState(false);
    const colorTheme = useColorThemeContext()[0];
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);

    const lightTheme = colorTheme === "light";

    React.useEffect(() => {
        const headingElement = headingRef.current;
        if (headingElement === null) {
            return;
        }
        const threshold = 1;
        const callback = (entries: IntersectionObserverEntry[]) => {
            const [firstEntry] = entries;
            setIsPinned(firstEntry.intersectionRatio < threshold);
        };
        const observer = new IntersectionObserver(
            callback,
            {
                threshold
            }
        );
        observer.observe(headingElement);
        return () => {
            observer.unobserve(headingElement);
        };
    }, []);

    return (
        <h3
            {...props}
            ref = {headingRef}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        text-lg tabAndUp:text-xl
                        font-semibold
                        capitalize
                        w-fit
                        border-y
                        border-r
                        sticky
                        top-[-1px]
                        py-2
                        pr-2
                        z-10
                        mb-2
                        ${
                            lightTheme
                            ? helpers.formatClassName(
                                `
                                    bg-white
                                `
                            )
                            : helpers.formatClassName(
                                `
                                    bg-black
                                `
                            )
                        }
                        ${
                            isPinned
                            ? helpers.formatClassName(
                                `
                                    pl-2
                                    shadow-sm
                                    rounded-br-sm
                                    ${
                                        lightTheme
                                        ? "border-plaster"
                                        : "border-carbon"
                                    }
                                `
                            )
                            : "border-transparent"
                        }
                    `
                ),
                props.className
            )}
        />
    );
}
