import React from 'react'
import type { Post } from '@/sanity/lib/interface'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

import Image from 'next/image'
import Heading from '@/app/components/Heading'
import CategoryList from '@/app/components/blog/PostCategoryList'
import PostsGrid from '@/app/components/blog/PostsGrid'

// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-ignore
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const getPost = async (slug: string) => {
	const query = `
    *[_type == "post" && slug.current == "${slug}"][0]{
        title,
        "slug": slug.current,
        thumbnail,
		excerpt,
        content,
		publishedAt,
        categories[]->{title, slug},
      }`
	const data = await client.fetch(query)
	return data
}

const getOtherPosts = async (slug: string) => {
	const query = `*[_type == "post" && slug.current != "${slug}"] | order(publishedAT asc)[0...4]{
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const post: Post = await getPost(params?.slug)
	if (!post) {
		return
	}
	return {
		title: `${post.title}`,
		description: post.excerpt,
		openGraph: {
			title: `${post.title} | Marek Gacek - Web Development & Programming`,
			description: post.excerpt,
			type: 'article',
			locale: 'en_US',
			url: `https://marekgacekdev.pl/blog/blog/${post.slug}`,
			siteName: 'Marek Gacek - FullStack Developer',
			images: [
				{
					url: urlFor(post.thumbnail).url(),
					width: 1200,
					height: 630,
					alt: `${post.title} thumbnail`,
				},
			],
		},
	}
}

const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<Image src={urlFor(value).url()} alt='post' width={700} height={700} className='mx-auto' />
		),
		codeBlock: ({ value }: any) => (
			<SyntaxHighlighter language={value.language} style={nightOwl}>
				{value.code}
			</SyntaxHighlighter>
		),
	},
}

const Post = async ({ params }: { params: { slug: string } }) => {
	const post: Post = await getPost(params?.slug)
	const otherPosts: Post[] = await getOtherPosts(params?.slug)

if(!post) notFound()

	return (
		<>
			<main className='mt-[76px]  px-6 sm:px-12 py-12 sm:py-24 space-y-32'>
				<article className='space-y-16'>
					{/* HEADER */}
					<header className='max-w-screen-2xl mx-auto flex flex-col  justify-center items-center gap-12 '>
						{/* title */}
						<Heading level={1} className='max-w-screen-lg text-center'>
							{post.title}
						</Heading>
						<div className='flex justify-between items-center w-full max-w-screen-lg'>
							{/* publishedAt */}
							<div className='flex flex-col justify-start items-start gap-2'>
								<span className='text-base font-medium'>Posted:</span>
								<span className='text-base'> {new Date(post?.publishedAt).toDateString()}</span>
							</div>
							{/* categories */}
							<CategoryList categories={post.categories} />
						</div>
						{/* thumbnail */}
						<Image
							src={urlFor(post.thumbnail).url()}
							alt={`thumbnail of article -  ${post.title}`}
							className='w-full object-cover'
							width={1498}
							height={842}
						/>
					</header>
					{/* content */}
					<div className=' mx-auto prose  text-fontPrimary text-lg max-w-screen-lg text-fontDark dark:text-fontLight prose-headings:text-fontDark prose-headings:dark:text-fontLight'>
						<PortableText value={post.content} components={myPortableTextComponents} />
					</div>
				</article>
				<hr className='border-fontDark dark:border-fontLight' />
				{/* otherPosts */}
				{otherPosts.length > 0 && (
					<section>
						<Heading level={2} className='text-center mb-12'>
							Discover more
						</Heading>
						<PostsGrid posts={otherPosts} />
					</section>
				)}
			</main>
		</>
	)
}

export default Post
