import Text from '@/app/components/base/Text'
import { Post, Category } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'

import type { Metadata } from 'next'

import Link from 'next/link'
import React from 'react'

import PostCard from '@/app/components/PostCard'
import Header from '@/app/components/Header'

async function getCategories() {
	const query = `*[_type == "category"]{
		title,
		 "slug":slug.current,
		
	  }`

	const categories = await client.fetch(query)
	return categories
}
async function getPosts() {
	const query = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  thumbnail,
  categories[]->{title, slug}
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
			<Header
				title='Blog'
				marqueeText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate reiciendis quo aliquid ipsa, rerum rem corrupti est perspiciatis dolorem.'
			/>
			<main className='px-6 sm:px-12 pb-20'>
				{/* categories */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<div className='flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center  '>
						<h2 className='text-xl font-heading '>Kategorie</h2>
						<div className='flex flex-wrap justify-center gap-6 '>
							{categories.map((category, index) => (
								<Link
									href={`/blog/kategoria/${category.slug}`}
									key={index}
									className='px-4    py-2  bg-ownPink-400 hover:bg-ownPink-600  text-sm text-fontLight  font-bold  shadow-customSmall hover:animate-shake duration-150  '>
									{category.title}
								</Link>
							))}
						</div>
					</div>
				</section>
				{/* posts */}
				<section className='2xl:px-12 mx-auto'>
					<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-12'>
						{posts.map((post, index) => (
							<PostCard post={post} key={index} />
						))}
					</div>
				</section>
			</main>
		</>
	)
}
