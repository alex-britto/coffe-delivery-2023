import type { Metadata } from 'next'

import { baloo2Font, robotoFont } from '@/utils/fonts'

import './globals.css'

import Header from '@/components/Header'

export const metadata: Metadata = {
	title: 'Coffee Delivery 2023',
	description: 'Creating Coffe Delivery project using next13.4',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en' className={`${robotoFont.variable} ${baloo2Font.variable}`}>
			<body className='mx-auto max-w-[1200px] pb-28 font-text text-base-text'>
				<Header />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
