"use client";

import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { Sun } from "~/components/icons/Sun";
import { Moon } from "~/components/icons/Moon";
import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

type Props = Omit<JSX.IntrinsicElements["button"], "ref" | "children" | "onClick">;

export function ToggleColorThemeBtn(props: Props) {
    const [colorTheme, setColorTheme] = useColorThemeContext();
    const lightTheme = colorTheme === "light";

    const Icon = lightTheme ? Sun : Moon;
    const { roundedBtn } = styles.tw;

    return (
        <button
            type = "button"
            {...props}
            onClick = {() => setColorTheme(colorTheme === "light" ? "dark" : "light")}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        relative
                        ${roundedBtn.common}
                        ${roundedBtn.themeDependent.value[colorTheme]}
                        ${roundedBtn.themeDependent.hover[colorTheme]}
                    `
                ),
                props.className
            )}
        >
            <span
                style = {styles.visuallyHidden}
            >
                toggle color theme
            </span>
            <Icon 
                aria-hidden
            />
        </button>
    );
}
