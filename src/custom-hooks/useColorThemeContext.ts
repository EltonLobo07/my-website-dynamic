import React from "react";
import { ColorThemeContext } from "~/contexts/ColorTheme";

export function useColorThemeContext() {
    const context = React.useContext(ColorThemeContext);
    if (context === null) {
        throw new Error("useColorThemeContext cannot be used in a component that can't acess the Color Theme context");
    }
}
