import type { Metadata } from 'next'

import { baloo2Font, robotoFont } from '@/utils/fonts'

import './globals.css'

import AuthProviders from '@/components/AuthProviders'
import Header from '@/components/Header'

export const metadata: Metadata = {
	title: 'Coffee Delivery 2023',
	description: 'Creating Coffe Delivery project using next13.4',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en' className={`${robotoFont.variable} ${baloo2Font.variable}`}>
			<body className='font-text text-base-text'>
				<AuthProviders>
					<Header />
					<main className='mx-auto max-w-[1200px] px-6 pb-28 pt-6'>
						{children}
					</main>
				</AuthProviders>
			</body>
		</html>
	)
}

export default RootLayout
