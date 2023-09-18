import Typography from '@/components/Typography'
import Image from 'next/image'
import styled from 'windstitch'

export default function Page() {
	return (
		<div className='pt-16'>
			<Typography
				variant='title'
				className='text-4xl font-bold text-yellow-dark'
			>
				Uhu! Pedido confirmado
			</Typography>
			<Typography className='text-xl'>
				Agora é só aguardar que logo o café chegará até você
			</Typography>
			<div className='mt-10 flex justify-between gap-28'>
				<OrderDataContainer className=''>
					<Typography>Entrega em</Typography>
					<Typography>Previsão de entrega</Typography>
					<Typography>Pagamento em</Typography>
				</OrderDataContainer>
				<Image
					src='/images/delivery.png'
					alt='Imagem delivery'
					width={492}
					height={293}
				/>
			</div>
		</div>
	)
}

const OrderDataContainer = styled.div(`
	rounded-tr-3xl
	rounded-bl-3xl
	rounded-tl
	rounded-br
	flex 
	flex-col 
	gap-8 
	p-10
	border-2
	border-yellow-light
`)
