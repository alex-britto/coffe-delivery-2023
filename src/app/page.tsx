"use client";

import styled from "windstitch";

import { Button } from "@/components";
import { ShoppingCart } from "@phosphor-icons/react";
import { DiscardButton } from "@/components/DiscardButton/DiscardButton";
import { Typography } from "@/components/Typography/Typography";

export default function Home() {
	return (
		<div className="grid gap-4">
			<Typography variant="title" className="text-4xl" as="h3">
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

const MyTitle = styled.h1(
	`
	font-bold 
	text-4xl 
	text-yellow-dark
	`
);
