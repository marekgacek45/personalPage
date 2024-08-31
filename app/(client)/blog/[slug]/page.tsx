import { client } from '@/sanity/lib/client'
import React from 'react'
import type { Post } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import PostCard from '@/app/components/blog/PostCard'
import Image from 'next/image'
import Heading from '@/app/components/Heading'
import CategoryList from '@/app/components/blog/CategoryList'
import PostsGrid from '@/app/components/blog/PostsGrid'



import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const getPost = async (slug: string) => {
	const query = `
    *[_type == "post" && slug.current == "${slug}"][0]{
        title,
        slug,
        thumbnail,
		publishedAt,
        content,
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

const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => <Image src={urlFor(value).url()} alt='post' width={700} height={700} />,
		codeBlock: ({ value }: any) => (
			<SyntaxHighlighter language={value.language} style={dracula}>
            {value.code}
          </SyntaxHighlighter>
		),
	},
}

const Post = async ({ params }: { params: { slug: string } }) => {
	const post: Post = await getPost(params?.slug)
	const otherPosts: Post[] = await getOtherPosts(params?.slug)

	console.log(post)
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
								<span className='text-sm'> {new Date(post?.publishedAt).toDateString()}</span>
							</div>
							{/* categories */}
							<CategoryList categories={post.categories} />
						</div>
						{/* thumbnail */}
						<Image
							src={urlFor(post.thumbnail).url()}
							alt={`miniaturka postu o tytule ${post.title}`}
							className='w-full object-cover max-h-[500px] 2xl:max-h-[600px]'
							width={500}
							height={500}
						/>
					</header>

					<div className=' mx-auto prose text-fontPrimary text-lg max-w-screen-lg'>
						<PortableText value={post.content} components={myPortableTextComponents} />
					</div>
				</article>
				{/* otherPosts */}
				<PostsGrid posts={otherPosts} />
			</main>
		</>
	)
}

export default Post
