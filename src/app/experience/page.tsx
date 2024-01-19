import { twJoin } from "tailwind-merge";
import ExperienceCard, { 
    LinkContent, 
    Work 
} from "~/components/ExperienceCard";
import { styles } from "~/styles";
import { 
    CustomDate, 
    ReadonlyArrayAtLeastOne 
} from "~/types";

type Experience = {
    workedAs: string,
    workedAt: LinkContent,
    from: CustomDate,
    to: CustomDate,
    tags: ReadonlyArrayAtLeastOne<string>,
    relevantLinks?: ReadonlyArrayAtLeastOne<LinkContent>,
    workDone: ReadonlyArrayAtLeastOne<Work>
};

const experienceHistory: ReadonlyArrayAtLeastOne<Experience> = [
    {
        workedAs: "SDE I - Frontend",
        workedAt: {
            displayText: "Samespace",
            href: "https://www.samespace.com/"
        },
        workDone: [
            {
                id: "1",
                content: "Worked with a UI designer and backend engineers to build an internal web application."
            }
        ],
        from: "oct 2023",
        to: "present",
        tags: [
            "TypeScript",
            "React",
            "GraphQL",
            "HTML",
            "CSS"
        ]
    },
    {
        workedAs: "software engineer",
        workedAt: {
            displayText: "CometChat",
            href: "https://www.cometchat.com/"
        },
        from: "dec 2022",
        to: "jul 2023",
        tags: [
            "TypeScript", 
            "JavaScript", 
            "React", 
            "HTML", 
            "CSS", 
            "Redux"
        ],
        workDone: [
            {
                id: "1",
                content: 
                "Worked with the UI kit team to rebuild company's React UI kit which helps developers quickly build custom chat and calling web applications."
            },
            {
                id: "2",
                content: "Collaborated with many developers to add features to the company's dashboard."
            },
            {
                id: "3",
                content: "Fixed dashboard related UI issues."
            },
            {
                id: "4",
                content: "Reviewed code written by other developers."
            }
        ],
        relevantLinks: [
            {
                displayText: "Chat UI kits v4 blog",
                href: "https://www.cometchat.com/blog/chat-ui-kits-v4"
            },
            {
                displayText: "React UI kit docs",
                href: "https://www.cometchat.com/docs/v4/react-uikit/overview"
            },
            {
                displayText: "CometChat dashboard",
                href: "https://app.cometchat.com/signup"
            }
        ]
    }
];

const lastWorkExpIdx = experienceHistory.length - 1;

export default function ExperiencePage() {
    return (
        <ul
            className = {twJoin(
                styles.tw.pageRoot,
                "flex flex-col gap-y-6"
            )}
        >
            {experienceHistory.map((workExp, workExpIdx) => (
                <ExperienceCard 
                    key = {workExp.workedAt.href}
                    addBottomBorder = {workExpIdx !== lastWorkExpIdx}
                    workedAs = {workExp.workedAs}
                    workedAt = {workExp.workedAt}
                    workDone = {workExp.workDone}
                    from = {workExp.from}
                    to = {workExp.to}
                    tags = {workExp.tags}
                    relevantLinks = {workExp.relevantLinks}
                />    
            ))}
        </ul>
    );
}
