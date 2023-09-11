interface ProductResponse {
	id: string;
	imageSrc: string;
	title: string;
	description: string;
	tags: string[];
	price: number;
}

export const getSingleProduct = async (productId: string) => {
	const response = await fetch(`http://localhost:4000/coffees/${productId}`, {
		next: {
			revalidate: 30,
		},
	});
	const data: ProductResponse = await response.json();

	return data;
};
