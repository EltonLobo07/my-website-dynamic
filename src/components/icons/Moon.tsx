import { twMerge } from "tailwind-merge";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function Moon(props: Props) {
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
                "w-24px h-24px",
                props.className
            )}
        >
            <path d ="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
    );
}
