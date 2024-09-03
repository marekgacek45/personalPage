import { Post, Category } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import type { Metadata } from 'next'

import Header from '@/app/components/Header'
import LinkBtn from '@/app/components/LinkBtn'
import PostsGrid from '@/app/components/blog/PostsGrid'
import FilterList from '@/app/components/FilterList'

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
	openGraph: {
		title: 'Developer Insights Blog | Marek Gacek - Web Development & Programming',
		description:
			"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
		type: 'website',
		locale: 'en_US',
		url: 'https://marekgacekdev.pl',
		siteName: 'Marek Gacek - FullStack Developer',
	},
}

export default async function Blog() {
	const posts: Post[] = await getPosts()
	const categories: Category[] = await getCategories()

	return (
		<>
			<Header title='Blog' marqueeText='unlock the code' />
			<main className='px-6 sm:px-7 pb-20'>
				{/* categories */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Categories'>
						{categories.map((category, index) => (
							<LinkBtn key={index} small href={`/blog/kategoria/${category.slug}`}>
								{category.title}
							</LinkBtn>
						))}
					</FilterList>
				</section>
				{/* posts */}
				<section className=' mx-auto'>
					<PostsGrid posts={posts} />
				</section>
			</main>
		</>
	)
}
