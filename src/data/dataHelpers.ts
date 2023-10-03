import fs from "fs/promises";
import { z } from "zod";
import { schema } from "~/data/schema";

const DATA_FILE_PATH = `${process.cwd()}/src/data/data.json`;

type Data = z.infer<typeof schema.data>;
type Projects = Data["projects"];
type OtherProjects = Data["otherProjects"];
type OnlineCourses = Data["onlineCourses"];

async function getData(): Promise<Data> {
    return schema.data.parse(JSON.parse(await fs.readFile(DATA_FILE_PATH, "utf-8")));
}

async function getProjects(): Promise<Projects> {
    const {
        projects,
        projectsImgRootDir
    } = await getData();
    return projects.map(project => ({
        ...project,
        imgSrc: `${projectsImgRootDir}/${project.imgSrc}`
    }));
}

async function getOtherProjects(): Promise<OtherProjects> {
    return (await getData())["otherProjects"];
}

async function getOnlineCourses(): Promise<OnlineCourses> {
    return (await getData())["onlineCourses"];
}

export const dataHelpers = {
    getProjects,
    getOtherProjects,
    getOnlineCourses
};
