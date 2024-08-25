// 'use client'
import type { Metadata } from 'next'

import HeroHeader from '../components/HeroHeader'
import About from '../components/home/About'

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
				<About/>
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
