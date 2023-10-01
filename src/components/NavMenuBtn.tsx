"use client";

import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";
import { Menu } from "~/components/icons/Menu";
import { styles } from "~/styles";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { useModalVisibleContext } from "~/custom-hooks/useModalVisibleContext";

type Props = Omit<JSX.IntrinsicElements["button"], "ref" | "children" | "onClick" | "disabled">;

export function NavMenuBtn(props: Props) {
    const colorTheme = useColorThemeContext()[0];
    const [modalVisible, setModalVisible] = useModalVisibleContext();

    const { roundedBtn } = styles.tw;
    const disabled = modalVisible === true;

    return (
        <button
            type= "button"
            {...props}
            disabled = {disabled}
            onClick = {() => setModalVisible(true)}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        relative
                        ${roundedBtn.common}
                        ${roundedBtn.themeDependent.value[colorTheme]}
                        ${
                            disabled
                            ? "opacity-50"
                            : roundedBtn.themeDependent.hover[colorTheme] 
                        }
                    `
                ),
                props.className
            )}
        >
            <span
                style = {styles.visuallyHidden}
            >
                open main navigation menu
            </span>
            <Menu
                aria-hidden
            />
        </button>
    );
}
