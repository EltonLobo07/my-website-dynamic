"use client";

import React from "react";
import { 
    ColorTheme, 
    constants 
} from "~/constants";
import { ColorThemeContext } from "~/contexts/ColorTheme";
import { useCSSVarState } from "~/custom-hooks/useCSSVarState";

type Props = {
    children: React.ReactNode,
    initialColorTheme: ColorTheme
};

export function ColorThemeContextProvider(props: Props) {
    const getValue = React.useCallback((colorTheme: ColorTheme) => {
        return constants.bgAndTextColor[colorTheme];
    }, []);

    const [colorTheme, setColorTheme] = useCSSVarState({
        cookieName: constants.colorThemeCookieName,
        initialState: props.initialColorTheme,
        getValue
    });

    return (
        <ColorThemeContext.Provider
            value = {[colorTheme, setColorTheme]}
        >
            {props.children}
        </ColorThemeContext.Provider>
    );
}
