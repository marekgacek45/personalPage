import { client } from '@/sanity/lib/client'
import React from 'react'
import type { Post } from '@/sanity/lib/interface'

const getPost = async (slug: string) => {
	const query = `
    *[_type == "post" && slug.current == "${slug}"][0]{
        title,
        slug,
        thumbnail,
        content,
      }`
	const data = await client.fetch(query)
	return data
}

export const revalidate = 60

const Post = async ({ params }: { params: { slug: string } }) => {
	const post: Post = await getPost(params?.slug)
	return <>
    <main className='mt-[72px]'>
        <h1 className='text-3xl font-heading'>{post.title}</h1>
    </main>
    </>
}

export default Post
