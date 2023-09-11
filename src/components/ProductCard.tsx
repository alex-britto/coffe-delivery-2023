"use client";

import { useState } from "react";
import Image from "next/image";

import styled, { W } from "windstitch";

import { ShoppingCart } from "@phosphor-icons/react";

import Typography from "@/components/Typography";
import NumberInput from "@/components/NumberInput";
import Button from "@/components/Button";

interface ProductCardProps extends W.Infer<typeof Container> {
	imageSrc: string;
	tags: string[];
	title: string;
	description: string;
	price: number;
	quantity?: number;
	onCartClick: (e: number) => void;
}

export default function ProductCard({
	imageSrc,
	tags,
	title,
	description,
	price,
	quantity = 0,
	onCartClick,
	...rest
}: ProductCardProps) {
	const [numberInputValue, setNumberInputValue] = useState(quantity);
	return (
		<Container {...rest}>
			<Image
				src={imageSrc}
				alt={title}
				width={100}
				height={100}
				className="transition-opacity opacity-0 duration-[2s] -mt-10 mb-3"
				onLoadingComplete={(img) => img.classList.remove("opacity-0")}
				quality={100}
			/>
			<ul className="flex gap-2 mt-3">
				{tags.map((item) => (
					<li key={item}>
						<ProductTag>{item}</ProductTag>
					</li>
				))}
			</ul>
			<Typography variant="title" className="text-xl text-base-subtitle mb-1">
				{title}
			</Typography>
			<Typography className="text-sm text-base-label text-center">
				{description}
			</Typography>
			<div className="w-full flex justify-between mt-8">
				<div className="flex items-center">
					<Typography className="text-xs mr-1">R$</Typography>
					<Typography variant="title" className="text-xl">
						{new Intl.NumberFormat("pt-Br", {
							minimumFractionDigits: 2,
						}).format(price)}
					</Typography>
				</div>
				<div className="flex gap-2">
					<NumberInput
						value={numberInputValue}
						onIncreaseClick={() =>
							setNumberInputValue((numberInputValue) => numberInputValue + 1)
						}
						onDecreaseClick={() =>
							setNumberInputValue((numberInputValue) => numberInputValue - 1)
						}
					/>
					<Button
						baseColor="secondary"
						icon={<ShoppingCart weight="fill" />}
						onClick={() => onCartClick(numberInputValue)}
					/>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div(`
	bg-base-card
	w-64
	rounded-tr-3xl
	rounded-bl-3xl
	rounded-tl-md
	rounded-br-md
	flex
	flex-col
	items-center
	px-6
	py-5
	mt-5
	shadow-md
`);

const ProductTag = styled(Typography, {
	className: `
		bg-yellow-light 
		text-yellow-dark 
		uppercase 
		px-2 
		py-1 
		text-xxs 
		rounded-full 
		w-fit 
		font-bold 
		mb-4
	`,
});
