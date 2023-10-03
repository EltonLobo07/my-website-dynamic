import { twMerge } from "tailwind-merge";
import { helpers } from "~/helpers";
import { CustomPropsObj } from "~/types";
import { ToggleList } from "~/components/ToggleList";
import { EducationOrSkillHeading } from "~/components/EducationOrSkillHeading";

type Props = 
    Omit<JSX.IntrinsicElements["section"], "ref" | "children"> & 
    CustomPropsObj<{
        title: string,
        skills: Record<"name" | "background", string>[]
    }>;

export function SkillsSubSection(props: Props) {
    const {
        $title,
        $skills,
        ...otherProps
    } = props;

    return (
        <section
            aria-label = {$title}
        >
            <EducationOrSkillHeading>
                {$title}
            </EducationOrSkillHeading>
            <ul
                {...otherProps}
                className = {twMerge(
                    helpers.formatClassName(
                        `
                            flex
                            flex-col
                            gap-y-4
                        `
                    ),
                    otherProps.className
                )}
            >
                {
                    $skills.map(skill => (
                        <li
                            key = {skill.name}
                        >
                            <ToggleList
                                $title = {skill.name}
                                $content = {skill.background}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
