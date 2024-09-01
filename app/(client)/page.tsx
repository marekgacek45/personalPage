
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
			</main>
		</>
	)
}
