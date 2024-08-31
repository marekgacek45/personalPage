import React from 'react'
import Image from 'next/image'

import LinkBtn from '@/app/components/LinkBtn'

const HeroHeader = () => {
	return (
		<header className=' relative  h-[85vh]  sm:h-[calc(100vh-76px)] mt-[76px]   '>
			<video
				autoPlay={true}
				loop={true}
				muted={true}
				playsInline={true}
				poster='/assets/hero-poster.webp'
				className=' absolute inset-0 w-full h-full object-cover hidden md:block'>
				<source src='/assets/hero.webm' type='video/webm' />
				Twoja przeglądarka nie obsługuje odtwarzacza wideo.
			</video>

			<Image
				src='/assets/hero--mobile.webp'
				alt='hero-poster'
				className='absolute inset-0 w-full h-full object-cover md:hidden'
				width={526}
				height={300}
				loading={'eager'}
			/>

			<div className='bg-black absolute top-0 right-0 left-0 bottom-0 opacity-50'></div>

			<div className='absolute inset-0 max-w-screen-lg flex flex-col justify-center items-center text-center  gap-6 md:gap-12  px-6 sm:px-0  mx-auto '>
				<h1 className='text-[2.6rem] md:text-7xl xl:text-8xl 2xl:text-9xl font-heading text-ownYellow-400 uppercase leading-normal sm:leading-6 sm:tracking-wide '>
					Odkryj Moc Nowoczesnych Rozwiązań
				</h1>
				<h2 className='md:text-2xl 2xl:text-3xl  text-fontLight tracking-widest'>
					Wznieś swoją stronę na wyższy poziom
				</h2>
				<div className='flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-12  lg:mt-0 2xl:mt-16'>
					<LinkBtn href='/portfolio'>Portfolio</LinkBtn>
					<LinkBtn href='/blog' variant='yellow'>
						Blog
					</LinkBtn>
				</div>
			</div>
		</header>
	)
}

export default HeroHeader
