import "./globals.css";
import Footer from "@/components/footer";
import Head from "next/head";

export const metadata = {
	icons: "./favicon.ico",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8"/>
				<meta name="twitter:title" content="ServerComponents.dev | What are RSCs" />
				<meta name="og:title" content="ServerComponents.dev | What are RSCs" />
				<meta name="twitter:text:title" content="ServerComponents.dev | What are RSCs" />
			</head>
			<body className="dark:bg-stone-950 dark:text-gray-300 dark:bg-dark-hero-pattern bg-gray-50 text-gray-700 bg-hero-pattern text-base font-medium md:text-lg overflow-x-hidden">
			<div className="relative">
				{children}
			</div>
			<Footer/>
			</body>
		</html>
	);
}
