"use client";

import React from "react";
import Cookies from "js-cookie";
import { constants } from "~/constants";
import { CSSVar } from "~/types";

type Args<TState extends string> = {
    cookieName: string,
    initialState: TState,
    getValue: (state: TState) => Record<CSSVar, string>,
};

export function useCSSVarState<TState extends string>(args: Args<TState>) {
    const {
        initialState,
        cookieName,
        getValue
    } = args;

    const [state, setState] = React.useState(initialState);
    const bodyElementRef = React.useRef<HTMLBodyElement | null>(null);

    React.useEffect(() => {
        bodyElementRef.current = document.querySelector("body");
    }, []);

    React.useEffect(() => {
        const bodyElement = bodyElementRef.current;
        if (bodyElement === null) {
            return;
        }
        const getValueResult = getValue(state);
        for (const [key, value] of Object.entries(getValueResult)) {
            bodyElement.style.setProperty(key, value);
        }
    }, [state, cookieName, getValue]);

    React.useEffect(() => {
        Cookies.set(cookieName, state, {expires: constants.cookieExpirationDays});
    }, [cookieName, state]);

    return [state, setState] as const;
}
