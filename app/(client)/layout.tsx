import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Provider } from '@/app/utils/Provider'

import { font_heading, font_text, font_accent } from '@/app/utils/fonts'
import './globals.css'

import Navbar from '@/app/components/nav/Navbar'
import Footer from '@/app/components/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title:{
		default: 'Marek Gacek - FullStack Developer',
		template: '%s | Marek Gacek - FullStack Developer',
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				className={`${font_heading} ${font_text} ${font_accent} font-text bg-bgLight-400  dark:bg-bgDark-600 text-fontDark dark:text-fontLight selection:bg-ownTurquise-400 duration-300`}>
				<Provider>
					<Navbar />

					{children}

					<Footer />
				</Provider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}
