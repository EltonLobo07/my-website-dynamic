import { 
    ColorTheme, 
    constants 
} from "~/constants";

function formatClassName(className: string): string {
    const stack: string[] = [];
    const specialChars = new Set(["\n", "\t", " "]);
    for (const ch of className) {
        const isChSpecial = specialChars.has(ch);
        if (
            !isChSpecial || 
            (
                stack.length > 0 &&
                !specialChars.has(stack[stack.length - 1]) 
            )
        ) {
            stack.push(isChSpecial ? " " : ch);   
        }
    }
    while (stack.length && specialChars.has(stack[stack.length - 1])) {
        stack.pop();
    }
    return stack.join("");
}

function isColorTheme(value: unknown): value is ColorTheme {
    return (
        typeof value === "string" &&
        constants.colorTheme.findIndex(tVal => tVal === value) > 0
    );
}

export const helpers = {
    formatClassName,
    isColorTheme
};
