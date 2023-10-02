import { OtherProjectsServer } from "~/components/OtherProjectsServer";
import { ProjectCard } from "~/components/ProjectCard";
import { dataHelpers } from "~/data/dataHelpers";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

export default async function ProjectsPage() {
    const projects = await dataHelpers.getProjects();

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
                                    alt: project.imgAlt
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
            <OtherProjectsServer />
        </div>
    );
}
