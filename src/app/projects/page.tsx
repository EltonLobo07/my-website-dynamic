import { Metadata } from "next";
import { OtherProjects } from "~/components/OtherProjects";
import { ProjectCard } from "~/components/ProjectCard";
import { dataHelpers } from "~/data/dataHelpers";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

export const metadata: Metadata = {
    title: helpers.addMyFullname("Projects")
};

export default async function ProjectsPage() {
    const projects = await dataHelpers.getProjects();
    const otherProjects = await dataHelpers.getOtherProjects();

    return (
        <div
            className = {helpers.formatClassName(
                `
                    ${styles.tw.pageRoot}
                    flex
                    flex-col
                    gap-y-16
                `
            )}
        >
            <ul
                className = {helpers.formatClassName(
                    `
                        mt-auto
                        flex
                        flex-col
                        gap-y-12
                    `
                )}
            >
                {
                    projects.map((project, projectNum) => (
                        <li
                            key = {project.url.liveSite}
                        >
                            <ProjectCard 
                                $img = {{
                                    src: project.imgSrc,
                                    alt: project.imgAlt,
                                    blurDataUrl: project.blurDataUrl
                                }}
                                $description = {project.description}
                                $title = {project.title}
                                $techTags = {project.tags}
                                $url = {project.url}
                                $loadImgAsap = {projectNum < 2}
                            />
                        </li>
                    ))
                }
            </ul>
            <OtherProjects 
                $otherProjects = {otherProjects}
                className = {helpers.formatClassName(
                    `
                        mb-auto
                    `
                )}
            />
        </div>
    );
}
