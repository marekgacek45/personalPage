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
    slug,
    image,
  }
    `

	const stacks = await client.fetch(query)
	return stacks
}

export const revalidate = 60

const StackMarquee = async () => {
	const stacks: Stack[] = await getStacks()
	console.log(stacks)

	return (
		<Marquee autoFill pauseOnHover className='bg-bgLight-400'>
			{stacks.map((stack, index) => (
				<Image key={index} src={urlFor(stack.image).url()} alt={`logo ${stack.title}`} width={75} height={75} loading="lazy" className='mx-4' />
			))}
		</Marquee>
	)
}

export default StackMarquee
