"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { CustomPropsObj } from "~/types";
import { styles } from "~/styles";
import { Tag } from "~/components/Tag";

type Props = 
    Omit<JSX.IntrinsicElements["section"], "ref" | "children"> &
    CustomPropsObj<{
        img: {
            src: string,
            blurDataUrl: string,
            alt?: string
        },
        title: string,
        description: string,
        url: Record<"liveSite" | "code", string>,
        techTags: string[],
        loadImgAsap?: boolean
    }>;

export function ProjectCard(props: Props) {
    const {
        $img,
        $title,
        $description,
        $url,
        $techTags,
        $loadImgAsap,
        ...otherProps
    } = props;

    const colorTheme = useColorThemeContext()[0];

    const lightTheme = colorTheme === "light";
    const laptopAndUpImgeHeight = "laptopAndUp:h-[24rem]"; 
    const commonAnchorClasses = helpers.formatClassName(
        `
            relative
            py-1
            px-4
            rounded-[0.25rem]
            text-base
            text-center
            font-medium
            min-w-[6.25rem]
        `
    );
    const commonVisibleSpanInsideAnchorClasses = helpers.formatClassName(
        `
            inline-block
            capitalize
        `
    );

    return (
        <section
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        flex
                        flex-col laptopAndUp:flex-row
                        laptopAndUp:gap-x-[32px]
                        gap-y-[32px] laptopAndUp:gap-y-0
                        border
                        rounded-[16px]
                        py-[32px]
                        px-[16px]
                        ${
                            lightTheme
                            ? helpers.formatClassName(
                                `
                                    border-plaster
                                    bg-white-as-heaven      
                                `
                            )
                            : helpers.formatClassName(
                                `
                                    border-carbon
                                    bg-dynamic-black
                                `
                            )
                        }
                    `
                ),
                otherProps.className
            )}
        >
            <div
                className = {helpers.formatClassName(
                    `
                        mx-auto laptopAndUp:mx-0
                        relative
                        h-[12rem] tabAndUp:h-[18rem] ${laptopAndUpImgeHeight}
                        w-[min(100%,12rem)] tabAndUp:w-[min(100%,18rem)] laptopAndUp:w-1/3
                        laptopAndUp:flex-grow
                        rounded-[4px]
                    `
                )}
            >
                <Image 
                    fill
                    src = {$img.src}
                    alt = {$img.alt ?? `${$title} sample`}
                    priority = {Boolean($loadImgAsap)}
                    sizes = "100%"
                    blurDataURL = {$img.blurDataUrl}
                    className = {helpers.formatClassName(
                        `
                            object-cover
                            object-top
                            rounded-[inherit]
                        `
                    )}
                />
            </div>
            <div
                className = {helpers.formatClassName(
                    `
                        laptopAndUp:px-8px
                        laptopAndUp:w-[22rem]
                        flex
                        flex-col
                        gap-y-4 laptopAndUp:gap-y-6
                        items-center laptopAndUp:items-start
                        text-center laptopAndUp:text-start
                        ${laptopAndUpImgeHeight}
                        laptopAndUp:overflow-y-auto
                    `
                )}
            >
                <h3
                    className = {helpers.formatClassName(
                        `
                            laptopAndUp:mt-auto
                            text-xl
                            font-bold
                            capitalize
                        `
                    )}
                >
                    {$title}
                </h3>
                <p
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
                    {$description}
                </p>
                <div
                    className = {helpers.formatClassName(
                        `
                            flex
                            flex-wrap
                            gap-x-6
                            gap-y-2
                            justify-center
                        `
                    )}
                >
                    <a
                        target = "_blank"
                        href = {$url.liveSite}
                        className = {helpers.formatClassName(
                            `
                                ${commonAnchorClasses}
                                ${
                                    lightTheme
                                    ? helpers.formatClassName(
                                        `
                                            bg-cynical-black hover:bg-[#383838]
                                            text-white
                                
                                        `
                                    )
                                    : helpers.formatClassName(
                                        `
                                            bg-[#EDEDED] hover:bg-[#CCCCCC]
                                            text-[#0A0A0A]
                                            
                                        `
                                    )
                                }
                            `
                        )}
                    >
                        <span
                            style = {styles.visuallyHidden}
                        >
                            {`${$title} live site`}
                        </span>
                        <span
                            className = {commonVisibleSpanInsideAnchorClasses}
                        >
                            live site
                        </span>
                    </a>
                    <a
                        target = "_blank"
                        href = {$url.code}
                        className = {helpers.formatClassName(
                            `
                                border
                                ${commonAnchorClasses}
                                ${
                                    lightTheme
                                    ? helpers.formatClassName(
                                        `
                                            bg-white hover:bg-[#F2F2F2]
                                            text-cynical-black
                                            border-plaster
                                        `
                                    )
                                    : helpers.formatClassName(
                                        `
                                            bg-[#0A0A0A] hover:bg-[#1F1F1F]
                                            text-[#EDEDED]
                                            border-carbon
                                        `
                                    )
                                }
                            `
                        )}
                    >
                        <span
                            style = {styles.visuallyHidden}
                        >
                            {`${$title} code`}
                        </span>
                        <span
                            className = {commonVisibleSpanInsideAnchorClasses}
                        >
                            code
                        </span>
                    </a>
                </div>
                <div
                    className = {helpers.formatClassName(
                        `
                            relative
                            laptopAndUp:mb-auto
                        `
                    )}
                >
                    <span
                        style = {styles.visuallyHidden}
                    >
                        technology tags
                    </span>
                    <ul
                        className = {helpers.formatClassName(
                            `
                                flex
                                flex-wrap
                                gap-2
                                justify-center laptopAndUp:justify-start
                            `
                        )}
                    >
                        {
                            $techTags.map(tag => (
                                <li
                                    key = {tag}
                                >
                                    <Tag>
                                        {tag}
                                    </Tag>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}
