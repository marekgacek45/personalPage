'use client'

import { useState, useEffect } from 'react'
import HeroHeader from './components/HeroHeader'

import myPhoto from '../public/assets/my-photo.webp'
import myPhotoPixel from '../public/assets/my-photo--pixel.webp'
import Image from 'next/image'

export default function Home() {
	const [currentImage, setCurrentImage] = useState(myPhoto)

  const handleMouseEnter = () => {
    setCurrentImage(myPhotoPixel);
  };

  const handleMouseLeave = () => {
    setCurrentImage(myPhoto);
  };

	return (
		<main>
			<HeroHeader />

			<section className='bg-bgLight-400 pt-24 pb-12'>
				<div className='flex flex-col h-full mx-auto px-6 sm:px-12 md:px-24 lg:px-12 2xl:px-24 xl:flex-row max-w-screen-2xl'>
					<div className='flex justify-center items-center xl:h-auto mt-6 mb-12 xl:w-1/2 lg:pr-10 2xl:pr-16'>
						<div className='flex flex-col relative'>
							<Image
								src={currentImage}
								alt='zdjęcie przedstawiające mój wizerunek'
								className='h-full object-cover box-shadow'
								loading='lazy'
								width='580'
								height='580'
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
							/>
						</div>
					</div>
					<div className='flex flex-col justify-center gap-6 text-center xl:text-left xl:w-1/2 lg:mr-3'>
						<h2 className='lg:text-left text-3xl xs:text-4xl md:text-5xl xl:text-6xl uppercase font-heading text-fontDark text-center'>Czesc, mam na imie Marek</h2>

						<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark'>
							Jestem <span className='font-heading text-ownPink-400'>WebDeveloperem</span>, który z pasją tworzy strony
							internetowe.
						</p>
						<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark'>
							Walczę na całej powierzchni programistycznego pola, wykorzystując
							<span className='font-heading text-ownPurple-400 text-'>PHP</span>i
							<span className='font-heading text-ownTurquise-400'>JavaScript</span>
							jako swoje oręża.
						</p>
						<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark'>
							Na swojej ścieżce programisty ukończyłem wiele kursów min.
							<span className='font-heading text-ownPink-400'>Opanuj JS-Przeprogramowani</span>
							czy
							<span className='font-heading text-ownPurple-400'>wtf-Maciej Korsan</span>.
						</p>
						<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark'>
							Oprócz tego jestem certyfikowanym specjalistą
							<span className='font-heading text-ownTurquise-400'>google</span>z zakresu marketingu.
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
