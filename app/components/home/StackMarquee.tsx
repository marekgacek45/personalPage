import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Stack } from '@/sanity/lib/interface'

import Image from 'next/image'
import React from 'react'

import Marquee from 'react-fast-marquee'

async function getStacks() {
	const query = `
    *[_type == "stack"]{
    title,
    image,
  }
    `
	const stacks = await client.fetch(query)
	return stacks
}

export const revalidate = 60

const StackMarquee = async () => {
	const stacks: Stack[] = await getStacks()

	return (
		<Marquee autoFill pauseOnHover >
			{stacks.map((stack, index) => (
				<Image
					key={index}
					src={urlFor(stack.image).url()}
					alt={`logo ${stack.title}`}
					width={70}
					height={70}
					className='mx-4'
				/>
			))}
		</Marquee>
	)
}

export default StackMarquee
