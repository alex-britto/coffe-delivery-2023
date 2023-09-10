import { ComponentProps } from "react";
import styled, { W } from "windstitch";

import { Minus, Plus } from "@phosphor-icons/react";

interface NumberInputProps extends W.Infer<typeof Container> {
	value: number;
	onIncreaseClick: () => void;
	onDecreaseClick: () => void;
	inputProps?: ComponentProps<"input">;
}

export const NumberInput = ({
	value,
	onIncreaseClick,
	onDecreaseClick,
	inputProps,
	...rest
}: NumberInputProps) => (
	<Container {...rest}>
		<Minus
			size={14}
			className="fill-purple-default hover:fill-purple-dark cursor-pointer"
			onClick={() => value > 0 && onDecreaseClick()}
		/>
		<StyledInput type="number" value={value} disabled {...inputProps} />
		<Plus
			size={14}
			className="fill-purple-default hover:fill-purple-dark cursor-pointer"
			onClick={onIncreaseClick}
		/>
	</Container>
);

const Container = styled.div(`
w-fit
h-8
flex
justify-between
items-center
gap-1
p-2
rounded-md
text-base
bg-base-button
`);

const StyledInput = styled.input(`
	w-5
	text-center
	bg-transparent

	focus-visible:outline-none
`);
