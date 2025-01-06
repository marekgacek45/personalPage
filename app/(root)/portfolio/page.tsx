import { Image } from 'next-sanity/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/generateMetadata'

import { GET_ALL_PROJECTS, GET_STACKS_WITH_PROJECTS } from '@/sanity/lib/queries'
import { Project, Stack } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

import Hero from '@/components/hero'
import FilterList from '@/components/filter-list'
import ProjectCard from '@/components/project-card'
import ColorSpan from '@/components/color-span'

export const revalidate = 60

export const metadata: Metadata = generateMetadata({
	title: 'Portfolio',
	description:
		'Zapraszam do mojego portfolio – jestem Marek Gacek, programista Full Stack z Polski. Prezentuję tu innowacyjne projekty webowe i aplikacje, które łączą moją wiedzę z zakresu front-endu i back-endu.',
	path: '/portfolio',
})

const Portfolio = async () => {
	const stacks: Stack[] = await GET_STACKS_WITH_PROJECTS()
	const projects: Project[] = await GET_ALL_PROJECTS()
	return (
		<>
			<Hero title='Portfolio' marqueeText='sprawdź moje projekty' />
			<div className='px-6 sm:px-7 pb-20'>
				{/* stacks */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Technologia'>
						{stacks.map((stack, index) => (
							<Link key={`${stack.slug}-${index}`} href={`/portfolio/stack/${stack.slug}`}>
								<Image
									src={urlFor(stack.image).url()}
									alt={stack.title}
									width={120}
									height={120}
									className='w-[40px]  hover:scale-105 duration-150 '
									quality={50}
								/>
							</Link>
						))}
					</FilterList>
				</section>
				{/* projects */}
				<section className=' mx-auto '>
					<div className='flex flex-col gap-24 xl:gap-16'>
						{projects.map((project, index) => (
							<ProjectCard key={`${project.title}-${index}`} project={project} />
						))}
						<Link
							href='https://github.com/marekgacek45'
							target='_blank'
							rel='norefferer nofollow'
							className='text-center'>
							<ColorSpan>zobacz więcej na moim githubie</ColorSpan>
						</Link>
					</div>
				</section>
			</div>
		</>
	)
}

export default Portfolio
