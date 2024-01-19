"use client";

import { twJoin } from "tailwind-merge";
import { styles } from "~/styles";
import { Anchor } from "./Anchor";
import { Duration } from "./Duration";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { Tag } from "./Tag";
import { 
    CustomDate, 
    ReadonlyArrayAtLeastOne 
} from "~/types";

const commonHeadingClasses = twJoin(
    "text-base tabAndUp:text-lg",
    "font-semibold",
    "capitalize",
    "mb-1"
);

export type LinkContent = Readonly<{
    displayText: string,
    href: string
}>;

export type Work = Readonly<{
    id: React.Key,
    content: string
}>;

type ExperienceCardProps = {
    tags: ReadonlyArrayAtLeastOne<string>,
    relevantLinks?: ReadonlyArrayAtLeastOne<LinkContent>,
    workDone: ReadonlyArrayAtLeastOne<Work>,
    workedAs: string,
    workedAt: LinkContent,
    from: CustomDate,
    to: CustomDate,
    addBottomBorder?: boolean
};

export default function ExperienceCard({
    tags,
    relevantLinks,
    workDone,
    workedAs,
    workedAt,
    from,
    to,
    addBottomBorder
}: ExperienceCardProps) {
    const colorTheme = useColorThemeContext()[0];
    const lightTheme = colorTheme === "light";

    const commonListClasses = twJoin(
        "list-disc",
        lightTheme
        ? "text-argent"
        : "text-squant"
    );

    const commonSpanInsideLiClasses = twJoin(
        "text-sm",
        lightTheme 
        ? "text-cynical-black"
        : "text-white-edgar"
    );

    return (
        <li
            className = {twJoin(
                "relative",
                "flex flex-col gap-y-4",
                "pb-6",
                addBottomBorder && "border-b",
                lightTheme ? "border-black" : "border-white"
            )}
        >
            <div
                className = {twJoin(
                    "mt-auto",
                    "flex flex-col gap-y-1"
                )}
            >
                <h3
                    className = {twJoin(
                        "text-lg tabAndUp:text-xl",
                        "font-bold",
                        "flex flex-wrap gap-x-2 items-baseline"
                    )}
                >
                    <span
                        className = {twJoin(
                            "capitalize",
                            "text-wrap"
                        )}
                    >
                        {workedAs}
                    </span>
                    <span
                        style = {styles.visuallyHidden}
                    >
                        at
                    </span>
                    <span
                        aria-hidden
                    >
                        -
                    </span>
                    <Anchor
                        target = "_blank"
                        href = {workedAt.href}
                    >
                        {workedAt.displayText}
                    </Anchor>
                </h3>
                <Duration 
                    $from = {from}
                    $to = {to}
                />
            </div>
            <section
                className = "mb-auto"
            >
                <h4
                    className = {commonHeadingClasses}
                >
                    projects & tasks completed
                </h4>
                <ul
                    className = {twJoin(
                        "mb-5",
                        "text-sm",
                        "flex flex-col gap-y-1",
                        "ml-2"
                    )}
                >
                    {workDone.map(({ id, content }) => (
                        <li
                            key = {id}
                            className = {commonListClasses}
                        >
                            <span
                                className = {commonSpanInsideLiClasses}
                            >
                                {content}
                            </span>
                        </li>
                    ))}
                </ul>
                {
                    relevantLinks && (
                        <section
                            className = "mb-5"
                        >
                            <h5
                                className = {commonHeadingClasses}
                            >
                                relevant links
                            </h5>
                            <ul
                                className = {twJoin(
                                    "flex flex-wrap gap-x-6 gap-y-1",
                                    "text-sm",
                                    "font-semibold"
                                )}
                            >
                                {relevantLinks.map(({ displayText, href }) => (
                                    <li
                                        key = {href}
                                    >
                                        <Anchor
                                            target = "_blank"
                                            href = {href}
                                        >
                                            {displayText}
                                        </Anchor>
                                    </li>    
                                ))}
                            </ul>
                        </section>
                    )
                }
                <section>
                    <h5
                        className = {commonHeadingClasses}
                    >
                        tech used
                    </h5>
                    <ul
                        className = "flex flex-wrap gap-2"
                    >
                        {tags.map(tag => (
                            <li
                                key = {tag}
                            >
                                <Tag>
                                    {tag}
                                </Tag>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </li>
    );
}
