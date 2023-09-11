import { getSingleProduct } from "@/requests/api";

interface PageProps {
	params: { id: string };
}

const Page = async ({ params }: PageProps) => {
	const myProduct = await getSingleProduct(params.id);
	return (
		<div>
			<h1>Product: {params.id}</h1>
			<pre>{myProduct.title}</pre>
		</div>
	);
};

export default Page;
