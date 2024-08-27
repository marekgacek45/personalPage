import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

import { Post } from '@/sanity/lib/interface'

import Card from './Card'

const PostCard = (props: { post: Post }) => {
	return (
		<Card
			href={`/blog/${props.post.slug}`}
			title={props.post.categories.map(category => `#${category.title}`).join(', ')}
			className='group'>
			{/* thumb */}
			<div className='overflow-hidden  shadow-md shadow-gray-600 dark:shadow-gray-700'>
				<Image
					src={urlFor(props.post.thumbnail).url()}
					alt={props.post.title}
					className='w-full object-cover h-[300px] group-hover:scale-105 duration-300 '
					height={300}
					width={380}
				/>
			</div>
			{/* text */}
			<div className='flex flex-col gap-4 p-8 bg-white  dark:bg-slate-950'>
				<p className='text-2xl font-accent  text-ownPurple-400 order-1 lg:order-none  group-hover:text-fontDark dark:group-hover:text-fontLight'>
					21 sierpnia 2023
				</p>
				<h2 className='text-3xl   font-heading line-clamp-3 group-hover:text-ownPurple-400'>{props.post.title}</h2>
			</div>
		</Card>
	)
}

export default PostCard
