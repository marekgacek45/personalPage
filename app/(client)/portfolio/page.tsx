import { Project, Stack } from '@/sanity/lib/interface'

import { Image } from 'next-sanity/image'
import { urlFor } from '@/sanity/lib/image'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

import type { Metadata } from 'next'

import Header from '@/app/components/Header'
import ProjectCard from '@/app/components/portfolio/ProjectCard'
import FilterList from '@/app/components/FilterList'

const getProjects = async () => {
	const query = `
    *[_type == "project" ]{
        title,
        thumbnail,
		video,
        link,
        github,
        stack[]->{title, image,slug},
      }`
	const data = await client.fetch(query)
	return data
}

const getStacks = async () => {
	const query = `
    *[_type == "stack" ]{
        title,
        "slug": slug.current,
        image,
		
      }`
	const data = await client.fetch(query)
	return data
}

export const revalidate = 60

export const metadata: Metadata = {
	title: 'Portfolio - Marek Gacek - Full Stack Developer',
	description:
		'Explore the portfolio of Marek Gacek, a Full Stack Developer from Poland, showcasing innovative web and software projects. Discover expertise in front-end and back-end development.',
}

const Portfolio = async () => {
	const projects: Project[] = await getProjects()
	const stacks: Stack[] = await getStacks()
	return (
		<>
			<Header title='Portfolio' marqueeText='build showcase' />
			<main className='px-6 sm:px-7 pb-20'>
				{/* stacks */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Stacks'>
						{stacks.map((stack, index) => (
							<Link key={index} href={`/portfolio/stack/${stack.slug}`}>
								<Image
									src={urlFor(stack.image).url()}
									alt={stack.title}
									width={120}
									height={120}
									className='w-[40px]  hover:scale-105 duration-150 '
								/>
							</Link>
						))}
					</FilterList>
				</section>
				{/* projects */}
				<section className=' mx-auto '>
					<div className='flex flex-col gap-24'>
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</div>
				</section>
			</main>
		</>
	)
}

export default Portfolio

