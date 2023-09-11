"use client";

import { useState } from "react";

import { SelectItem } from "./SelectItem";

interface SelectInputListProps {
	items: {
		id: string;
		title: string;
	}[];
	selectedItemDefault?: string;
	onClick?: (e: string) => void;
}

export default function SelectInputList({
	items,
	selectedItemDefault,
	onClick,
	...rest
}: SelectInputListProps) {
	const [selectedItemId, setSelectedItemId] = useState(selectedItemDefault);

	const handleOnClick = (index: string) => {
		setSelectedItemId(index);
		!!onClick && onClick(index);
	};

	return (
		<div className="flex gap-6" {...rest}>
			{items.map((item) => {
				return (
					<SelectItem
						title={item.title}
						onClick={() => handleOnClick(item.id)}
						isSelected={item.id === selectedItemId}
						className="p-4"
						key={item.id}
					/>
				);
			})}
		</div>
	);
}
