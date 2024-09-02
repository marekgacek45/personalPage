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
import FilterList from '@/app/components/FilterList'
import PostsGrid from '@/app/components/blog/PostsGrid'

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
	title: 'Developer Insights Blog | Marek Gacek - Web Development & Programming',
	description:
		"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
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
						posts from category <ColorSpan>{props.params.slug}</ColorSpan>
					</>
				}
			/>
			<main className='px-6 sm:px-7 pb-20'>
				{/* categories */}

				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Categories'>
						<LinkBtn small href='/blog'>
							All
						</LinkBtn>
						{categories.map((category, index) => (
							<LinkBtn
								key={index}
								small
								href={`/blog/kategoria/${category.slug}`}
								className={`${props.params.slug === category.slug ? 'bg-ownTurquise-400 hover:bg-ownTurquise-600' : ''}`}>
								{category.title}
							</LinkBtn>
						))}
					</FilterList>
				</section>
				{/* posts */}
				<section className=' mx-auto'>
					{posts.length > 0 ? (
						<PostsGrid posts={posts} />
					) : (
						<div className='text-center py-4 sm:py-24'>
							<ColorSpan>Posts not found</ColorSpan>
						</div>
					)}
				</section>
			</main>
		</>
	)
}
