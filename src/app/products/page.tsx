import { getAllProducts } from "@/requests/api";
import styled from "windstitch";

export default async function Page() {
	const products = await getAllProducts();
	return (
		<div>
			{products.map((item) => (
				<div key={item.id}>{item.title}</div>
			))}
		</div>
	);
}
