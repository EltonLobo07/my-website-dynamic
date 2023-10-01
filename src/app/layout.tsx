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
import { VerticalLayoutSeparator } from "~/components/VerticalLayoutSeparator";
import { NavMenuBtn } from "~/components/NavMenuBtn";
import { ModalVisibleContextProvider } from "~/components/ModalVisibleContextProvider";
import { PathHeading } from "~/components/PathHeading";

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
	const commonVerticalPadding = "py-16px";

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
					<ModalVisibleContextProvider>
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
								<RootHeader
									className = {helpers.formatClassName(
										`
											hidden laptopAndUp:block
											my-auto
											max-h-full
											px-16px
											overflow-y-auto
											flex-shrink-0
											${commonVerticalPadding}
										`
									)}
								/>
								<VerticalLayoutSeparator 
									className = {helpers.formatClassName(
										`
											hidden laptopAndUp:block
										`
									)}
								/>
								<main
									className = {helpers.formatClassName(
										`
											my-auto
											flex-grow
											max-h-full
											overflow-y-auto
											flex
											flex-col
											gap-y-4
											${commonVerticalPadding}
										`
									)}
								>
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
												`
											)}
										>
											<ToggleColorThemeBtn />
											<NavMenuBtn 
												className = {helpers.formatClassName(
													`
														laptopAndUp:hidden
													`
												)}
											/>
										</div>
									</div>
									{props.children}
								</main>
						</div>
					</ModalVisibleContextProvider>
				</ColorThemeContextProvider>
			</body>
		</html>
	)
}
