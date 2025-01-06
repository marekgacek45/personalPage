import { urlFor } from '@/sanity/lib/image'
import { Project } from '@/sanity/lib/interface'
import Image from 'next/image'
import Link from 'next/link'

import { YouTubeIcon, GitHubIcon } from '@/app/utils/icons'

import LinkBtn from '@/components/link-btn'

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className=' flex flex-col xl:flex-row justify-between gap-12 xl:gap-0'>
			{/* img and title */}
			<Link
				href={project.link}
				target='_blank'
				rel='norefferer nofollow'
				className='flex flex-col xl:flex-row justify-center items-center xl:w-[60%] gap-12'>
				<Image
					src={urlFor(project.thumbnail).url()}
					alt={`${project.title} thumbnail`}
					width={700}
					height={700}
					className='mx-auto aspect-[8/5] object-cover  xl:w-1/2'
					quality={50}
				/>
				<div className=' xl:w-1/2 text-center xl:text-left'>
					<h2 className='text-2xl font-heading font-medium line-clamp-2 '>{project.title}</h2>
					<p className='text-[1.4rem]  text-gray-500 leading-snug'>{project.description}</p>
				</div>
			</Link>
			{/* stacks */}
			<div className='flex gap-6 justify-center items-center'>
				{project.stack.map((stack, index) => (
					<Image
						key={`${stack.slug}-${index}`}
						src={urlFor(stack.image).url()}
						alt={`logo of ${stack.title}`}
						width={120}
						height={110}
						className='w-[35px] sm:w-[45px] xl:w-[35px]'
						quality={50}
					/>
				))}
			</div>
			<div className='flex gap-8 justify-center items-center 2xl:mr-20'>
				{/* github */}
				{project.github && (
					<Link href={project.github} className='group' aria-label='github' target='_blank' rel='noreferrer nofollow'>
						<GitHubIcon className='w-6 sm:w-10 xl:w-7 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
					</Link>
				)}
				{/* video */}
				{project.video && (
					<Link href={project.video} className='group' aria-label='youTube' target='_blank' rel='noreferrer nofollow'>
						<YouTubeIcon className='w-6 sm:w-10 xl:w-7 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
					</Link>
				)}
				{/* link */}
				<LinkBtn small href={project.link} attributes={{ target: '_blank', rel: 'nofollow noreferrer' }}>
					Zobacz
				</LinkBtn>
			</div>
		</div>
	)
}

export default ProjectCard
