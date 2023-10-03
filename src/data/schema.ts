import { z } from "zod";

const projects = z.array(z.object({
    title: z.string(),
    description: z.string(),
    imgSrc: z.string(),
    imgAlt: z.string().optional(),
    blurDataUrl: z.string(),
    tags: z.array(z.string()),
    url: z.object({
        liveSite: z.string(),
        code: z.string()
    })
}));

const projectsImgRootDir = z.string();

const otherProjects = z.array(z.object({
    name: z.string(),
    link: z.string()
}));

const onlineCourses = z.array(z.object({
    name: z.string(),
    offeredBy: z.string(),
    certificateLink: z.string(),
    background: z.string()
}));

const skills = z.array(z.object({
    name: z.string(),
    background: z.string()
}));

const mySkills = z.object({
    languages: skills,
    "libraries & frameworks": skills,
    "tools & platforms": skills,
    databases: skills
});

const data = z.object({
    projects,
    projectsImgRootDir,
    otherProjects,
    onlineCourses,
    mySkills
});

export const schema = {
    data
};
