import React from 'react'
import Section from '../Section'
import Heading from '../Heading'
import Text from '../Text'
import ColorSpan from '../ColorSpan'
import Link from 'next/link'

const Contact = () => {
	return (
		<Section id='contact'>
			<div className='max-w-screen-2xl mx-auto px-6 sm:px-12 text-center space-y-6'>
				<Heading>Contact</Heading>
				
					<Text className='pb-4'>Feel free to contact with me!</Text>
                    <Link href='mailto:marekgacekdev@gmail.com' >
					<ColorSpan>
						marekgacekdev@gmail.com
					</ColorSpan></Link>
				
			</div>
		</Section>
	)
}

export default Contact
