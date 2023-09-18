'use client'

import { useCartStore } from '@/globalStates/useCartStore'

import { ProductResponse } from '@/interfaces/products'

import ProductCard from '@/components/ProductCard'

interface ProductListProps {
	productList: ProductResponse[]
}

export default function ProductList({ productList }: ProductListProps) {
	const { addToCart, cart } = useCartStore()

	const showCartItemQuantity = (id: string) => {
		const selectedItem = cart.find((item) => item.id === id)
		if (selectedItem) {
			const cartItemIndex = cart.indexOf(selectedItem)
			return cart[cartItemIndex]?.quantity
		}
		return 0
	}

	return (
		<div className='grid w-fit grid-cols-4 gap-8'>
			{productList.map((item) => (
				<ProductCard
					key={item.id}
					imageSrc={item.imageSrc}
					tags={item.tags}
					title={item.title}
					description={item.description}
					price={item.price}
					quantity={showCartItemQuantity(item.id)}
					onChangeItemQuantity={(quantity: number) =>
						addToCart({
							...item,
							quantity: quantity,
						})
					}
				/>
			))}
		</div>
	)
}
