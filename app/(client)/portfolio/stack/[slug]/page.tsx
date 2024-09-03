import { Stack, Project } from '@/sanity/lib/interface'

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Image } from 'next-sanity/image'
import Link from 'next/link'

import type { Metadata } from 'next'

import Header from '@/app/components/Header'
import ColorSpan from '@/app/components/ColorSpan'
import ProjectCard from '@/app/components/portfolio/ProjectCard'
import FilterList from '@/app/components/FilterList'
import LinkBtn from '@/app/components/LinkBtn'

async function getProjectByStack(stack: string) {
	const query = `*[_type == "project" && references(*[_type == "stack" && slug.current == "${stack}"]._id)] | order(_createdAt desc) {
   title,
        thumbnail,
		description,
        github,
		video,
        link,
        stack[]->{title, image,slug},
  
}`

	const posts = await client.fetch(query)
	return posts
}

const getStacks = async () => {
	const query = `
     *[_type == "stack" && _id in *[_type == "project"].stack[]._ref] {
  title,
  "slug": slug.current,
  image,
  "projectCount": count(*[_type == "project" && references(^._id)])
} | order(projectCount desc)`
	const data = await client.fetch(query)
	return data
}

export const revalidate = 60

export const metadata: Metadata = {
	title: 'Portfolio - Marek Gacek - Full Stack Developer',
	description:
		'Explore the portfolio of Marek Gacek, a Full Stack Developer from Poland, showcasing innovative web and software projects. Discover expertise in front-end and back-end development.',
}

const ProjectsByStack = async (props: { params: { slug: string } }) => {
	const stacks: Stack[] = await getStacks()
	const projects: Project[] = await getProjectByStack(props.params.slug)


	return (
		<>
			<Header
				title='Portfolio'
				marqueeText={
					<>
						build showcase of <ColorSpan>{props.params.slug}</ColorSpan>
					</>
				}
			/>
			<main className='px-6 sm:px-7 pb-20'>
				{/* stacks */}

				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Stacks'>
						<LinkBtn className='self-center mr-5' small href='/portfolio'>
							All
						</LinkBtn>
						{stacks.map((stack, index) => (
							<Link key={index} href={`/portfolio/stack/${stack.slug}`}>
								<Image
									src={urlFor(stack.image).url()}
									alt={stack.title}
									width={120}
									height={120}
									className={`w-[40px]   ${props.params.slug === stack.slug ? 'scale-125' : 'hover:scale-105 duration-150'} `}
								/>
							</Link>
						))}
					</FilterList>
				</section>
				{/* projects */}
				<section className=' mx-auto '>
					<div
						className='flex flex-col gap-24
					'>
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
						<Link href='https://github.com/marekgacek45' target='_blank' rel='norefferer nofollow' className='text-center'>
							<ColorSpan >see more on my github</ColorSpan>
						</Link>
					</div>
				</section>
			</main>
		</>
	)
}

export default ProjectsByStack
