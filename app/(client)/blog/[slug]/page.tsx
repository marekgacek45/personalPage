import { client } from '@/sanity/lib/client'
import React from 'react'
import type { Post } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import PostCard from '@/app/components/PostCard'

const getPost = async (slug: string) => {
	const query = `
    *[_type == "post" && slug.current == "${slug}"][0]{
        title,
        slug,
        thumbnail,
        content,
        categories[]->{title, slug},
      }`
	const data = await client.fetch(query)
	return data
}

const getOtherPosts = async (slug: string) => {
	const query = `*[_type == "post" && slug.current != "${slug}"] | order(publishedAT asc)[0...3]{
        title,
        "slug": slug.current,
        thumbnail,
		publishedAt,
        categories[]->{title, slug},
    }`

	const data = await client.fetch(query)
	return data
}

export const revalidate = 60

const Post = async ({ params }: { params: { slug: string } }) => {
	const post: Post = await getPost(params?.slug)
	const otherPosts: Post[] = await getOtherPosts(params?.slug)

	console.log(otherPosts);
	return (
		<>
			<main className='mt-[90px]'>
				<article className='space-y-16'>
					<header className='max-w-screen-2xl mx-auto flex flex-col  justify-center items-center gap-12'>
						<div className='overflow-hidden w-full'>
							<img
								src={urlFor(post.thumbnail).url()}
								alt='miniaturka postu o tytule {{$post->title}}'
								className='w-full object-cover max-h-[500px] 2xl:max-h-[600px] hover:scale-105 duration-500'
							/>
						</div>
						<h1 className='text-4xl sm:text-6xl max-w-screen-lg text-center'>{post.title}</h1>
						<div className='flex justify-between items-center w-full max-w-screen-lg'>
							<div className='flex flex-col justify-start items-start gap-2'>
								<span className='text-base font-medium'>Publikacja:</span>
								<span className='text-sm'> 21 sierpień 2023</span>
							</div>
							<div className='flex justify-start items-center gap-4 mt-2'>
								{post.categories.map((category, index) => (
									<a
										href={`/blog/kategoria/${category.slug}`}
										key={index}
										className='px-4    py-2  bg-ownPink-400 hover:bg-ownPink-600  text-sm text-fontLight  font-bold  shadow-customSmall hover:animate-shake duration-150  '>
										#{category.title}
									</a>
								))}
							</div>
						</div>
					</header>

					<div className=' mx-auto prose text-fontPrimary text-lg max-w-screen-lg'>
						<PortableText value={post.content} />
					</div>
				</article>
				<div className='grid grid-cols-3'>
					{otherPosts.map((post, index) => (
						<PostCard post={post} key={index} />
					))}
				</div>
			</main>
		</>
	)
}

export default Post
