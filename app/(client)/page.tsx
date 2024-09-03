
import type { Metadata } from 'next'

import { client } from '@/sanity/lib/client'
import { Stack } from '@/sanity/lib/interface'

import HeroHeader from '@/app/components/home/HeroHeader'
import About from '@/app/components/home/About'
import StackMarquee from '@/app/components/home/StackMarquee'
import YouTube from '@/app/components/home/YouTube'


async function getStacks() {
		const query = `
	    *[_type == "stack"]{
	    title,
	    image,
	  }
	    `
		const stacks = await client.fetch(query)
		return stacks
	}
	
	export const revalidate = 60

	
export const metadata: Metadata = {
	
	title: 'Marek Gacek - Web Development & Programming',
	description:
		"Explore Marek Gacek's website, a skilled Full Stack Developer from Poland, specializing in crafting high-performance web and software solutions. Discover expertise in both front-end and back-end development, delivering innovative and scalable digital experiences",
	openGraph: {
		title: 'Developer Insights Blog | Marek Gacek - Web Development & Programming',
		description:
			"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
		type: 'website',
		locale: 'en_US',
		url: 'https://marekgacekdev.pl',
		siteName: 'Marek Gacek - FullStack Developer',
	},
}

export default async function Home() {
	const stacks: Stack[] = await getStacks()

	return (
		<>
			<HeroHeader />
			<main>
				<About/>
				<StackMarquee stacks={stacks}/>
				<YouTube/>
			</main>
		</>
	)
}
