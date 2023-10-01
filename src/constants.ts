import { CSSVar } from "~/types";

const colorTheme = ["light", "dark"] as const;
export type ColorTheme = (typeof colorTheme)[number];

const cookieExpirationDays = 60;

const colorThemeCookieName = "color-theme";

const textColorCssVarName = "--text-color";
const bgColorCssVarName = "--bg-color";
type ColorThemeDependentCssVars<TCssVar extends CSSVar> = 
    Record<
        (typeof colorTheme)[number], 
        Record<TCssVar, string>
    >;
const bgAndTextColor: ColorThemeDependentCssVars<
    | typeof textColorCssVarName
    | typeof bgColorCssVarName
> = {
    light: {
        "--text-color": "black",
        "--bg-color": "white"
    },
    dark: {
        "--text-color": "white",
        "--bg-color": "black"
    }
};

const linkNameAndFullPath = [
    ["home", "/"],
    ["experience", "/experience"],
    ["education", "/education"],
    ["skills", "/skills"],
    ["plan", "/plan"]
] as const;

export const constants = {
    colorTheme,
    cookieExpirationDays,
    colorThemeCookieName,
    bgAndTextColor,
    textColorCssVarName,
    bgColorCssVarName,
    linkNameAndFullPath
};
