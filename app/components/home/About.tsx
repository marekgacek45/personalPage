'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import myPhoto from '@/public/assets/my-photo.webp'
import myPhotoPixel from '@/public/assets/my-photo--pixel.webp'

import myPhotoMobile from '@/public/assets/my-photo--mobile.webp'
import myPhotoPixelMobile from '@/public/assets/my-photo-pixel--mobile.webp'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Heading from '@/app/components/Heading'
import Text from '@/app/components/Text'
import ColorSpan from '@/app/components/ColorSpan'

const About = () => {
	const [currentImage, setCurrentImage] = useState(myPhoto)
	const [currentImageMobile, setCurrentImageMobile] = useState(myPhotoMobile)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(prevImage => (prevImage === myPhoto ? myPhotoPixel : myPhoto))
			setCurrentImageMobile(prevImage => (prevImage === myPhotoMobile ? myPhotoPixelMobile : myPhoto))
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<Section>
			<Wrapper>
				{/* img */}
				<div className='flex justify-center items-center xl:w-1/2 '>
					<Image
						src={currentImage}
						alt='zdjęcie przedstawiające mój wizerunek'
						className='object-cover shadow-custom hidden md:block'
						loading='lazy'
						width={550}
						height={550}
					/>
					<Image
						src={currentImageMobile}
						alt='zdjęcie przedstawiające mój wizerunek'
						className='object-cover shadow-custom md:hidden'
						loading='lazy'
						width={350}
						height={350}
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
