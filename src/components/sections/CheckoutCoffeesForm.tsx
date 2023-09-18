import Button from '@/components/Button'
import CartItem from '@/components/CartItem'
import Typography from '@/components/Typography'
import { useCartStore } from '@/globalStates/useCartStore'
import { formatNumberToMoney } from '@/utils/formatters'
import { useEffect } from 'react'
import styled from 'windstitch'

interface CheckoutCoffeesFormProps {
	userFormId: string
}

export default function CheckoutCoffeesForm({
	userFormId,
}: CheckoutCoffeesFormProps) {
	const { cart, addToCart, removeFromCart } = useCartStore()
	const cartTotalCoast = cart.reduce((total, item) => {
		return total + item.price * (item.quantity ?? 0)
	}, 0)

	useEffect(() => {
		useCartStore.persist.rehydrate()
	}, [])
	return (
		<Container>
			{cart.map((item) => {
				return (
					<CartItem
						key={item.id}
						itemId={item.id}
						imageSrc={item.imageSrc}
						title={item.title}
						price={item.price}
						quantity={item.quantity ?? 0}
						onChangeItemQuantity={(quantity: number) =>
							addToCart({
								...item,
								quantity: quantity,
							})
						}
						onRemoveClick={removeFromCart}
						className='mb-6 border-b-[1px] border-base-button pb-6'
					/>
				)
			})}
			<div className='mb-6 flex flex-col gap-3'>
				<div className='flex justify-between'>
					<Typography className='text-sm'>Total de itens</Typography>
					<Typography>{formatNumberToMoney(cartTotalCoast, true)}</Typography>
				</div>
				<div className='flex justify-between'>
					<Typography className='text-sm'>Entrega</Typography>
					<Typography>{formatNumberToMoney(10, true)}</Typography>
				</div>
				<div className='flex justify-between'>
					<Typography className='text-xl font-bold'>Total</Typography>
					<Typography className='text-xl font-bold'>
						{formatNumberToMoney(cartTotalCoast + 10, true)}
					</Typography>
				</div>
			</div>
			<Button type='submit' form={userFormId}>
				CONFIRMAR PEDIDO
			</Button>
		</Container>
	)
}

const Container = styled.div(`
	bg-base-card
	rounded-tr-3xl
	rounded-bl-3xl
	rounded-tl
	rounded-br
	p-10
`)
