"use client";

import React from "react";
import { ColorTheme } from "~/constants";

export const ColorThemeContext = React.createContext<
    | [
        ColorTheme,
        (newColorTheme: ColorTheme) => void
      ]
    | null
>(null);
