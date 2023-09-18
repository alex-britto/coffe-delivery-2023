'use client'

import Image from 'next/image'
import styled, { W } from 'windstitch'

import DiscardButton from '@/components/DiscardButton'
import NumberInput from '@/components/NumberInput'
import Typography from '@/components/Typography'
import { formatNumberToMoney } from '@/utils/formatters'

interface CartItemProps extends W.Infer<typeof Container> {
	itemId: string
	imageSrc: string
	title: string
	price: number
	quantity: number
	onChangeItemQuantity: (e: number) => void
	onRemoveClick: (itemId: string) => void
}

export default function CartItem({
	itemId,
	imageSrc,
	title,
	price,
	quantity,
	onChangeItemQuantity,
	onRemoveClick,
	...rest
}: CartItemProps) {
	return (
		<Container {...rest}>
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
							onIncreaseClick={() => onChangeItemQuantity(quantity + 1)}
							onDecreaseClick={() => onChangeItemQuantity(quantity - 1)}
						/>
						<DiscardButton onClick={() => onRemoveClick(itemId)} />
					</div>
				</div>
			</div>
			<Typography variant='title'>
				{formatNumberToMoney(price, true)}
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
`)
