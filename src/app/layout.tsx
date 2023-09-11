import type { Metadata } from "next";

import { robotoFont, baloo2Font } from "@/utils/fonts";

import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Coffee Delivery 2023",
	description: "Creating Coffe Delivery project using next13.4",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" className={`${robotoFont.variable} ${baloo2Font.variable}`}>
			<body className="font-text text-base-text p-5">
				<Header />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
