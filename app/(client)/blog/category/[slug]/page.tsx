import Text from '@/app/components/Text'
import { Post, Category } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'

import type { Metadata } from 'next'

import Link from 'next/link'
import React from 'react'

import PostCard from '@/app/components/blog/PostCard'
import Header from '@/app/components/Header'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import LinkBtn from '@/app/components/LinkBtn'
import ColorSpan from '@/app/components/ColorSpan'

async function getCategories() {
	const query = `*[_type == "category"]{
		title,
		 "slug":slug.current,
		
	  }`

	const categories = await client.fetch(query)
	return categories
}
async function getPostsByCategory(category: string) {
	const query = `*[_type == "post" && references(*[_type == "category" && slug.current == "${category}"]._id)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  thumbnail,
  excerpt
  
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

export default async function Blog(props: { params: { slug: string } }) {
	const posts: Post[] = await getPostsByCategory(props.params.slug)
	const categories: Category[] = await getCategories()

	return (
		<>
			<Header
				title='Blog'
				marqueeText={
					<>
						wpisy z kategorii <ColorSpan>{props.params.slug}</ColorSpan>
					</>
				}
			/>
			<main className='px-6 sm:px-7 pb-20'>
				{/* categories */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<div className='flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center  items-center  '>
						<h2 className='text-xl font-heading '>Kategorie:</h2>
						<div className='flex flex-wrap justify-center gap-6 '>
							{categories.map((category, index) => (
								<LinkBtn
									key={index}
									small
									href={`/blog/kategoria/${category.slug}`}
									className={`${props.params.slug === category.slug ? 'bg-ownTurquise-400 hover:bg-ownTurquise-600' : ''}`}>
									{category.title}
								</LinkBtn>
							))}
						</div>
					</div>
				</section>
				{/* posts */}
				<section className=' mx-auto'>
					<div
						className='grid lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-x-8 gap-y-16
					'>
						{posts.map((post, index) => (
							<PostCard key={index} post={post} />
						))}
					</div>
				</section>
			</main>
		</>
	)
}
