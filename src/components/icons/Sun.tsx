import { twMerge } from "tailwind-merge";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function Sun(props: Props) {
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
                "w-[24px] h-[24px]",
                props.className
            )}
        >
            <circle 
                cx = "12" 
                cy = "12" 
                r = "5">
            </circle>
            <path d = "M12 1L12 3"></path>
            <path d = "M12 21L12 23"></path>
            <path d = "M4.22 4.22L5.64 5.64"></path>
            <path d = "M18.36 18.36L19.78 19.78"></path>
            <path d = "M1 12L3 12"></path>
            <path d = "M21 12L23 12"></path>
            <path d = "M4.22 19.78L5.64 18.36"></path>
            <path d = "M18.36 5.64L19.78 4.22"></path>
        </svg>
    );
}
