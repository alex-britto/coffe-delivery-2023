import Button from '@/components/Button'
import styled from 'windstitch'

interface CheckoutCoffeesFormProps {
	userFormId: string
}

export default function CheckoutCoffeesForm({
	userFormId,
}: CheckoutCoffeesFormProps) {
	return (
		<Container>
			CartList
			<br />
			CartTotalCoast
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
