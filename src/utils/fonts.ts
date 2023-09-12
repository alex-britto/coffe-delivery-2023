import { Roboto, Baloo_2 } from 'next/font/google'

export const robotoFont = Roboto({
	style: ['normal'],
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-roboto',
})

export const baloo2Font = Baloo_2({
	style: ['normal'],
	weight: ['700', '800'],
	subsets: ['latin'],
	variable: '--font-baloo2',
})
