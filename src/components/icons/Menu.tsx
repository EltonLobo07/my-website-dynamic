import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function Menu(props: Props) {
    return (
        <svg
            xmlns = "http://www.w3.org/2000/svg"
            fill = "none"
            stroke = "currentColor"
            strokeLinecap = "round"
            strokeLinejoin = "round"
            strokeWidth = "2"
            viewBox = "0 0 24 24"
            {...props}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        w-24px
                        h-24px
                    `
                ),
                props.className
            )}
        >
            <path d = "M3 12L21 12"></path>
            <path d = "M3 6L21 6"></path>
            <path d = "M3 18L21 18"></path>
        </svg>
    );
}
