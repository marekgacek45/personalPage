import ColorSpan from '@/components/color-span'
import Card from '@/components/card'
import ImageFlipper from '@/components/image-flipper'

const About = () => {
	return (
		<section className='section'>
			<div className='wrapper'>
				{/* img */}
				<div className='flex justify-center items-center xl:w-1/2 '>
					<Card title='To ja!'>
						<ImageFlipper />
					</Card>
				</div>

				{/* text */}
				<div className='flex flex-col  gap-6  justify-center  xl:w-1/2   '>
					<h2 className='heading'>
						Cześć,
						<br /> Mam na imię Marek
					</h2>

					<p className='text'>
						Jestem <ColorSpan>programistą</ColorSpan>, specjalizującym się w tworzeniu stron oraz aplikacji
						internetowych.
					</p>
					<p className='text'>
						Walczę na całym cyfrowym polu bitwy, władając
						<ColorSpan secondary> JavaScriptem </ColorSpan>i<ColorSpan> PHP </ColorSpan>
						jako moją bronią.
					</p>
					<p className='text'>
						Podczas mojej edukacji ukończyłem wiele kursów, w tym
						<ColorSpan secondary> Opanuj JS-Przeprogramowani </ColorSpan>
						czy też
						<ColorSpan> NextJS-JSMastery</ColorSpan>.
					</p>
					<p className='text'>
						Dodatkowo zdobyłem certyfikat
						<ColorSpan secondary> FullStack Development</ColorSpan> od <ColorSpan>Uniwersytetu Helsińskiego</ColorSpan>,
						najstarszej i największej instytucji akademickiej w <ColorSpan secondary>Finlandii</ColorSpan>.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
