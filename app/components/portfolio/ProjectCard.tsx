import { urlFor } from '@/sanity/lib/image'
import { Project } from '@/sanity/lib/interface'
import Image from 'next/image'
import React from 'react'

import { YouTubeIcon, GitHubIcon } from '@/app/utils/icons'
import Link from 'next/link'
import LinkBtn from '../LinkBtn'

const ProjectCard = (props: { project: Project }) => {
	return (
		<div className=' flex flex-col lg:flex-row justify-between gap-12 lg:gap-0'>
			{/* img and title */}
			<div className='flex flex-col lg:flex-row justify-center items-center lg:w-[60%] gap-12'>
				<Image
					src={urlFor(props.project.thumbnail).url()}
					alt='project'
					width={700}
					height={700}
					className='mx-auto aspect-[6/4] object-cover  lg:w-1/2'
				/>
				<div className=' lg:w-1/2 text-center lg:text-left'>
					<h2 className='text-2xl font-heading font-medium line-clamp-2 '>{props.project.title}</h2>
					<p className='text-[1.4rem]  text-gray-500 leading-snug'>
					{props.project.description}
					</p>
				</div>
			</div>
			{/* stacks */}
			<div className='flex gap-6 justify-center items-center'>
				{props.project.stack.map((stack, index) => (
					<Image
						key={index}
						src={urlFor(stack.image).url()}
						alt={`logo of ${stack.title}`}
						width={120}
						height={110}
						className='w-[35px] sm:w-[40px]'
					/>
					
				))}
			</div>
			<div className='flex gap-6 justify-center items-center 2xl:mr-20'>
				<Link href={props.project.github} className='group'>
					<GitHubIcon className='w-6 sm:w-10 xl:w-8 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
				</Link>
				{props.project.video && (
					<Link href={props.project.video} className='group'>
						<YouTubeIcon className='w-6 sm:w-10 xl:w-8 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
					</Link>
				)}

				<LinkBtn small href={props.project.link} attributes={{ target: '_blank', rel: 'nofollow noreferrer' }}>
					View
				</LinkBtn>
			</div>
		</div>
	)
}

export default ProjectCard
