import { ProductResponse } from '@/interfaces/products'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartStoreTypes {
	cart: ProductResponse[]
	addToCart: (item: ProductResponse) => void
	removeFromCart: (id: string) => void
	clearAllCartItems: () => void
}

export const useCartStore = create<CartStoreTypes>()(
	persist(
		(set) => {
			const handleAddToCart = (
				newProduct: ProductResponse,
				cart: ProductResponse[],
			) => {
				const isItemAlredyOnCart = cart.find(
					(item) => item.id === newProduct.id,
				)
				if (isItemAlredyOnCart && newProduct.quantity) {
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
				cart: ProductResponse[],
			) => {
				cart[productIndex].quantity = newProductQuantity
				return [...cart]
			}
			return {
				cart: [],
				addToCart: (newProduct: ProductResponse) =>
					set((oldState: CartStoreTypes) => ({
						cart: handleAddToCart(newProduct, oldState.cart),
					})),
				removeFromCart: (productId: string) =>
					set((oldState: CartStoreTypes) => ({
						cart: oldState.cart.filter((item) => item.id !== productId),
					})),
				clearAllCartItems: () => set(() => ({ cart: [] })),
			}
		},
		{
			name: 'cart-storage',
			skipHydration: true,
		},
	),
)
