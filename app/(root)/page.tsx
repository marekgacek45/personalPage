import { GET_STACKS } from '@/sanity/lib/queries'
import { Stack } from '@/sanity/lib/interface'

import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import StackMarquee from '@/components/home/stack-marquee'
import YouTube from '@/components/home/youtube'
import Contact from '@/components/home/contact'

export const revalidate = 60

const Home = async () => {
	const stacks: Stack[] = await GET_STACKS()

	return (
		<>
			<Hero />
			<About />
			<StackMarquee stacks={stacks} />
			<YouTube />
			<Contact />
		</>
	)
}
export default Home
