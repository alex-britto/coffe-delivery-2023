import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			yellow: {
				default: "#DBAC2C",
				dark: "#C47F17",
				light: "#F1E9C9",
			},
			purple: {
				default: "#8047F8",
				dark: "#4B2995",
				light: "#EBE5F9",
			},
			base: {
				title: "#272221",
				subtitle: "#403937",
				text: "#574F4D",
				label: "#8D8686",
				hover: "#D7D5D5",
				button: "#E6E5E5",
				input: "#EDEDED",
				card: "#F3F2F2",
				background: "#FAFAFA",
			},
		},
		fontFamily: {
			text: ["var(--font-roboto)"],
			title: ["var(--font-baloo2)"],
		},
		extend: {},
	},
	plugins: [],
};
export default config;
