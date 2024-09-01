import { urlFor } from '@/sanity/lib/image'
import { Project } from '@/sanity/lib/interface'
import Image from 'next/image'
import React from 'react'

import { YouTubeIcon, GitHubIcon } from '@/app/utils/icons'
import Link from 'next/link'

const ProjectCard = (props:{project:Project}) => {
  return (
    <div className='border border-black flex flex-col lg:flex-row justify-between gap-12 lg:gap-0'>
    {/* img and title */}
    <div className='flex flex-col lg:flex-row lg:w-[60%] border border-red-700'>
        <Image
            src={urlFor(props.project.thumbnail).url()}
            alt='project'
            width={700}
            height={700}
            className='mx-auto aspect-[6/4] object-cover  lg:w-1/2'
        />
        <div className=' w-1/2'>
            <h2 className='text-2xl font-heading font-medium line-clamp-2 '>{props.project.title}</h2>
            <p className='text-[1.4rem]  text-gray-500 leading-snug'>
                Page with CMS for my portfolio dasdasd asdasd Lorem ipsum dolor sit.
            </p>
        </div>
    </div>
    {/* stacks */}
    <div className='flex gap-4 justify-center items-center'>
    {props.project.stack.map((stack, index) => (
             
                    <Image
                        key={index}
                        src={urlFor(stack.image).url()}
                        alt='project'
                        width={700}
                        height={700}
                        className='mx-auto aspect-square w-[40px]'
                    />
                
            ))}
        </div>
        <div className='flex gap-4 justify-center items-center 2xl:mr-20'>
            <Link href={props.project.github}>
                <GitHubIcon className='w-6 sm:w-10 xl:w-10 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
             </Link>
             {props.project.video && (
                <Link href={props.project.video}>
                    <YouTubeIcon className='w-6 sm:w-10 xl:w-10 fill-black dark:fill-white group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150' />
                </Link>
            )}

            <Link href={props.project.link}>link</Link>
        </div>
</div>
  )
}

export default ProjectCard