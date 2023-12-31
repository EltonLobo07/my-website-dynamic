import { helpers } from "~/helpers";
import { styles } from "~/styles";
import { Anchor } from "~/components/Anchor";
import { Duration } from "~/components/Duration";
import { Information } from "~/components/Information";
import { ToggleList } from "~/components/ToggleList";
import { CGPA } from "~/components/CGPA";
import { dataHelpers } from "~/data/dataHelpers";
import { EducationOrSkillHeading } from "~/components/EducationOrSkillHeading";
import { Certificate } from "~/components/icons/Certificate";
import { Leetcode } from "~/components/Leetcode";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: helpers.addMyFullname("Education")
};

export default async function EducationPage() {
    const onlineCourses = await dataHelpers.getOnlineCourses();

    const formalEducationSectionTitle = "formal";
    const onlineCoursesSectionTitle = "online courses taken";
    const relevantActivitySectionTitle = "relevant activity";

    return (
        <div
            className = {
                helpers.formatClassName(
                    `
                        relative
                        ${styles.tw.pageRoot}
                        flex
                        flex-col
                        gap-y-14
                    `
                )}
        >
            <section
                aria-label = {formalEducationSectionTitle}
                className = {helpers.formatClassName(
                    `
                        mt-auto
                    `
                )}
            >
                <EducationOrSkillHeading>
                    {formalEducationSectionTitle}
                </EducationOrSkillHeading>
                <p
                    className = {helpers.formatClassName(
                        `
                            relative
                            text-base tabAndUp:text-lg
                            flex
                            flex-wrap
                            gap-x-2
                            items-baseline
                        `
                    )}
                >
                    <span>
                        Bachelor of Computer Engineering
                    </span>
                    <span
                        aria-hidden
                    >
                        -
                    </span>
                    <span
                        style = {styles.visuallyHidden}
                    >
                        from
                    </span>
                    <Anchor
                        target = "_blank"
                        href = "https://mu.ac.in/"
                    >
                        University of Mumbai
                    </Anchor>
                </p>
                <Duration 
                    $from = "aug 2018"
                    $to = "aug 2022"
                    className = "mb-1"
                />
                <CGPA>
                    9.72
                </CGPA>
            </section>
            <section
                aria-label = {onlineCoursesSectionTitle}
                className = {helpers.formatClassName(
                    `
                        flex
                        flex-col
                        gap-y-1
                    `
                )}
            >
                <EducationOrSkillHeading>
                    {onlineCoursesSectionTitle}
                </EducationOrSkillHeading>
                <Information 
                    $message = "To find out what made me take a particular course, click on that course's title."
                    $headingLvl = {4}
                    className = "mb-5"
                />
                <ul
                    className = {helpers.formatClassName(
                        `
                            flex
                            flex-col
                            gap-y-4
                        `
                    )}
                >
                    {
                        onlineCourses.map(onlineCourse => (
                            <li
                                key = {onlineCourse.certificateLink}
                            >
                                <ToggleList 
                                    $title = {`${onlineCourse.name} (${onlineCourse.offeredBy})`}
                                    $content = {onlineCourse.background}
                                    $link = {{
                                        content: (
                                            <Certificate 
                                                aria-hidden
                                                className = {helpers.formatClassName(
                                                    `
                                                        w-[18px]
                                                        h-[18px]
                                                    `
                                                )}
                                            />
                                        ),
                                        href: onlineCourse.certificateLink,
                                        ariaLabel: `${onlineCourse.name} certificate of completion`,
                                        hideArrow: true
                                    }}
                                />
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section
                aria-label = {relevantActivitySectionTitle}
                className = {helpers.formatClassName(
                    `
                        mb-auto
                    `
                )}
            >
                <EducationOrSkillHeading>
                    {relevantActivitySectionTitle}
                </EducationOrSkillHeading>
                <Leetcode />
            </section>
        </div>
    );
}
