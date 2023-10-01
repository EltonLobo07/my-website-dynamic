"use client";

import React from "react";

export function useCustomContext<TContext>(context: React.Context<TContext>, errorMsg?: string) {
    const fromContext = React.useContext(context);
    if (fromContext === null) {
        throw new Error(
            errorMsg
            ?? "useCustomContext cannot use the provided context"
        );
    }
    return fromContext;
}
