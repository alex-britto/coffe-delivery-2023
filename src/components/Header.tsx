'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ShoppingCart } from '@phosphor-icons/react'
import styled from 'windstitch'

import Button from '@/components/Button'
import { useCartStore } from '@/globalStates/useCartStore'
import { signOut, useSession } from 'next-auth/react'

export default function Header() {
	const { cart } = useCartStore()
	const router = useRouter()
	const { data: session } = useSession()

	return (
		<Container>
			<Image
				src='/images/logo.png'
				alt='logo'
				width={85}
				height={40}
				quality={100}
				onClick={() => router.push('/')}
				className='cursor-pointer'
			/>
			{session && session.user ? (
				<div className='flex gap-2'>
					<div>
						<p className='whitespace-nowrap'>{session.user.name}</p>
						<p className='whitespace-nowrap'>{session.user.email}</p>
					</div>
					{session.user.image && (
						<Image
							src={session.user.image}
							alt='logo'
							width={40}
							height={40}
							quality={100}
							className='rounded-full shadow'
						/>
					)}
					<Button baseColor='secondary' onClick={() => signOut()}>
						Logout
					</Button>
				</div>
			) : (
				<Button
					baseColor='tertiary'
					icon={
						<ShoppingCart
							size={22}
							weight='fill'
							className='fill-yellow-dark'
						/>
					}
					onClick={() => router.push('/checkout')}
					badgeCount={cart.length > 0 ? cart.length : undefined}
				/>
			)}
		</Container>
	)
}

const Container = styled.header(
	`
		w-full 
		flex 
		sticky top-0
		z-10
		py-8
		px-44
		justify-between
		bg-white
		shadow-md
	`,
)
