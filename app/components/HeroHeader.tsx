import React from 'react'
import LinkBtn from './base/LinkBtn'

const HeroHeader = () => {
	return (
		<header className='top-[76px] bg-center bg-cover md:bg-none section  h-[calc(100vh-76px)] relative'>
			<video
				autoPlay={true}
				loop={true}
				muted={true}
				playsInline={true}
				poster='/assets/hero-poster.webp'
				className='block absolute inset-0 w-full h-full object-cover'>
				<source src='/assets/hero.webm' type='video/webm' />
				Twoja przeglądarka nie obsługuje odtwarzacza wideo.
			</video>



			<div className='bg-black absolute top-0 right-0 left-0 bottom-0 opacity-50'></div>

			<div className='absolute inset-0  flex flex-col justify-center items-center text-center px- gap-6 md:gap-12 max-w-screen-lg mx-auto '>
				<h1 className='text-[2.4rem] md:text-7xl 2xl:text-9xl font-heading text-ownYellow-400 uppercase leading-normal sm:leading-6 sm:tracking-wide '>
				Odkryj Moc Nowoczesnych Rozwiązań
				</h1>
				<h2 className='md:text-2xl 2xl:text-3xl  text-fontLight tracking-widest'>
				Wnieś swoją stronę na wyższy poziom
				</h2>
				<div className='flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-12  lg:mt-0 2xl:mt-16'>
					<LinkBtn href='/portfolio' >Portfolio</LinkBtn>
					<LinkBtn href='/blog' variant="yellow">Blog</LinkBtn>
				</div>
			</div>
		</header>
	)
}

export default HeroHeader
