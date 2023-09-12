import { ProductResponse } from '@/interfaces/products'

export const getSingleProduct = async (productId: string) => {
	const response = await fetch(`http://localhost:4000/coffees/${productId}`, {
		next: {
			revalidate: 30,
		},
	})
	const data: ProductResponse = await response.json()

	return data
}

export const getAllProducts = async () => {
	const response = await fetch('http://localhost:4000/coffees/', {
		next: {
			revalidate: 30,
		},
	})
	const data: ProductResponse[] = await response.json()

	return data
}
