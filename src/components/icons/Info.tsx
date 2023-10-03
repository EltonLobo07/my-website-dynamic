import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function Info(props: Props) {
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
            <path d = "M12 16L12 12"></path>
            <path d = "M12 8L12.01 8"></path>
        </svg>
    );
}
