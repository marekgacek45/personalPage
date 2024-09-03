'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import myPhoto from '@/public/assets/my-photo.webp'
import myPhotoPixel from '@/public/assets/my-photo--pixel.webp'

import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Heading from '@/app/components/Heading'
import Text from '@/app/components/Text'
import ColorSpan from '@/app/components/ColorSpan'
import Card from '../Card'

const About = () => {
	const [currentImage, setCurrentImage] = useState(myPhoto)


	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(prevImage => (prevImage === myPhoto ? myPhotoPixel : myPhoto))
			
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<Section>
			<Wrapper>
				{/* img */}
				<div className='flex justify-center items-center xl:w-1/2 '>
				<Card title="It's me!">
					<Image
						src={currentImage}
						alt='my photo'
						className='object-cover shadow-custom '
						width={550}
						height={550}
					/>
				</Card>
				</div>

				{/* text */}
				<div className='flex flex-col  gap-6  justify-center  xl:w-1/2   '>
					<Heading>
						Hi,
						<br /> My name is Marek
					</Heading>

					<Text>
						I&apos;am <ColorSpan>developer</ColorSpan>, specializing in creating websites.
					</Text>
					<Text>
					I battle across the entire web landscape wielding
						<ColorSpan secondary> JavaScript </ColorSpan>and
						<ColorSpan> PHP </ColorSpan>
						as my weapons.
					</Text>
					<Text>
					During my education, I completed many of courses, including
						<ColorSpan secondary> Opanuj JS-Przeprogramowani </ColorSpan>
						and
						<ColorSpan> wtf-Maciej Korsan</ColorSpan>.
					</Text>
					<Text>
					In addition, I earned a certificate 
						<ColorSpan secondary> FullStack Development </ColorSpan>from the <ColorSpan> University of Helsinki</ColorSpan>,
						the oldest and largest academic institution in <ColorSpan secondary>Finland</ColorSpan>.
					</Text>
				</div>
			</Wrapper>
		</Section>
	)
}

export default About
