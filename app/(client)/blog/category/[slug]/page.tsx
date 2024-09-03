import { Post, Category } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'


import Header from '@/app/components/Header'
import LinkBtn from '@/app/components/LinkBtn'
import ColorSpan from '@/app/components/ColorSpan'
import FilterList from '@/app/components/FilterList'
import PostsGrid from '@/app/components/blog/PostsGrid'
import { notFound } from 'next/navigation'

async function getCategories() {
	const query = `*[_type == "category" && count(*[_type == "post" && references(^._id)]) > 0]{
		title,
		"slug": slug.current,
		"postCount": count(*[_type == "post" && references(^._id)])
	  } | order(postCount desc)`

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

function capitalizeFirstLetter(text:string) {
	return text.charAt(0).toUpperCase() + text.slice(1);
  }

export async function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: `${capitalizeFirstLetter(params.slug)} Posts`,
		description: `Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.`,
		openGraph: {
			title:  `${capitalizeFirstLetter(params.slug)}  Posts | Marek Gacek - Web Development & Programming`,
			description:
				"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
			type: 'website',
			locale: 'en_US',
			url: `https://marekgacekdev.pl/blog/category${params.slug}`,
			siteName: 'Marek Gacek - FullStack Developer',
		},
	}
}

export default async function Blog(props: { params: { slug: string } }) {
	const posts: Post[] = await getPostsByCategory(props.params.slug)
	const categories: Category[] = await getCategories()

	if(!categories.find(category => category.slug === props.params.slug)) notFound()

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
								href={`/blog/category/${category.slug}`}
								className={`${props.params.slug === category.slug ? 'bg-ownTurquise-400 hover:bg-ownTurquise-600' : ''}`}>
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
