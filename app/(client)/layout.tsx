

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"
import { font_heading, font_text,font_accent } from '../utils/fonts'

import './globals.css'
import Navbar from '../components/nav/Navbar'
import { Provider } from '../utils/Provider'
import Footer from '../components/Footer'



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' className='scroll-smooth'>
			<body className={`${font_heading} ${font_text} ${font_accent} font-text selection:bg-ownPink-600`}>
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
