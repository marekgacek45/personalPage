import Image from 'next/image'

import { urlFor } from '@/sanity/lib/image'
import { Stack } from '@/sanity/lib/interface'

import Marquee from 'react-fast-marquee'

const StackMarquee = ({ stacks }: { stacks: Stack[] }) => {
	return (
		<Marquee autoFill pauseOnHover className='dark:bg-bgLight-400 py-3'>
			{stacks.map((stack, index) => (
				<Image
					key={`${stack.title}-${index}`}
					src={urlFor(stack.image).url()}
					alt={`logo ${stack.title}`}
					width={60}
					height={60}
					className='mx-8'
					quality={70}
				/>
			))}
		</Marquee>
	)
}

export default StackMarquee
