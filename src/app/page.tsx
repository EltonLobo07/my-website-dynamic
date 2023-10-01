"use client";

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
					flex-grow
					overflow-y-auto
					px-16px
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
							text-disco-ball
							${
								lightTheme
								? "text-young-night"
								: "text-white-edgar"
							}
						`
					)}
				>
					I&apos;m a software developer from India who spends most of the time focusing on the front end of a software product&apos;s technology stack. I&apos;m currently unemployed and am looking to join a team as a software developer. I have manily written web apps and websites using 
					<Anchor
						target = "_blank"
						href = "https://react.dev/"
					>
						React
					</Anchor>
					, but I am motivated to work on problems that require me to create good technical solutions.
				</p>
				<Anchor
					target = "_blank"
					href = "#"
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
								w-[16px]
								h-[16px]
							`
						)}
					/>
				</a>
			</section>
		</section>
	);
}
