import { twMerge } from "tailwind-merge";
import { EducationOrSkillHeading } from "~/components/EducationOrSkillHeading";
import { Information } from "~/components/Information";
import { SkillsSubSection } from "~/components/SkillsSubSection";
import { dataHelpers } from "~/data/dataHelpers";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

type Props = Omit<JSX.IntrinsicElements["div"], "ref" | "children"> & {searchParams: any};

export default async function Skills(props: Props) {
    const {
        languages,
        "libraries & frameworks": libsAndFrameworks,
        "tools & platforms": toolsAndPlatforms,
        databases
    } = await dataHelpers.getMySkills();

    const {
        searchParams,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className = {twMerge(
                helpers.formatClassName(
                    `
                        ${styles.tw.pageRoot}
                        flex
                        flex-col
                        gap-y-14
                    `
                ),
                otherProps.className
            )}
        >
            <Information 
                $headingLvl = {3}
                $message = "To learn more about my experience with a particular tech, click on that tech's title."
                className = {helpers.formatClassName(
                    `
                        -mb-6
                    `
                )}
            />
            <SkillsSubSection 
                $title = "languages"
                $skills = {languages}
            />
            <SkillsSubSection 
                $title = "libraries & frameworks"
                $skills = {libsAndFrameworks}
            />
            <SkillsSubSection 
                $title = "tools & platforms"
                $skills = {toolsAndPlatforms}
            />
            <SkillsSubSection 
                $title = "databases"
                $skills = {databases}
            />
        </div>
    );
}
