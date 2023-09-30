import "~/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { helpers } from "~/helpers";
import { constants } from "~/constants";
import { ColorThemeContextProvider } from "~/components/ColorThemeContextProvider";
import { CSSVar } from "~/types";

const inter = Inter({ 
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
						min-h-full
						${inter.className}
					`
				)}
			>
				<ColorThemeContextProvider
					initialColorTheme = {initialColorTheme}
				>
					{props.children}
				</ColorThemeContextProvider>
			</body>
		</html>
	)
}
