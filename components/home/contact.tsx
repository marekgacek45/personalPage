import Link from 'next/link'
import ColorSpan from '@/components/color-span'

const Contact = () => {
	return (
		<section id='kontakt' className='section'>
			<div className='max-w-screen-2xl mx-auto px-6 sm:px-12 text-center space-y-6'>
				<h2 className='heading'>Kontakt</h2>

				<p className='text pb-4'>Śmiało skontaktuj się ze mną!</p>
				<Link href='mailto:marekgacekdev@gmail.com'>
					<ColorSpan>marekgacekdev@gmail.com</ColorSpan>
				</Link>
			</div>
		</section>
	)
}

export default Contact
