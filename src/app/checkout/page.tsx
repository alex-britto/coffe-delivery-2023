'use client'

import Typography from '@/components/Typography'
import CheckoutCoffeesForm from '@/components/sections/CheckoutCoffeesForm'
import CheckoutUserForm from '@/components/sections/CheckoutUserForm'
import { UserCheckoutProps } from '@/schemas/checkoutSchema'
import { signIn } from 'next-auth/react'

export default function Page() {
	const handleSubmitData = (data: UserCheckoutProps) => {
		console.log(data)
		signIn('google', { callbackUrl: '/logged' })
	}
	const userFormId = 'checkoutUserForm'
	return (
		<div className='grid grid-cols-5 gap-8'>
			<section className='col-span-3'>
				<Typography variant='title' className=' mb-4 text-lg font-bold'>
					Complete seu pedido
				</Typography>
				<CheckoutUserForm
					userFormId={userFormId}
					onSubmitData={handleSubmitData}
				/>
			</section>
			<section className='col-span-2'>
				<Typography variant='title' className=' mb-4 text-lg font-bold'>
					Cafés selecionados
				</Typography>
				<CheckoutCoffeesForm userFormId={userFormId} />
			</section>
		</div>
	)
}
