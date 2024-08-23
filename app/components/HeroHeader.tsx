
import React from 'react'
import LinkBtn from './base/LinkBtn'

const HeroHeader = () => {
	return (
		<header className=' bg-center bg-cover md:bg-none section mt-[72px] h-[calc(100vh-72px)] relative'>
			<video
				autoplay='true'
				loop='true'
				muted='true'
				playsinline='true'
				poster='/assets/hero-poster.webp'
				className='hidden md:block absolute inset-0 w-full h-full object-cover'>
				<source src='/assets/hero.webm' type='video/webm' />
				Twoja przeglądarka nie obsługuje odtwarzacza wideo.
			</video>

			<div className='bg-black absolute top-0 right-0 left-0 bottom-0 opacity-50'></div>

			<div className='absolute inset-0 -mt-24 flex flex-col justify-center items-center text-center px-6 gap-6 md:gap-12 max-w-screen-xl mx-auto'>
				<h1 className='text-4xl xs:text-6xl md:text-8xl 2xl:text-9xl font-heading text-ownYellow-400 uppercase leading-6'>
					Zacznij od <br />
					dobrej strony
				</h1>
				<h2 className='md:text-xl 2xl:text-2xl font-action text-fontLight tracking-widest'>
					Wszystko czego potrzebujesz, aby zablysnac w sieci
				</h2>
				<div className='flex flex-col md:flex-row gap-6 md:gap-12 mt-4'>
					<LinkBtn href='/portfolio' >Portfolio</LinkBtn>
					<LinkBtn href='/blog' >Blog</LinkBtn>
				</div>
			</div>
		</header>
	)
}

export default HeroHeader
