'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import myPhoto from '@/public/assets/my-photo.webp'
import myPhotoPixel from '@/public/assets/my-photo--pixel.webp'
import Section from '@/app/components/base/Section'
import Wrapper from '@/app/components/base/Wrapper'
import Heading from '@/app/components/base/Heading'
import Text from '@/app/components/base/Text'
import ColorSpan from '@/app/components/base/ColorSpan'
import Card from '../Card'

const About = () => {
	const [currentImage, setCurrentImage] = useState(myPhoto)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(prevImage => (prevImage === myPhoto ? myPhotoPixel : myPhoto))
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	const text = ''
	const span = 'font-accent text-3xl sm:text-4xl font-semibold tracking-wide'
	const spanEven = 'text-ownPink-400 '
	const spanOdd = 'text-ownPurple-400 dark:text-ownYellow-400 '

	return (
		<Section>
			<Wrapper>
				{/* img */}
				<div className='flex justify-center items-center xl:w-1/2 '>
					<Image
						src={currentImage}
						alt='zdjęcie przedstawiające mój wizerunek'
						className='object-cover shadow-custom '
						loading='lazy'
						width={550}
						height={550}
					/>
				</div>
				
				{/* text */}
				<div className='flex flex-col  gap-6  justify-center  xl:w-1/2   '>
					<Heading>
						Cześć,
						<br /> mam na imię Marek
					</Heading>

					<Text>
						Jestem <ColorSpan>programistą</ColorSpan>, specjalizującym się w tworzeniu stron internetowych.
					</Text>
					<Text>
						Walczę na całej powierzchni webowego pola, wykorzystując
						<ColorSpan secondary> JavaScript </ColorSpan>oraz
						<ColorSpan> PHP </ColorSpan>
						jako swoje oręża.
					</Text>
					<Text>
						W trakcie mojej edukacji ukończyłem wiele kursów min.
						<ColorSpan secondary> Opanuj JS-Przeprogramowani </ColorSpan>
						czy
						<ColorSpan> wtf-Maciej Korsan</ColorSpan>.
					</Text>
					<Text>
						Oprócz tego zdobyłem certyfikat w kursie
						<ColorSpan secondary> FullStack </ColorSpan>prowadzony przez <ColorSpan> University of Helsinki</ColorSpan>,
						najstarszą i największą uczelnię naukową w <ColorSpan secondary>Finlandii</ColorSpan>.
					</Text>
				</div>
			</Wrapper>
		</Section>
	)
}

export default About
