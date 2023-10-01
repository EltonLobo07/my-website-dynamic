import { ColorThemeContext } from "~/contexts/ColorTheme";
import { useCustomContext } from "~/custom-hooks/useCustomContext";

export function useColorThemeContext() {
    return useCustomContext(
        ColorThemeContext,
        "useColorThemeContext cannot be used in a component that can't acess the Color Theme context"
    );
}
