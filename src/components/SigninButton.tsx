'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function SigninButton() {
	const { data: session } = useSession()

	if (session && session.user) {
		return (
			<div>
				<p>{session.user.name}</p>
				<p>{session.user.email}</p>
				<button
					className='bg-purple-default p-1 text-white hover:bg-purple-dark'
					onClick={() => signOut()}
				>
					Logout
				</button>
			</div>
		)
	}
	return (
		<div>
			<button
				className='bg-purple-default p-1 text-white hover:bg-purple-dark'
				onClick={() => signIn()}
			>
				Login
			</button>
		</div>
	)
}
