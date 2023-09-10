"use client";

import { useState } from "react";

import { ShoppingCart } from "@phosphor-icons/react";

import {
	Button,
	DiscardButton,
	Typography,
	NumberInput,
	SelectInputList,
} from "@/components";

export default function Home() {
	const [numberInputValue, setNumberInputValue] = useState(0);
	const selectInputItems = [
		{
			id: "item1",
			title: "cartão de crédito",
		},
		{
			id: "item2",
			title: "cartão de débito",
		},
	];
	return (
		<div className="grid gap-4">
			<SelectInputList
				items={selectInputItems}
				onClick={(item) => console.log("clicou no item", item)}
			/>
			<NumberInput
				value={numberInputValue}
				onIncreaseClick={() =>
					setNumberInputValue((numberInputValue) => numberInputValue + 1)
				}
				onDecreaseClick={() =>
					setNumberInputValue((numberInputValue) => numberInputValue - 1)
				}
			/>
			<Typography variant="title" className="text-4xl" as="h1">
				Teste
			</Typography>
			<DiscardButton />
			<Button onClick={() => console.log("clicou")}>CONFIRMAR PEDIDO</Button>
			<Button
				baseColor="secondary"
				icon={<ShoppingCart size={22} weight="fill" />}
				onClick={() => console.log("clicou")}
			/>
			<Button
				baseColor="tertiary"
				icon={
					<ShoppingCart size={22} weight="fill" className="fill-yellow-dark" />
				}
				onClick={() => console.log("clicou")}
				badgeCount={3}
			/>
		</div>
	);
}
