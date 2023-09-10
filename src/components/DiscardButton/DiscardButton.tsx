import { Trash } from "@phosphor-icons/react";

import styled, { W } from "windstitch";

export const DiscardButton = ({ ...rest }: W.Infer<typeof StyledButton>) => {
	return (
		<StyledButton {...rest}>
			REMOVER
			<Trash size={16} className="fill-purple-default" />
		</StyledButton>
	);
};

const StyledButton = styled.button(
	`
	w-fit
	bg-base-button
	hover:bg-base-hover
	px-2
	py-1 
	rounded-md
	flex
	gap-1
	items-center
	text-base-text
	`
);
