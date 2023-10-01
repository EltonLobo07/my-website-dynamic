import { CSSProperties } from "react";
import { helpers } from "~/helpers";
import { ColorTheme } from "~/constants";

const visuallyHidden: CSSProperties = {
    position: "absolute",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    height: 1,
    width: 1,
    margin: 0,
    padding: 0,
    border: 0
};

const roundedBtnCommon = "border p-8px rounded-full";
const roundedBtnThemeDependent: Record<ColorTheme, string> = {
    light: "border-plaster text-argent",
    dark: "border-carbon text-charmed-chalice"
};
const roundedBtnThemeDependentHover: Record<ColorTheme, string> = {
    light: "hover:text-black hover:bg-black/10",
    dark: "hover:text-white hover:bg-white/10"
};

const tw = {
    maxWidthWrapper: helpers.formatClassName(
        `
            max-w-screen-laptopAndUp
            mx-auto
            px-16px tabAndUp:px-32px laptopAndUp:px-64px
        `
    ),
    roundedBtn: {
        common: roundedBtnCommon,
        themeDependent: {
            value: roundedBtnThemeDependent,
            hover: roundedBtnThemeDependentHover
        }
    },
    pageRoot: helpers.formatClassName(
        `
            flex-grow
            overflow-y-auto
            px-16px
        `
    )
};

export const styles = {
    visuallyHidden,
    tw
};
