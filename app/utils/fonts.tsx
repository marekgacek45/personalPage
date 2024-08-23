import { Pixelify_Sans, Roboto_Mono } from 'next/font/google'

export const font_heading_init = Pixelify_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
	weight: ['400', '500', '600', '700'],
})

export const font_text_init = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-text',
	weight: ['300', '400', '500', '600'],
})



export const font_heading = font_heading_init.variable
export const font_text = font_text_init.variable
