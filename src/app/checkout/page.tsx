'use client'

import Typography from '@/components/Typography'
import CheckoutCoffeesForm from '@/components/sections/CheckoutCoffeesForm'
import CheckoutUserForm from '@/components/sections/CheckoutUserForm'
import { useCartStore } from '@/globalStates/useCartStore'
import { useUserData } from '@/globalStates/useUserData'
import { UserCheckoutProps } from '@/schemas/checkoutSchema'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function Page() {
	const { setUserData } = useUserData()

	const handleSubmitData = (data: UserCheckoutProps) => {
		signIn('google', { callbackUrl: '/logged' })
		setUserData(data)
	}

	const userFormId = 'checkoutUserForm'

	useEffect(() => {
		useCartStore.persist.rehydrate()
	}, [])
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
