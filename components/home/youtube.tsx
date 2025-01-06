import Image from 'next/image'
import ColorSpan from '@/components/color-span'
import LinkBtn from '@/components/link-btn'
import Card from '@/components/card'

const YouTube = () => {
	return (
		<section className='section'>
			<div className='wrapper'>
				<div className='flex flex-col  gap-6  justify-center text-left  xl:w-1/2 order-1 xl:order-none'>
					<h2 className='heading'>Zobacz mój kanał YouTube</h2>
					<p className='text'>
						Zapraszam do odwiedzenia mojego kanału na <ColorSpan>YouTube</ColorSpan>, gdzie dzielę się codziennymi
						wyzwaniami na ścieżce <ColorSpan secondary>programisty</ColorSpan>.
					</p>
					<p className='text'>
						Możesz zobaczyć, jak pracuję nad różnymi <ColorSpan>projektami</ColorSpan>, od pomysłu aż po realizację,
						oraz jak testuję nowe <ColorSpan secondary>technologie</ColorSpan> i <ColorSpan>narzędzia</ColorSpan>.
					</p>
					<p className='text'>
						Na kanale znajdziesz także praktyczne <ColorSpan secondary>porady</ColorSpan> i{' '}
						<ColorSpan>wskazówki</ColorSpan> oparte na moim doświadczeniu.
					</p>
					<LinkBtn
						href='https://youtube.com/@marekgacekdev'
						attributes={{ target: '_blank', rel: 'noreferrer nofollow' }}
						className='self-start'>
						Sprawdź
					</LinkBtn>
				</div>

				<Card title='YouTube' className='xl:w-1/2'>
					<Image
						src='/youtube.webp'
						alt='Marek Gacek - YouTube'
						className='w-full object-cover min-h-[300px] lg:min-h-[590px] '
						width={526}
						height={300}
						quality={60}
					/>
				</Card>
			</div>
		</section>
	)
}

export default YouTube
