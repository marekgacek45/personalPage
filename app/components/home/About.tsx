'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import myPhoto from '@/public/assets/my-photo.webp'
import myPhotoPixel from '@/public/assets/my-photo--pixel.webp'
import Section from '@/app/components/base/Section'
import Wrapper from '@/app/components/base/Wrapper'

const About = () => {
	const [currentImage, setCurrentImage] = useState(myPhoto)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(prevImage => (prevImage === myPhoto ? myPhotoPixel : myPhoto))
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	const text = 'text-xl sm:text-2xl leading-normal'
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
				<div className='flex flex-col  gap-6 text-center xl:text-left  xl:w-1/2  text-fontDark dark:text-fontLight '>
					<h2 className='text-4xl  sm:text-6xl uppercase font-heading '>
						Cześć,
						<br /> mam na imię Marek
					</h2>

					<p className={text}>
						Jestem <span className={`${span} ${spanEven} `}>programistą</span>, specjalizującym się w tworzeniu stron
						internetowych.
					</p>
					<p className={text}>
						Walczę na całej powierzchni webowego pola, wykorzystując
						<span className={`${span} ${spanOdd} `}> JavaScript </span>oraz
						<span className={`${span} ${spanEven} `}> PHP </span>
						jako swoje oręża.
					</p>
					<p className={text}>
						W trakcie mojej edukacji ukończyłem wiele kursów min.
						<span className={`${span} ${spanOdd} `}> Opanuj JS-Przeprogramowani </span>
						czy
						<span className={`${span} ${spanEven} `}> wtf-Maciej Korsan</span>.
					</p>
					<p className={text}>
						Oprócz tego zdobyłem certyfikat w kursie
						<span className={`${span} ${spanOdd} `}> FullStack </span>prowadzony przez{' '}
						<span className={`${span} ${spanEven} `}> University of Helsinki</span>, najstarszą i największą uczelnię
						naukową w <span className={`${span} text-blue-600`}>Finlandii</span>.
					</p>
				</div>
			</Wrapper>
		</Section>
	)
}

export default About
