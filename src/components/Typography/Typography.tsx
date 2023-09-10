import styled from "windstitch";

export const Typography = styled.p(
	`
	text-base-text
`,
	{
		variants: {
			variant: {
				title: `font-title`,
				text: `font-text`,
			},
		},
		defaultVariants: {
			variant: "text",
		},
	}
);
