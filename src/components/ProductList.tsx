'use client'

import { useCartStore } from '@/globalStates/useCartStore'

import { ProductResponse } from '@/interfaces/products'

import ProductCard from '@/components/ProductCard'

interface ProductListProps {
	productList: ProductResponse[]
}

export default function ProductList({ productList }: ProductListProps) {
	const { addToCart } = useCartStore()

	const handleAddItemToCart = (id: string, quantity: number) => {
		const selectedItem = productList.find((item) => item.id === id)

		selectedItem &&
			addToCart({
				...selectedItem,
				quantity: quantity,
			})
	}

	return (
		<div className='grid w-fit grid-cols-4 gap-8'>
			{productList.map((item) => (
				<ProductCard
					key={item.id}
					imageSrc='/images/coffees/americano.png'
					tags={item.tags}
					title={item.title}
					description={item.description}
					price={item.price}
					onCartClick={(quantity: number) =>
						handleAddItemToCart(item.id, quantity)
					}
				/>
			))}
		</div>
	)
}
