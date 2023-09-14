import { getAllProducts } from '@/requests/api'

import ProductList from '@/components/ProductList'
import Typography from '@/components/Typography'

export default async function ProductCatalog() {
	const products = await getAllProducts()

	return (
		<div className='py-10'>
			<Typography variant='title' className='text-4xl text-base-subtitle'>
				Nossos cafés
			</Typography>
			<ProductList productList={products} />
		</div>
	)
}
