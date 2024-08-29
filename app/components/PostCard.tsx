import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

import { Post } from '@/sanity/lib/interface'
import Link from 'next/link'

const PostCard = (props: { post: Post }) => {
	return (
		<Link href={`blog/${props.post.slug}`} className='space-y-4'>
			<Image
				src={urlFor(props.post.thumbnail).url()}
				alt={props.post.title}
				className='w-full object-cover aspect-[3/2]  '
				height={398}
				width={380}
				loading='lazy'
			/>
			<div>
				<h2 className='text-2xl font-heading font-medium line-clamp-2 '>{props.post.title}</h2>
				<p className='text-[1.4rem]  text-gray-500 leading-snug line-clamp-4 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente consectetur pariatur tenetur,
					mollitia rerum iste enim culpa illum voluptatem nihil aliquam cum. Qui dolor corrupti ea eum possimus eos
					expedita amet blanditiis laborum.
				</p>
			</div>
		</Link>
	)
}

export default PostCard
