"use client";

import { Anchor } from "~/components/Anchor";
import { Duration } from "~/components/Duration";
import { Tag } from "~/components/Tag";
import { Calendar } from "~/components/icons/Calendar";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

export default function ExperiencePage() {
    const colorTheme = useColorThemeContext()[0];

    const lightTheme = colorTheme === "light";
    const projectsAndTasksCompleted = "projects & tasks completed";
    const commonHeadingClasses = helpers.formatClassName(
        `
            text-base tabAndUp:text-lg
            font-semibold
            capitalize
            mb-1
        `
    );
    const commonListClasses = helpers.formatClassName(
        `
            list-disc
            ${
                lightTheme
                ? "text-argent"
                : "text-squant"
            }
        `
    );
    const commonSpanInsideLiClasses = helpers.formatClassName(
        `      
            text-sm
            ${
                lightTheme
                ? "text-cynical-black"
                : "text-white-edgar"
            }
        `
    );

    return (
        <section
            className = {helpers.formatClassName(
                `
                    ${styles.tw.pageRoot}
                    relative
                    flex
                    flex-col
                    gap-y-12
                `
            )}
        >
            <div
                className = {helpers.formatClassName(
                    `
                        mt-auto
                        flex
                        flex-col
                        gap-y-1
                    `
                )}
            >
                <h3
                    className = {helpers.formatClassName(
                        `
                            text-lg tabAndUp:text-xl
                            font-bold
                            flex
                            flex-wrap
                            gap-x-2
                            items-baseline
                        `
                    )}
                >
                    <span
                        className = {helpers.formatClassName(
                            `
                                capitalize
                                text-wrap
                            `
                        )}
                    >
                        trainee software engineer
                    </span>
                    <span
                        style = {styles.visuallyHidden}
                    >
                        at
                    </span>
                    <span>
                        -
                    </span>
                    <Anchor
                        target = "_blank"
                        href = "https://www.cometchat.com/"
                    >
                        CometChat
                    </Anchor>
                </h3>
                <Duration 
                    $from = "dec 2022"
                    $to = "jul 2023"
                />
            </div>
            <section
                aria-label = {projectsAndTasksCompleted}
                className = {helpers.formatClassName(
                    `
                        mb-auto
                    `
                )}
            >
                <h4
                    className = {helpers.formatClassName(
                        `
                            ${commonHeadingClasses}
                        `
                    )}
                >
                    {projectsAndTasksCompleted}
                </h4>
                <ul
                    className = {helpers.formatClassName(
                        `
                            mb-6
                            text-sm
                            flex
                            flex-col
                            gap-y-1
                        `
                    )}
                >
                    <li
                        className = {helpers.formatClassName(
                            `
                                ${commonListClasses}
                            `
                        )}
                    >
                        <span
                            className = {helpers.formatClassName(
                                `
                                    ${commonSpanInsideLiClasses}
                                `
                            )}
                        >
                            Worked with the UI kit team to rebuild company&apos;s React UI kit which helps developers quickly build custom chat and calling web applications.
                        </span>
                    </li>
                    <li
                        className = {helpers.formatClassName(
                            `
                                ${commonListClasses}
                            `
                        )}
                    >
                        <span
                            className = {helpers.formatClassName(
                                `
                                    ${commonSpanInsideLiClasses}
                                `
                            )}
                        >
                            Collaborated with several other developers to add &quot;Annual subscription&quot; feature to the company&apos;s dashboard.
                        </span>
                    </li>
                    <li
                        className = {helpers.formatClassName(
                            `
                                ${commonListClasses}
                            `
                        )}
                    >
                        <span
                            className = {helpers.formatClassName(
                                `
                                    ${commonSpanInsideLiClasses}
                                `
                            )}
                        >
                            Fixed few minor dashboard related issues.
                        </span>
                    </li>
                </ul>
                <section
                    className = {helpers.formatClassName(
                        `
                            mb-6
                        `
                    )}
                >
                    <h5
                        className = {helpers.formatClassName(
                            `
                                ${commonHeadingClasses}
                            `
                        )}
                    >
                        relevant links
                    </h5>
                    <ul
                        className = {helpers.formatClassName(
                            `
                                flex
                                flex-wrap
                                gap-x-6
                                gap-y-1
                                text-sm
                                font-semibold
                            `
                        )}
                    >
                        <li>
                            <Anchor
                                target = "_blank"
                                href = "https://www.cometchat.com/blog/chat-ui-kits-v4"
                            >
                                Chat UI kits v4 blog
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                target = "_blank"
                                href = "https://www.cometchat.com/docs/v4/react-uikit/overview"
                            >
                                React UI kit docs
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                target = "_blank"
                                href = "https://app.cometchat.com/signup"
                            >
                                CometChat dashboard
                            </Anchor>
                        </li>
                    </ul>
                </section>
                <section>
                    <h5
                        className = {helpers.formatClassName(
                            `
                                ${commonHeadingClasses}
                            `
                        )}
                    >
                        tech used
                    </h5>
                    <ul
                        className = {helpers.formatClassName(
                            `
                                flex
                                flex-wrap
                                gap-2
                            `
                        )}
                    >
                        <li>
                            <Tag>
                                TypeScript
                            </Tag>
                        </li>
                        <li>
                            <Tag>
                                JavaScript
                            </Tag>
                        </li>
                        <li>
                            <Tag>
                                React
                            </Tag>
                        </li>
                        <li>
                            <Tag>
                                HTML
                            </Tag>
                        </li>
                        <li>
                            <Tag>
                                CSS
                            </Tag>
                        </li>
                        <li>
                            <Tag>
                                Redux
                            </Tag>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    );
}
