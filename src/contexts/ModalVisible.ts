"use client";

import React from "react";

export const ModalVisible = React.createContext<
    | [
        boolean,
        (newModalVisible: boolean) => void
      ]
    | null
>(null);
