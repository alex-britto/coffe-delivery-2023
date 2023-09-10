import styled, { W } from "windstitch";
import { CreditCard } from "@phosphor-icons/react";

interface SelectItemProps extends W.Infer<typeof Container> {
	title: string;
}

export const SelectItem = ({
	title = "cartão de teste",
	isSelected,
	...rest
}: SelectItemProps) => (
	<Container isSelected={isSelected} {...rest}>
		<CreditCard size={16} className="fill-purple-default" />
		{title}
	</Container>
);

const Container = styled.div(
	`
		w-full 
		p-4
		flex
		gap-3
		rounded-md
		cursor-pointer
		text-xs
		uppercase
		text-base-text
		bg-base-button
		shadow-inner-border
	`,
	{
		variants: {
			isSelected: (isSelected: boolean) =>
				isSelected
					? "bg-purple-light shadow-inner-border"
					: "hover:bg-base.hover",
		},
	}
);
