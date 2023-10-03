import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Information } from "~/components/Information";
import { SkillsSubSection } from "~/components/SkillsSubSection";
import { dataHelpers } from "~/data/dataHelpers";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

type Props = Omit<JSX.IntrinsicElements["div"], "ref" | "children"> & {searchParams: any};

export const metadata: Metadata = {
    title: helpers.addMyFullname("Skills")
};

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
                        pb-[4px]
                    `
                ),
                otherProps.className
            )}
        >
            <div
                className = {helpers.formatClassName(
                    `
                        mt-auto
                        -mb-14
                    `
                )}
            ></div>
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
                className = {helpers.formatClassName(
                    `
                        mb-auto
                    `
                )}
            />
        </div>
    );
}
