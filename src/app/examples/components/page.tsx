"use client";

import { useState } from "react";

import { ShoppingCart } from "@phosphor-icons/react";

import CartItem from "@/components/CartItem";
import ProductCard from "@/components/ProductCard";
import TextField from "@/components/TextField";
import SelectInputList from "@/components/SelectInputList/SelectInputList";
import NumberInput from "@/components/NumberInput";
import Typography from "@/components/Typography";
import DiscardButton from "@/components/DiscardButton";
import Button from "@/components/Button";

export default function Page() {
	const [text, setText] = useState("");
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
			<CartItem
				imageSrc="/images/coffees/americano.png"
				title="Americano"
				price={9.9}
				quantity={3}
				onQuantityChange={(e: number) => console.log("Itens selecionados:", e)}
				onRemoveClick={(e: string) => console.log("Remover", e)}
			/>
			<ProductCard
				imageSrc="/images/coffees/americano.png"
				tags={["tradicional", "classico"]}
				title="Americano"
				description="Expresso diluído, menos intenso que o tradicional"
				price={9.9}
				onCartClick={(e: number) => console.log("Itens selecionados:", e)}
			/>
			<TextField placeholder="Label" value={text} onChange={setText} />
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
				Hello World!
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
