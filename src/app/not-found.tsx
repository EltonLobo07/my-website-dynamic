"use client";

import { SadFace } from "~/components/icons/SadFace";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

export default function NotFound() {
    const colorTheme = useColorThemeContext()[0];

    const lightTheme = colorTheme === "light";
    const sectionTitle = "page not found";
    const commonParagrahClasses = helpers.formatClassName(
        `
            mb-auto
            text-sm
            ${
                lightTheme
                ? "text-young-night"
                : "text-white-edgar"
            }
        `
    );

    return (
        <section    
            aria-label = {sectionTitle}
            className = {helpers.formatClassName(
                `
                    ${styles.tw.pageRoot}
                    flex
                    flex-col
                    gap-y-4
                    items-center
                    text-center
                `
            )}
        >
            <SadFace 
                aria-hidden
                className = {helpers.formatClassName(
                    `
                        flex-shrink-0
                        w-[48px]
                        h-[48px]
                        mt-auto
                    `
                )}
            />
            <h3
                className = {helpers.formatClassName(
                    `
                        text-xl tabAndUp:text-2xl laptopAndUp:text-3xl
                        font-bold
                        capitalize
                    `
                )}
            >
                {sectionTitle}
            </h3>
            <p
                className = {helpers.formatClassName(
                    `
                        ${commonParagrahClasses}
                        laptopAndUp:hidden
                    `
                )}
            >
                Use one of the links from the navigation menu to navigate to a known page.
            </p>
            <p
                className = {helpers.formatClassName(
                    `
                        ${commonParagrahClasses}
                        hidden laptopAndUp:block
                    `
                )}
            >
                Use one of the links on the left to navigate to a known page.
            </p>
        </section>
    );
}
