import "~/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { helpers } from "~/helpers";

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
	return (
		<html 
			lang = "en"
			className = "h-full"
		>
			<body 
				className = {helpers.formatClassName(
					`
						min-h-full
						${inter.className}
						bg-black
						text-white
						text-7xl
					`
				)}
			>
				{props.children}
			</body>
		</html>
	)
}
