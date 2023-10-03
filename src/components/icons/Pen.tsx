import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function Pen(props: Props) {
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
                        w-[24px]
                        h-[24px]
                    `
                ),
                props.className
            )}
        >
            <path d = "M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
    );
}
