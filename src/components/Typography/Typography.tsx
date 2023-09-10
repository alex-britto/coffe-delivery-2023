import styled from "windstitch";

export const Typography = styled.p(``, {
	variants: {
		variant: {
			title: `font-title`,
			text: `font-text`,
		},
	},
	defaultVariants: {
		variant: "text",
	},
});
