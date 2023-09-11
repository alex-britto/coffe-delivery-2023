import styled from "windstitch";

const Typography = styled.p(``, {
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

export default Typography;
