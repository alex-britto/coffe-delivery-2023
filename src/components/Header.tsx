'use client'

import Image from 'next/image'
import router from 'next/router'

import { ShoppingCart } from '@phosphor-icons/react'
import styled from 'windstitch'

import Button from '@/components/Button'
import { useCartStore } from '@/globalStates/useCartStore'

export default function Header() {
	const { cart } = useCartStore()
	return (
		<Container className=''>
			<Image
				src='/images/logo.png'
				alt='logo'
				width={85}
				height={40}
				quality={100}
			/>
			<Button
				baseColor='tertiary'
				icon={
					<ShoppingCart size={22} weight='fill' className='fill-yellow-dark' />
				}
				onClick={() => router.push('')}
				badgeCount={cart.length > 0 ? cart.length : undefined}
			/>
		</Container>
	)
}

const Container = styled.header(
	`
		w-full 
		flex 
		py-8
		justify-between
	`,
)
