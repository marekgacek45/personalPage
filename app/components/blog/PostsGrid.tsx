import React from 'react'
import PostCard from '@/app/components/blog/PostCard'

const PostsGrid = (props: { posts: Array<any> }) => {
	return (
		<section className=' mx-auto'>
			<div
				className='grid lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-x-8 gap-y-16
					'>
				{props.posts.map((post, index) => (
					<PostCard key={index} post={post} />
				))}
			</div>
		</section>
	)
}

export default PostsGrid
