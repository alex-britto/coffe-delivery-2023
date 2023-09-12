import { ReactNode } from 'react'

import styled, { W } from 'windstitch'

interface ButtonProps extends W.Infer<typeof StyledButton> {
	children?: ReactNode
	icon?: ReactNode
	badgeCount?: number
}

export default function Button({
	children,
	icon,
	badgeCount,
	baseColor,
	...rest
}: ButtonProps) {
	return (
		<StyledButton baseColor={baseColor} hasIcon={!!icon} {...rest}>
			{children}
			{icon}
			{badgeCount && <Badge>{badgeCount}</Badge>}
		</StyledButton>
	)
}

const StyledButton = styled.button(
	`
	relative
	p-2 
	rounded-md
	font-bold
	text-white
	`,
	{
		variants: {
			baseColor: {
				primary: `
				bg-yellow-default
				hover:bg-yellow-dark
				`,
				secondary: `
				bg-purple-dark
				hover:bg-purple-default
				`,
				tertiary: `
				bg-yellow-light
				`,
			},
			hasIcon: (hasIcon: boolean) => (hasIcon ? 'w-fit' : 'w-full py-3'),
		},
		defaultVariants: {
			baseColor: 'primary',
			hasIcon: false,
		},
	},
)

const Badge = styled.div(
	`
		absolute
		bottom-7
		left-7
		w-5
		h-5
		flex
		justify-center
		items-center
		rounded-full
		bg-yellow-dark
		cursor-default
		text-xs
`,
)
