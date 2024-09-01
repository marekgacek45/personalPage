import React from 'react'
import Image from 'next/image'
import Heading from '@/app/components/Heading'
import Section from '@/app/components/Section'
import Wrapper from '@/app/components/Wrapper'
import Card from '@/app/components/Card'
import Text from '@/app/components/Text'
import LinkBtn from '@/app/components/LinkBtn'
import ColorSpan from '@/app/components/ColorSpan'

const YouTube = () => {
	return (
		<Section>
			<Wrapper>
				<div className='flex flex-col  gap-6  justify-center text-left  xl:w-1/2 order-1 xl:order-none'>
					<Heading>Check out my YouTube</Heading>
					<Text>
						I invite you to check out my <ColorSpan>YouTube</ColorSpan>,channel, where I share my daily challenges as a <ColorSpan secondary>developer</ColorSpan>.
					</Text>
					<Text>
						You can see how I work on various <ColorSpan>projects</ColorSpan>,from concept to completion, and how I test
						new <ColorSpan secondary>techs</ColorSpan> and <ColorSpan>tools</ColorSpan>.
					</Text>
					<Text>
						On the channel, you&apos;ll also find practical <ColorSpan secondary>tips</ColorSpan> and{' '}
						<ColorSpan>advices</ColorSpan> based on my experience.
					</Text>
					<LinkBtn
						href='https://youtube.com/@marekgacekdev'
						attributes={{ target: '_blank', rel: 'noreferrer nofollow' }}
						className='self-start'>
						Check
					</LinkBtn>
				</div>

				<Card title='YouTube' className='xl:w-1/2'>
					

					<Image
						src='/assets/youtube.webp'
						alt='hero-poster'
						className='w-full object-cover min-h-[300px] lg:min-h-[590px] '
						width={526}
						height={300}
					/>
				</Card>
			</Wrapper>
		</Section>
	)
}

export default YouTube
