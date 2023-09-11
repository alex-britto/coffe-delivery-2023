import { getSingleProduct } from "@/requests/api";

interface ProductProps {
	params: { id: string };
}

const Product = async ({ params }: ProductProps) => {
	const myProduct = await getSingleProduct(params.id);
	return (
		<div>
			<h1>Product: {params.id}</h1>
			<pre>{myProduct.title}</pre>
		</div>
	);
};

export default Product;
