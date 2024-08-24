import { Post } from '@/app/utils/Interface'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { get } from 'http'
import Image from 'next/image'
import React from 'react'

async function getPosts() {
	const query = `*[_type == "post"]{
		title,
		 "slug":slug.current,
		thumbnail,
		excerpt
	  }`

	const data = await client.fetch(query)
	return data
}

export const revalidate = 60

export default async function Blog() {
	const posts: Post[] = await getPosts()
	console.log(posts)
	return (
		<>
			<main className='mt-[72px]'>
				{posts.map((post, index) => (
					<div key={index} className='mt-12'>
						<h2 className='text-3xl font-heading'>{post.title}</h2>
						<Image src={urlFor(post.thumbnail).url() } alt={post.title} className='w-24 rounded-lg ' width={100} height={100} />
						<p className='mt-4 text-xl'>{post.excerpt}</p>
					</div>
				))}
			</main>
		</>
	)
}
