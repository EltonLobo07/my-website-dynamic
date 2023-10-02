import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function Calendar(props: Props) {
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
            <rect width = "18" height = "18" x = "3" y = "4" rx = "2" ry = "2"></rect>
            <path d = "M16 2L16 6"></path>
            <path d = "M8 2L8 6"></path>
            <path d = "M3 10L21 10"></path>
        </svg>
    );
}
