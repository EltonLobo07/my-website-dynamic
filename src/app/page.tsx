"use client";

import { Metadata } from "next";
import { Anchor } from "~/components/Anchor";
import { ExternalLink } from "~/components/icons/ExternalLink";
import { Github } from "~/components/icons/Github";
import { Mail } from "~/components/icons/Mail";
import { useColorThemeContext } from "~/custom-hooks/useColorThemeContext";
import { helpers } from "~/helpers";
import { styles } from "~/styles";

export default function RootPage() {
	const colorTheme = useColorThemeContext()[0];

	const lightTheme = colorTheme === "light";
	const mainSectionTitle = "introduction and relevant links";
	const introductionSectionTitle = "introduction";
	const emailAndGithubSectionTile = "Email address & github information";
	const commonEmailAndGithubClassName = helpers.formatClassName(
		`
			flex
			gap-x-2
			items-center
		`
	);

	return (
		<section
			aria-label = {mainSectionTitle}
			className = {helpers.formatClassName(
				`
					relative
					${styles.tw.pageRoot}
					flex
					flex-col
					gap-y-8
				`
			)}
		>
			<h3
				style = {styles.visuallyHidden}
			>
				{mainSectionTitle}
			</h3>
			<section
				aria-label = {introductionSectionTitle}
				className = {helpers.formatClassName(
					`
						relative
						mt-auto
						flex
						flex-col
						gap-y-5
					`
				)}
			>
				<h4
					style = {styles.visuallyHidden}
				>
					{introductionSectionTitle}
				</h4>
				<p
					className = {helpers.formatClassName(
						`
							flex
							flex-wrap
							gap-x-3
							gap-y-2
							items-center
							text-3xl
							font-medium
						`
					)}
				>
					<span
						role = "img"
						aria-label = "waving hand"
						className = {helpers.formatClassName(
							`
								inline-block
								animate-wave
								origin-[80%_90%]
							`
						)}
					>
						👋
					</span>
					<span>
						I&apos;m
					</span>
					<span
						className = {helpers.formatClassName(
							`
								text-irrigo-purple
							`
						)}
					>
						Elton Lobo
					</span>
				</p>
				<p
					className = {helpers.formatClassName(
						`
							${
								lightTheme
								? "text-young-night"
								: "text-white-edgar"
							}
						`
					)}
				>
					I&apos;m a software developer from Mumbai, India. I&apos;m currently looking to join a team as a software developer. I have mainly written web apps and websites using 
					<Anchor
						target = "_blank"
						href = "https://react.dev/"
					>
						React
					</Anchor>
					and 
					<Anchor
						target = "_blank"
						href = "https://www.typescriptlang.org/"
					>
						TypeScript
					</Anchor>
					. I am motivated to work on problems that require software developers to create efficient technical solutions using technology suited for the issue at hand.
				</p>
				<Anchor
					target = "_blank"
					href = "/elton-lobo-resume.pdf"
					useRightArrow
					className = {helpers.formatClassName(
						`
							capitalize
							w-fit
						`
					)}
				>
					view résumé
				</Anchor>
			</section>
			<section
				aria-label = {emailAndGithubSectionTile}
				className = {helpers.formatClassName(
					`
						relative
						mb-auto
						flex
						flex-col
						gap-y-3
					`
				)}
			>
				<h4
					style = {styles.visuallyHidden}
				>
					{emailAndGithubSectionTile}
				</h4>
				<p
					className = {helpers.formatClassName(
						`
							relative
							${commonEmailAndGithubClassName}
						`
					)}
				>
					<span
						style = {styles.visuallyHidden}
					>
						my email address
					</span>
					<Mail 
						aria-hidden
						className = {helpers.formatClassName(
							`
								flex-shrink-0
							`
						)}
					/>
					<span>
						eltonsw00@gmail.com
					</span>
				</p>
				<a
					target = "_blank"
					href = "https://github.com/EltonLobo07"
					className = {helpers.formatClassName(
						`
							relative
							w-fit
							${commonEmailAndGithubClassName}
							border-b
							border-transparent hover:border-current
							${
								lightTheme
								? "text-blue-600"
								: "text-blue-400"
							}
						`
					)}
				>
					<Github 
						aria-hidden
						className = {helpers.formatClassName(
							`
								flex-shrink-0
							`
						)}
					/>
					<span
						aria-hidden
					>
						My Github profile
					</span>
					<ExternalLink 
						aria-hidden
						className = {helpers.formatClassName(
							`
								w-[1em]
								h-[1em]
							`
						)}
					/>
				</a>
			</section>
		</section>
	);
}
