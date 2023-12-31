import { NavLink } from "~/components/NavLink";
import { constants } from "~/constants";
import { helpers } from "~/helpers";

type Props = Omit<JSX.IntrinsicElements["header"], "ref" | "children">;

export function RootHeader(props: Props) {
    return (
        <header
            {...props}
            className = {props.className}
        >
            <nav>
                <ul>
                    {
                        constants.linkNameAndFullPath
                            .map(([name, path], linkNum) => (
                                <li
                                    key = {path}
                                    className = {helpers.formatClassName(
                                        `
                                            ${
                                                linkNum > 0
                                                ? "pt-4"
                                                : ""
                                            }
                                        `
                                    )}
                                >
                                    <NavLink
                                        href = {path}
                                        addActiveStyle
                                        addHoverStyle
                                        className = {helpers.formatClassName(
                                            `
                                                text-xl
                                                font-semibold
                                            `
                                        )}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                    }
                </ul>
            </nav>
        </header>
    );
}
