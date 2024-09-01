
import type { Metadata } from 'next'

import HeroHeader from '@/app/components/home/HeroHeader'
import About from '@/app/components/home/About'
import StackMarquee from '@/app/components/home/StackMarquee'
import YouTube from '@/app/components/home/YouTube'

export const metadata: Metadata = {
	title: 'Marek Gacek - Full Stack Developer',
	description: "Explore Marek Gacek's website, a skilled Full Stack Developer from Poland, specializing in crafting high-performance web and software solutions. Discover expertise in both front-end and back-end development, delivering innovative and scalable digital experiences"
}

export default function Home() {


	return (
		<>
			<HeroHeader />
			<main>
				<About/>
				<StackMarquee/>
				<YouTube/>
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
				{/* contact */}
				{/* <section id='kontakt'>kontakt</section> */}
			</main>
		</>
	)
}
