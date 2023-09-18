'use client'

import Image from 'next/image'

import styled, { W } from 'windstitch'

import NumberInput from '@/components/NumberInput'
import Typography from '@/components/Typography'
import { formatNumberToMoney } from '@/utils/formatters'

interface ProductCardProps extends W.Infer<typeof Container> {
	imageSrc: string
	tags: string[]
	title: string
	description: string
	price: number
	quantity?: number
	onChangeItemQuantity: (e: number) => void
}

export default function ProductCard({
	imageSrc,
	tags,
	title,
	description,
	price,
	quantity = 0,
	onChangeItemQuantity,
	...rest
}: ProductCardProps) {
	return (
		<Container {...rest}>
			<Image
				src={imageSrc}
				alt={title}
				width={100}
				height={100}
				className='-mt-10 mb-3 opacity-0 transition-opacity duration-[2s]'
				onLoadingComplete={(img) => img.classList.remove('opacity-0')}
				quality={100}
			/>
			<ul className='mt-3 flex gap-2'>
				{tags.map((item) => (
					<li key={item}>
						<ProductTag>{item}</ProductTag>
					</li>
				))}
			</ul>
			<Typography variant='title' className='mb-1 text-xl text-base-subtitle'>
				{title}
			</Typography>
			<Typography className='text-center text-sm text-base-label'>
				{description}
			</Typography>
			<div className='mt-8 flex w-full justify-between'>
				<div className='flex items-center'>
					<Typography className='mr-1 text-xs'>R$</Typography>
					<Typography variant='title' className='text-xl'>
						{formatNumberToMoney(price)}
					</Typography>
				</div>
				<div className='flex gap-2'>
					<NumberInput
						value={quantity}
						onIncreaseClick={() => onChangeItemQuantity(quantity + 1)}
						onDecreaseClick={() => onChangeItemQuantity(quantity - 1)}
					/>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div(`
	bg-base-card
	w-[17rem]
	rounded-tr-3xl
	rounded-bl-3xl
	rounded-tl-md
	rounded-br-md
	flex
	flex-col
	items-center
	px-6
	py-5
	mt-5
	shadow-md
`)

const ProductTag = styled(Typography, {
	className: `
		mb-4 
		w-fit 
		rounded-full 
		bg-yellow-light 
		px-2 
		py-1 
		text-xxs 
		font-bold 
		uppercase 
		text-yellow-dark
	`,
})
