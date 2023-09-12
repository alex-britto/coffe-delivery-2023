'use client'

import Image from 'next/image'
import styled, { W } from 'windstitch'

import DiscardButton from '@/components/DiscardButton'
import NumberInput from '@/components/NumberInput'
import Typography from '@/components/Typography'

interface CartItemProps extends W.Infer<typeof Container> {
	imageSrc: string
	title: string
	price: number
	quantity: number
	onQuantityChange: (e: number) => void
	onRemoveClick: (itemId: string) => void
}

export default function CartItem({
	imageSrc,
	title,
	price,
	quantity,
	onQuantityChange,
	onRemoveClick,
}: CartItemProps) {
	return (
		<Container>
			<div className='flex gap-5'>
				<Image
					src={imageSrc}
					alt={title}
					width={64}
					height={64}
					className='opacity-0 transition-opacity duration-[2s]'
					onLoadingComplete={(img) => img.classList.remove('opacity-0')}
					quality={100}
				/>
				<div>
					<Typography className='mb-2 text-base-subtitle'>{title}</Typography>
					<div className='flex gap-2'>
						<NumberInput
							value={quantity}
							onIncreaseClick={() => onQuantityChange(quantity + 1)}
							onDecreaseClick={() => onQuantityChange(quantity - 1)}
						/>
						<DiscardButton onClick={() => onRemoveClick(title)} />
					</div>
				</div>
			</div>
			<Typography variant='title'>
				R${' '}
				{new Intl.NumberFormat('pt-Br', {
					minimumFractionDigits: 2,
				}).format(price)}
			</Typography>
		</Container>
	)
}

const Container = styled.div(`
	bg-base-card
	flex
	justify-between
	w-90
	px-1
	py-2
	rounded
	shadow-md
`)
