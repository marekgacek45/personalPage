import Header from '@/app/components/Header'
import { client } from '@/sanity/lib/client'
import React from 'react'
import { Project, Stack } from '@/sanity/lib/interface'
import { Image } from 'next-sanity/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import ProjectCard from '@/app/components/portfolio/ProjectCard'

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

const Portfolio = async () => {
	const projects: Project[] = await getProjects()
	const stacks: Stack[] = await getStacks()
	return (
		<>
			<Header
				title='Portfolio'
				marqueeText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate reiciendis quo aliquid ipsa, rerum rem corrupti est perspiciatis dolorem.'
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
										className='mx-auto aspect-[6/4] object-cover w-[50px]'
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

export default Portfolio

// <div className='flex justify-between'>
// 	<div className='flex  items-center gap-12 '>
// 		<Image
// 			src={urlFor(project.thumbnail).url()}
// 			alt='project'
// 			width={700}
// 			height={700}
// 			className='mx-auto aspect-[6/4] object-cover  max-w-[500px]'
// 		/>
// 		<div className=''>
// 			<h2 className='text-2xl font-heading font-medium line-clamp-2 '>{project.title}</h2>
// 			<p className='text-[1.4rem]  text-gray-500 leading-snug'>
// 				Page with CMS for my portfolio dasdasd asdasd Lorem ipsum dolor sit.
// 			</p>
// 		</div>
// 	</div>
// 	<div className='flex justify-end items-center gap-32 '>
// 		<div className='flex gap-4 justify-center items-center'>
// 			{project.stack.map((stack, index) => (
// 				<Link key={index} href={`/portfolio/${stack.slug.current}`}>
// 					<Image
// 						key={index}
// 						src={urlFor(stack.image).url()}
// 						alt='project'
// 						width={700}
// 						height={700}
// 						className='mx-auto aspect-square w-[40px]'
// 					/>
// 				</Link>
// 			))}
// 		</div>
// 		<div className='flex gap-4 justify-center items-center mr-20'>
// 			<Link href={project.github}>
// 				<GitHubIcon className='w-6 sm:w-10 xl:w-10 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
// 			</Link>
// 			{project.video && (
// 				<Link href={project.video}>
// 					<YouTubeIcon className='w-6 sm:w-10 xl:w-10 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
// 				</Link>
// 			)}

// 			<Link href={project.link}>link</Link>
// 		</div>
// 	</div>
// </div>
// ))}
