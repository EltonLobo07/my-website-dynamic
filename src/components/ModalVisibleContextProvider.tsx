"use client";

import React from "react";
import { ModalVisible } from "~/contexts/ModalVisible";

type Props = {
    children: React.ReactNode
};

export function ModalVisibleContextProvider(props: Props) {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <ModalVisible.Provider
            value = {[modalVisible, setModalVisible]}
        >
            {props.children}
        </ModalVisible.Provider>
    );
}
