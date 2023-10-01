import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function X(props: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
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
            <path d="M18 6L6 18"></path>
            <path d="M6 6L18 18"></path>
        </svg>
    );
}
