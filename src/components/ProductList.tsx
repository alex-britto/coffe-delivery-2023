"use client";

import { ProductResponse } from "@/interfaces/products";

import ProductCard from "@/components/ProductCard";

interface ProductListProps {
	productList: ProductResponse[];
}

export default function ProductList({ productList }: ProductListProps) {
	return (
		<div className="grid grid-cols-4 w-fit gap-8">
			{productList.map((item) => (
				<ProductCard
					key={item.id}
					imageSrc="/images/coffees/americano.png"
					tags={item.tags}
					title={item.title}
					description={item.description}
					price={item.price}
					onCartClick={(e: number) => console.log(item.title, e)}
				/>
			))}
		</div>
	);
}
