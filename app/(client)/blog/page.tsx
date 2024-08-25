import Text from '@/app/components/base/Text'
import { Post, Category } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Wrapper from '@/app/components/base/Wrapper'
import Section from '@/app/components/base/Section'
import Card from '@/app/components/Card'
import LinkBtn from '@/app/components/base/LinkBtn'
import ColorSpan from '@/app/components/base/ColorSpan'

async function getCategories() {
	const query = `*[_type == "category"]{
		title,
		 "slug":slug.current,
		
	  }`

	const categories = await client.fetch(query)
	return categories
}
async function getPosts() {
	const query = `*[_type == "post"]{
		title,
		 "slug":slug.current,
		thumbnail,
		category[]->{title, slug},
		
	  }`

	const posts = await client.fetch(query)
	return posts
}

export const revalidate = 60

export default async function Blog() {
	const posts: Post[] = await getPosts()
	const categories: Category[] = await getCategories()



console.log(posts[0])
	return (
		<>
			<header className='mt-[76px] text-center pt-12'>
				<h1 className='text-4xl  sm:text-6xl uppercase font-heading mb-1'>Blog</h1>
				<Text>Lorem ipsum dolor sit amet consectetur.</Text>
			</header>
			<main className='px-6 sm:px-12 '>
				{/* categories */}
				<section className='max-w-screen-2xl mx-auto '>
					<div className='flex flex-wrap justify-center gap-6 mt-8'>
						{categories.map((category, index) => (
							<Link
								href={`/blog/category/${category.slug}`}
								key={index}
								className='px-6    py-2  text-base   font-bold  hover:animate-shake duration-150 shadow-customSmall bg-ownPurple-400 hover:bg-ownPurple-600 text-fontLight'>
								{category.title}
							</Link>
						))}
					</div>
				</section>
				<section className='py-12 pb-20'>
					{posts.length > 0 && (
						

						<div className='max-w-screen-lg mx-auto'>



							<Card  title={posts[0].category.map((category) => category.title).join(', ')}>
								<Link href='#' className='w-full flex flex-col justify-start items-start gap-3 group cursor-pointer'>
									<div className='w-full max-h-[375px] overflow-hidden  '>
										<Image
											src={urlFor(posts[0].thumbnail).url()}
											alt={posts[0].title}
											className='w-full group-hover:scale-105 duration-150 object-cover'
											width={500}
											height={500}
										/>
									</div>
									<div className='p-6 space-y-4'>

									<span className='font-accent text-xl font-semibold tracking-wide text-ownPurple-400'>21 sierpnia 2023</span>
									<h2 className='text-3xl sm:text-4xl uppercase font-heading group-hover:text-ownPink-600 duration-150'>
										{posts[0].title}
									</h2>
									</div>
								</Link>
							</Card>
						</div>
					)}

					{posts.length > 1 && (
						
						<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-20 max-w-screen-2xl mx-auto'>
							{posts.slice(1).map((post, index) => (
								<Card key={index}  title={post.category.map((category) => category.title).join(', ')}>
								
									
									<Link href={`/blog/${post.slug}`} className='group'>
										<div className='overflow-hidden'>
											<Image
												src={urlFor(post.thumbnail).url()}
												alt={post.title}
												className='w-full object-cover group-hover:scale-105 duration-150'
												width={700}
												height={700}
											/>
										</div>
										<div>
										<div className='p-6 space-y-4'>
										<span className='font-accent text-xl font-semibold tracking-wide text-ownPurple-400'>21 sierpnia 2023</span>
											<h2 className='text-2xl font-heading group-hover:text-ownPink-600 duration-150'>{post.title}</h2>
										</div>
										</div>
									</Link>
								</Card>
							))}
						</div>
					)}
				</section>
			</main>
		</>
	)
}
