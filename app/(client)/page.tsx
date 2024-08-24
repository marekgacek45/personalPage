// 'use client'
import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import HeroHeader from '../components/HeroHeader'

import myPhoto from '../../public/assets/my-photo.webp'
import myPhotoPixel from '../../public/assets/my-photo--pixel.webp'
import Image from 'next/image'
import LinkBtn from '../components/base/LinkBtn'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Marek Gacek - Nowoczesne Strony Internetowe',
	description: 'Przestań tracić czas na sztampowe strony. Wybierz nowoczesne rozwiązania, które sprawią, że Twoja strona będzie wyjątkowa. Przekonaj się sam!',
}

export default function Home() {


	return (
		<>
			<HeroHeader />
			<main>
				{/* about */}
				{/* <section className='bg-bgLight-400 dark:bg-bgDark-400  pt-24 pb-12'>
					<div className='flex flex-col h-full mx-auto px-6 sm:px-12 md:px-24 lg:px-12 2xl:px-24 xl:flex-row max-w-screen-2xl'>
						<div className='flex justify-center items-center xl:h-auto mt-6 mb-12 xl:w-1/2 lg:pr-10 2xl:pr-16'>
							<div className='flex flex-col relative'>
								<Image
									src={myPhoto}
									alt='zdjęcie przedstawiające mój wizerunek'
									className='h-full object-cover shadow-custom '
									loading='lazy'
									width='580'
									height='580'
									// onMouseEnter={handleMouseEnter}
									// onMouseLeave={handleMouseLeave}
								/>
							</div>
						</div>
						<div className='flex flex-col justify-center gap-6 text-center xl:text-left xl:w-1/2 lg:mr-3'>
							<h2 className='lg:text-left text-3xl xs:text-4xl md:text-5xl xl:text-6xl uppercase font-heading text-fontDark dark:text-fontLight text-center'>
								Czesc, mam na imie Marek
							</h2>

							<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark dark:text-fontLight'>
								Jestem <span className='font-heading text-ownPink-400'>WebDeveloperem</span>, który z pasją tworzy
								strony internetowe.
							</p>
							<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark dark:text-fontLight'>
								Walczę na całej powierzchni programistycznego pola, wykorzystując
								<span className='font-heading text-ownPurple-400 text-'>PHP</span>i
								<span className='font-heading text-ownTurquise-400'>JavaScript</span>
								jako swoje oręża.
							</p>
							<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark dark:text-fontLight'>
								Na swojej ścieżce programisty ukończyłem wiele kursów min.
								<span className='font-heading text-ownPink-400'>Opanuj JS-Przeprogramowani</span>
								czy
								<span className='font-heading text-ownPurple-400'>wtf-Maciej Korsan</span>.
							</p>
							<p className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark dark:text-fontLight'>
								Oprócz tego jestem certyfikowanym specjalistą
								<span className='font-heading text-ownTurquise-400'>google</span>z zakresu marketingu.
							</p>
						</div>
					</div>
				</section> */}
				{/* blog */}
				{/* <section className='bg-bgLight-400 dark:bg-bgDark-400 pt-12 pb-24 lg:py-24'>
					<div className='max-w-screen-2xl mx-auto text-center px-4 sm:px-12 md:px-24 lg:px-12 2xl:px-24'>
						<h2 className='lg:text-left text-3xl xs:text-4xl md:text-5xl xl:text-6xl uppercase font-heading text-fontDark dark:text-fontLight text-center'>
							Zanurz sie w lekturze i odkryj ciekawostki z cyber swiata
						</h2>
					</div>
					<div className='flex flex-col justify-center items-center gap-12 md:gap-16 px-4 sm:px-0 mt-12'>
						<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
							<Link href='/' className='group'>
								<div className='flex flex-col justify-between items-center h-full px-10 lg:px-16 xl:px-4 2xl:px-12 py-8 border border-y-2 border-fontDark bg-no-repeat bg-cover transition-all duration-100 group-hover:border-dashed group-hover:bg-gray-600 group-hover:bg-blend-multiply'>
									<div className='h-32 2xl:h-56 w-full'>
										<Image src='' alt='altText' className='h-full w-full object-cover group-hover:hidden' />
									</div>
									<h2 className=' mt-10 mb-2 text-2xl  md:text-3xl xl:text-4xl text-center font-heading uppercase group-hover:text-fontLight'>
										fasfasfsafasf
									</h2>
								</div>
							</Link>
						</div>

						<LinkBtn href='/blog'>Zobacz wszystkie artykuły</LinkBtn>
					</div>
				</section> */}
				{/* youTube */}
				{/* <section className=' grid gap-24 lg:gap-0 lg:grid-cols-2 px-6 xl:px-12 py-16 lg:py-24 '>
					<div className='flex flex-col justify-center items-center gap-12 lg:mr-12 xl:mx-24 2xl:mx-32 '>
						<h2 className='lg:text-left text-3xl xs:text-4xl md:text-5xl xl:text-6xl uppercase font-heading text-fontDark dark:text-fontLight text-center'>
							Zobacz mnie w akcji na YouTube!
						</h2>
						<h3 className='text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontDark'>
							Zapraszam Cię na mój kanał na YouTube, gdzie możesz zobaczyć jak pracuję nad różnymi projektami, testuję
							nowe technologie i narzędzia, oraz jak dzielę się swoimi spostrzeżeniami i doświadczeniami.
						</h3>
						<LinkBtn href='/'>Zobacz</LinkBtn>
					</div>

					<div>
						<div className='shadow-custom '>
							<div className='bg-bgDark-400 p-2'>
								<span className=' text-xl font-action font-bold  text-fontLight uppercase '>youtube</span>
							</div>
							<video
								autoPlay={true}
								loop={true}
								muted={true}
								playsInline={true}
								poster='/assets/hero-poster.webp'
								className='w-full object-cover lg:min-h-[590px] hidden md:block'>
								<source src='/assets/movies/yt--desktop.mp4' type='video/mp4' />
								Twoja przeglądarka nie obsługuje odtwarzacza wideo.
							</video>

						
						</div>
					</div>
				</section> */}
				{/* contact */}
				{/* <section id='kontakt'>kontakt</section> */}
			</main>
		</>
	)
}
