import Image from "next/image";

import Typography from "@/components/Typography";

export default function Hero() {
	return (
		<div className="flex py-20">
			<div className="w-full flex flex-col justify-between">
				<div>
					<Typography variant="title" className="text-base-title text-5xl mb-4">
						Encontre o café perfeito <br />
						para qualquer hora do dia
					</Typography>
					<Typography className="text-base-subtitle text-xl">
						Com o Coffee Delivery você recebe seu café onde estiver, <br />a
						qualquer hora
					</Typography>
				</div>
				<ul className="grid grid-cols-2 w-fit gap-y-5 gap-x-10 pb-4">
					<li className="flex items-center gap-3">
						<Image
							src="/images/cart-icon.png"
							alt="Ícone"
							width={32}
							height={32}
						/>
						<Typography>Compra simples e segura</Typography>
					</li>
					<li className="flex items-center gap-3">
						<Image
							src="/images/clock-icon.png"
							alt="Ícone"
							width={32}
							height={32}
						/>
						<Typography>Embalagem mantém o café intacto</Typography>
					</li>
					<li className="flex items-center gap-3">
						<Image
							src="/images/box-icon.png"
							alt="Ícone"
							width={32}
							height={32}
						/>
						<Typography>Entrega rápida e rastreada</Typography>
					</li>
					<li className="flex items-center gap-3">
						<Image
							src="/images/coffee-icon.png"
							alt="Ícone"
							width={32}
							height={32}
						/>
						<Typography>O café chega fresquinho até você</Typography>
					</li>
				</ul>
			</div>
			<Image
				src="/images/hero-img.png"
				alt="Banner café delivery"
				width={476}
				height={360}
			/>
		</div>
	);
}
