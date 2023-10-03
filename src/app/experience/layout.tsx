import { Metadata } from "next";
import { helpers } from "~/helpers";

type Props = {
    children: React.ReactNode
};

export const metadata: Metadata = {
    title: helpers.addMyFullname("Experience")
};

export default function ExperienceLayout(props: Props) {
    return props.children;
}
