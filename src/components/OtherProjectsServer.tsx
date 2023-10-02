import { dataHelpers } from "~/data/dataHelpers";
import { OtherProjectsClient } from "~/components/OtherProjectsClient";

export async function OtherProjectsServer() {
    const otherProjects = await dataHelpers.getOtherProjects();

    return (
        <OtherProjectsClient 
            $otherProjects = {otherProjects}
        />
    );
}
