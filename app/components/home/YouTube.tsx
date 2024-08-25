import React from 'react'
import Heading from '../base/Heading'
import Section from '../base/Section'
import Wrapper from '../base/Wrapper'
import Card from '../Card'
import Text from '../base/Text'
import LinkBtn from '../base/LinkBtn'
import ColorSpan from '../base/ColorSpan'
import Image from 'next/image'

const YouTube = () => {
	return (
		<Section>
			<Wrapper>
				<div className='flex flex-col  gap-6  justify-center text-left  xl:w-1/2 order-1 xl:order-none'>
					<Heading>Zobacz mnie w akcji </Heading>
					<Text>
						Zapraszam Cię na mój kanał na <ColorSpan>YouTube</ColorSpan>, gdzie dzielę się moimi codziennymi wyzwaniami
						jako <ColorSpan secondary>programista</ColorSpan>.
					</Text>
					<Text>
						Możesz zobaczyć, jak pracuję nad różnorodnymi <ColorSpan>projektami</ColorSpan>, od koncepcji po
						finalizację, oraz jak testuję nowe <ColorSpan secondary>technologie</ColorSpan> i{' '}
						<ColorSpan>narzędzia</ColorSpan>.
					</Text>
					<Text>
						Na kanale znajdziesz również praktyczne <ColorSpan secondary>wskazówki</ColorSpan> i{' '}
						<ColorSpan>porady</ColorSpan> oparte na zdobytym doświadczeniu.
					</Text>
					<LinkBtn
						href='https://youtube.com'
						attributes={{ target: '_blank', rel: 'noreferrer nofollow' }}
						className='self-start'>
						Sprawdź
					</LinkBtn>
				</div>

				<Card title='YouTube' className='xl:w-1/2'>
					<video
						autoPlay={true}
						loop={true}
						muted={true}
						playsInline={true}
						poster='/assets/hero-poster.webp'
						className='w-full object-cover min-h-[300px] lg:min-h-[590px] hidden md:block'>
						<source src='/assets/hero.webm' type='video/webm' />
						Twoja przeglądarka nie obsługuje odtwarzacza wideo.
					</video>

					<Image
						src='/assets/hero-poster.webp'
						alt='hero-poster'
						className='w-full object-cover min-h-[300px] lg:min-h-[590px] md:hidden'
						width={526}
						height={300}
					/>
				</Card>
			</Wrapper>
		</Section>
	)
}

export default YouTube
