'use client'

import SelectInputList from '@/components/SelectInputList/SelectInputList'
import TextField from '@/components/TextField'
import Typography from '@/components/Typography'
import { UserCheckoutProps, userCheckoutSchema } from '@/schemas/checkoutSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'windstitch'

interface CheckoutUserForm {
	userFormId: string
	onSubmitData: (data: UserCheckoutProps) => void
}

export default function CheckoutUserForm({
	userFormId,
	onSubmitData,
}: CheckoutUserForm) {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<UserCheckoutProps>({
		resolver: zodResolver(userCheckoutSchema),
	})
	const selectInputItems = [
		{
			id: 'credit_card',
			title: 'cartão de crédito',
		},
		{
			id: 'debit_card',
			title: 'cartão de débito',
		},
	]
	return (
		<form
			id={userFormId}
			onSubmit={handleSubmit(onSubmitData)}
			className='flex flex-col gap-4'
		>
			<Container className='flex flex-col gap-8'>
				<div>
					<Typography>Dados para Entrega</Typography>
					<Typography className='text-sm'>
						Informe seu nome e o endereço onde deseja receber seu pedido
					</Typography>
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<TextField
						className='col-span-2'
						inputProps={{ ...register('name') }}
						placeholder='Nome'
						errorMessage={errors.name?.message}
					/>
					<TextField
						inputProps={{ ...register('cep') }}
						placeholder='CEP'
						errorMessage={errors.cep?.message}
					/>
					<TextField
						className='col-span-3'
						inputProps={{ ...register('street') }}
						placeholder='Rua'
						errorMessage={errors.street?.message}
					/>
					<TextField
						inputProps={{ ...register('number') }}
						placeholder='Número'
						errorMessage={errors.number?.message}
					/>
					<TextField
						className='col-span-2'
						inputProps={{ ...register('neighborhood') }}
						placeholder='Bairro'
						errorMessage={errors.neighborhood?.message}
					/>
					<TextField
						inputProps={{ ...register('complement') }}
						placeholder='Complemento'
						errorMessage={errors.complement?.message}
						isRequired={false}
					/>
					<div className='col-span-2'>
						<div className='flex gap-4'>
							<TextField
								className='w-3/4'
								inputProps={{ ...register('city') }}
								placeholder='Cidade'
								errorMessage={errors.city?.message}
							/>
							<TextField
								className='1/4'
								inputProps={{ ...register('state') }}
								placeholder='UF'
								errorMessage={errors.state?.message}
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<SelectInputList
					items={selectInputItems}
					onClick={(selectedItem) => setValue('paymentMethod', selectedItem)}
				/>
				{!!errors.paymentMethod?.message && (
					<Typography className='text-sm text-red'>
						{errors.paymentMethod?.message}
					</Typography>
				)}
			</Container>
		</form>
	)
}

const Container = styled.div(`
	p-10
	bg-base-card
	rounded 
`)
