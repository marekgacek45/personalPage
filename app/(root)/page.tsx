import { GET_STACKS } from '@/sanity/lib/queries'
import { Stack } from '@/sanity/lib/interface'

import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import StackMarquee from '@/components/home/stack-marquee'
import YouTube from '@/components/home/youtube'
import Contact from '@/components/home/contact'

export const revalidate = 60

// export const metadata: Metadata = {
// 	metadataBase: new URL('https://marekgacekdev.pl'),
// 	title: 'Marek Gacek - Web Development & Programming',
// 	description:
// 		"Explore Marek Gacek's website, a skilled Full Stack Developer from Poland, specializing in crafting high-performance web and software solutions. Discover expertise in both front-end and back-end development, delivering innovative and scalable digital experiences",
// 	openGraph: {
// 		title: 'Developer Insights Blog | Marek Gacek - Web Development & Programming',
// 		description:
// 			"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
// 		type: 'website',
// 		locale: 'en_US',
// 		url: 'https://marekgacekdev.pl',
// 		siteName: 'Marek Gacek - FullStack Developer',
// 	},
// }

const Home = async () => {
	const stacks: Stack[] = await GET_STACKS()

	return (
		<>
			<Hero />
			<About />
			<StackMarquee stacks={stacks} />
			<YouTube />
			<Contact/>
			{/* <HeroHeader />
			<main>
				<About />
				<StackMarquee stacks={stacks} />
				<YouTube />
				<Contact/>
			</main> */}
		</>
	)
}
export default Home
