import { urlFor } from '@/sanity/lib/image'
import { Stack } from '@/sanity/lib/interface'

import Image from 'next/image'
import React from 'react'

import Marquee from 'react-fast-marquee'

const StackMarquee = (props: { stacks: Stack[] }) => {
	return (
		<Marquee autoFill pauseOnHover>
			{props.stacks.map((stack, index) => (
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
