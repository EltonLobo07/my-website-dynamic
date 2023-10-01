import "~/app/globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { cookies } from "next/headers";
import { helpers } from "~/helpers";
import { constants } from "~/constants";
import { ColorThemeContextProvider } from "~/components/ColorThemeContextProvider";
import { CSSVar } from "~/types";
import { RootHeader } from "~/components/RootHeader";
import { styles } from "~/styles";
import { ToggleColorThemeBtn } from "~/components/ToggleColorThemeBtn";
import { PathHeading } from "~/components/PathHeading";
import { RootNavMenu } from "~/components/RootNavMenu";

const lora = Lora({ 
  subsets: ["latin"], 
  display: "swap"
});

export const metadata: Metadata = {
  title: "Elton Lobo"
}

type Props = {
  children: React.ReactNode
};

export default function RootLayout(props: Props) {
	const colorThemeCookie = cookies().get(constants.colorThemeCookieName);
	const colorThemeCookieValue = colorThemeCookie?.value;
	const initialColorTheme =
		helpers.isColorTheme(colorThemeCookieValue)
		? colorThemeCookieValue
		: "dark";
	const commonVerticalPadding = "py-16px laptopAndUp:py-80px";

	return (
		<html 
			lang = "en"
			className = "h-full"
		>
			<body 
				style = {{
					...(constants.bgAndTextColor[initialColorTheme]),
					backgroundColor: `var(${constants.bgColorCssVarName})`,
					color: `var(${constants.textColorCssVarName})`
				} as React.CSSProperties & Record<CSSVar, string>}
				className = {helpers.formatClassName(
					`
						${lora.className}
						h-full
						relative
						isolate
					`
				)}
			>
				<h1
					style = {styles.visuallyHidden}
				>
					Elton Lobo
				</h1>
				<ColorThemeContextProvider
					initialColorTheme = {initialColorTheme}
				>
					<div
						className = {helpers.formatClassName(
							`
								${styles.tw.maxWidthWrapper}
								h-full
								flex
								laptopAndUp:gap-x-10
							`
						)}
					>
						<div
							className = {helpers.formatClassName(
								`
									h-full
									flex-shrink-0
									overflow-y-auto
									hidden laptopAndUp:flex
									flex-col
									gap-y-5
									${commonVerticalPadding}
								`
							)}
						>
							<RootHeader
								className = {helpers.formatClassName(
									`
										max-h-full
										overflow-y-auto
										my-auto
										pl-16px
										pr-12
									`
								)}
							/>
						</div>
						<main
							className = {helpers.formatClassName(
								`
									laptopAndUp:relative
									flex-grow
									max-h-full
									overflow-y-auto
									flex
									flex-col
									gap-y-10
									${commonVerticalPadding}
								`
							)}
						>
							<ToggleColorThemeBtn 
								className = {helpers.formatClassName(
									`
										hidden laptopAndUp:inline-block
										absolute
										top-[16px]
										right-0
									`
								)}
							/>
							<div
								className = {helpers.formatClassName(
									`
										flex-shrink-0
										flex
										gap-4
										relative
										items-center
										pl-16px
										flex-wrap
										laptopAndUp:hidden
									`
								)}
							>
								<PathHeading 
									className = {helpers.formatClassName(
										`
											laptopAndUp:hidden
										`
									)}
								/>
								<div
									className = {helpers.formatClassName(
										`
											ml-auto
											flex
											gap-x-[16px]
											pr-[2px]
										`
									)}
								>
									<ToggleColorThemeBtn />
									<RootNavMenu 
										className = {helpers.formatClassName(
											`
												laptopAndUp:hidden
												relative
												z-10
											`
										)}
									/>
								</div>
							</div>
							{props.children}
						</main>
					</div>
				</ColorThemeContextProvider>
			</body>
		</html>
	)
}
