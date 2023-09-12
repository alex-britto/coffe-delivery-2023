import { getSingleProduct } from '@/requests/api'

interface PageProps {
	params: { id: string }
}

export default async function Page({ params }: PageProps) {
	const product = await getSingleProduct(params.id)
	return (
		<div>
			<h1>Product: {params.id}</h1>
			<pre>{product.title}</pre>
		</div>
	)
}
