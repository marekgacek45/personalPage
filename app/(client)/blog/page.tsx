import Text from '@/app/components/base/Text'
import { Post, Category } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Card from '@/app/components/Card'
import Marquee from 'react-fast-marquee'
import Heading from '@/app/components/base/Heading'
import LinkBtn from '@/app/components/base/LinkBtn'

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
		categories[]->{title, slug},
		
	  }`

	const posts = await client.fetch(query)
	return posts
}

export const revalidate = 60

export const metadata: Metadata = {
	title: 'Blog - Inspiracje i Wskazówki dla Web Developerów | Marek Gacek',
	description:
		'Odkryj najnowsze trendy w web development, praktyczne poradniki oraz nowoczesne technologie. Na blogu znajdziesz cenne wskazówki, które pomogą Ci rozwijać swoje umiejętności programistyczne.',
}

export default async function Blog() {
	const posts: Post[] = await getPosts()
	const categories: Category[] = await getCategories()

	return (
		<>
			<header className='mt-[76px] text-center py-12'>
				<h1 className='text-[2.6rem] md:text-7xl xl:text-8xl 2xl:text-9xl font-heading text-ownPurple-400 dark:text-ownYellow-400 uppercase leading-normal sm:leading-6 sm:tracking-wide mb-4'>
					Blog
				</h1>
				<Marquee className='bg-bgDark-200 dark:bg-bgLight-400 py-4 text-fontLight dark:text-fontDark'>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate reiciendis quo aliquid ipsa,
						rerum rem corrupti est perspiciatis dolorem.
					</Text>
				</Marquee>
			</header>
			<main className='px-6 sm:px-12 '>
				{/* categories */}
				<section className='max-w-screen-2xl mx-auto   pb-16'>
					<div className='flex justify-between items-center  '>
						<h2 className='font-heading text-xl'>Kategorie</h2>
						<div className='flex flex-wrap justify-center gap-6 '>
							{categories.map((category, index) => (
								<Link
									href={`/blog/category/${category.slug}`}
									key={index}
									className='px-4    py-2   text-sm   font-bold  hover:animate-shake duration-150 shadow-customSmall bg-ownPurple-400 hover:bg-ownPurple-600 text-fontLight'>
									{category.title}
								</Link>
							))}
						</div>
					</div>
				</section>

				<section className='max-w-screen-2xl mx-auto'>
					<div className='grid grid-cols-3'>
						{posts.map((post, index) => (
							<div className='border border-black dark:border-white p-10 pb-16 group space-y-10'>
								{/* categories */}
								<div className='flex justify-between'>
									<p className='font-accent text-2xl text-ownPurple-400'>21 sierpnia 2023</p>

									<div className='flex gap-4'>
										{post.categories.map(category => (
											<Link href='#' className='font-accent text-2xl font-bold'>{`#${category.title}`}</Link>
										))}
									</div>
								</div>
								{/* thumb */}
								<div className='overflow-hidden'>
									<Image
										src={urlFor(posts[0].thumbnail).url()}
										alt={posts[0].title}
										className='w-full group-hover:scale-105 duration-150 object-cover aspect-square'
										height={400}
										width={400}
									/>
								</div>
								{/* text */}
								<div className='space-y-3'>
									<h2 className='text-4xl   font-heading'>{post.title}</h2>
									<p className='text-lg line-clamp-5'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda voluptates impedit
										veritatis tempora, error non, sint earum, delectus placeat magni! Assumenda, amet. Quibusdam nemo
										corporis voluptatibus nesciunt facilis suscipit!
									</p>

									<div>
									
									</div>
								</div>
								<div className='mt-12'>

								<LinkBtn href='#'>Czytaj </LinkBtn>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	)
}
