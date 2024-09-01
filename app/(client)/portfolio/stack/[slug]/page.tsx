import ColorSpan from '@/app/components/ColorSpan'
import Header from '@/app/components/Header'
import ProjectCard from '@/app/components/portfolio/ProjectCard'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Stack,Project } from '@/sanity/lib/interface'
import { Image } from 'next-sanity/image'
import Link from 'next/link'
import React from 'react'

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

async function getProjectByStack(stack: string) {
	const query = `*[_type == "project" && references(*[_type == "stack" && slug.current == "${stack}"]._id)] | order(publishedAt desc) {
   title,
        thumbnail,
		video,
        link,
        github,
        stack[]->{title, image,slug},
  
}`

	const posts = await client.fetch(query)
	return posts
}

export const revalidate = 60

const ProjectsByStack =async (props: { params: { slug: string } }) => {
    const stacks: Stack[] = await getStacks()
    const projects: Project[] = await getProjectByStack(props.params.slug)
	return (
		<>
			<Header
				title='Portfolio'
				marqueeText={
					<>
						wpisy z kategorii <ColorSpan>{props.params.slug}</ColorSpan>
					</>
				}
			/>
            	<main className='px-6 sm:px-7 pb-20'>
				{/* stacks */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<div className='flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center  items-center  '>
						<h2 className='text-xl font-heading '>Stack:</h2>
						<div className='flex flex-wrap justify-center gap-6 '>
							{stacks.map((stack, index) => (
								<Link key={index} href={`/portfolio/stack/${stack.slug}`}>
									<Image
										src={urlFor(stack.image).url()}
										alt={stack.title}
										width={700}
										height={700}
										className={`mx-auto w-[50px] ${props.params.slug === stack.slug ? 'w-[80px]' : ''} `}
									/>
								</Link>
							))}
						</div>
					</div>
				</section>
                {/* projects */}
				<section className=' mx-auto '>
					<div
						className='flex flex-col gap-24
					'>
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</div>
				</section>
                </main>
		</>
	)
}

export default ProjectsByStack
