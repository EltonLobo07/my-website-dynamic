import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";

export function useScrollbarClass() {
    const colorTheme = useColorThemeContext()[0];
    return helpers.formatClassName(
        `
            scrollbar
            scrollbar-w-[24px]
            ${
                colorTheme === "light"
                // stonewall-gray
                ? "scrollbar-thumb-blue-500 scrollbar-track-beluga"
                : "scrollbar-thumb-namara-gray scrollbar-track-black-panther"
            }
        `
    );
}
