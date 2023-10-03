import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function SadFace(props: Props) {
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
            <circle cx = "12" cy = "12" r = "10"></circle>
            <path d = "M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <path d = "M9 9L9.01 9"></path>
            <path d = "M15 9L15.01 9"></path>
        </svg>
    );
}
