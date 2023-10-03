import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["svg"], "ref" | "children">;

export function Certificate(props: Props) {
    return (
        <svg
            xmlns = "http://www.w3.org/2000/svg"
            viewBox = "0 0 256 256"
            fill = "currentColor"
            {...props}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        w-[32px]
                        h-[32px]
                    `
                ),
                props.className
            )}
        >
            <path 
                d = "M248 128a56 56 0 10-96 39.14V224a8 8 0 0011.58 7.16L192 216.94l28.42 14.22A8 8 0 00232 224v-56.86A55.81 55.81 0 00248 128zm-56-40a40 40 0 11-40 40 40 40 0 0140-40zm3.58 112.84a8 8 0 00-7.16 0L168 211.06v-32.47a55.94 55.94 0 0048 0v32.47zM136 192a8 8 0 01-8 8H40a16 16 0 01-16-16V56a16 16 0 0116-16h176a16 16 0 0116 16 8 8 0 01-16 0H40v128h88a8 8 0 018 8zm-16-56a8 8 0 01-8 8H72a8 8 0 010-16h40a8 8 0 018 8zm0-32a8 8 0 01-8 8H72a8 8 0 010-16h40a8 8 0 018 8z"></path>
        </svg>
    );
}
