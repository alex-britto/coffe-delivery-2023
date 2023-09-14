import { ProductResponse } from '@/interfaces/products'
import { create } from 'zustand'

interface CartProduct extends ProductResponse {
	quantity: number
}

interface CartStoreTypes {
	cart: CartProduct[]
	addToCart: (item: CartProduct) => void
	removeFromCart: (id: string) => void
}

export const useCartStore = create<CartStoreTypes>((set) => {
	const handleAddToCart = (newProduct: CartProduct, cart: CartProduct[]) => {
		const isItemAlredyOnCart = cart.find((item) => item.id === newProduct.id)
		if (isItemAlredyOnCart) {
			return updateProductQuantity(
				cart.indexOf(isItemAlredyOnCart),
				newProduct.quantity,
				cart,
			)
		} else {
			return [...cart, newProduct]
		}
	}

	const updateProductQuantity = (
		productIndex: number,
		newProductQuantity: number,
		cart: CartProduct[],
	) => {
		cart[productIndex].quantity = newProductQuantity
		return [...cart]
	}
	return {
		cart: [],
		addToCart: (newProduct) =>
			set((oldState) => ({ cart: handleAddToCart(newProduct, oldState.cart) })),
		removeFromCart: (productId) =>
			set((oldState) => ({
				cart: oldState.cart.filter((item) => item.id !== productId),
			})),
	}
})
