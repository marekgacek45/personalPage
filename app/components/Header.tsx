import React from 'react'

import Marquee from 'react-fast-marquee'

import Text from '@/app/components/Text'

const Header = (props: { title: string; marqueeText: string }) => {
	return (
		<header className='mt-[76px] text-center py-12'>
			<h1 className='text-[2.6rem] md:text-7xl xl:text-8xl 2xl:text-9xl font-heading text-ownPurple-400 dark:text-ownYellow-400 uppercase leading-normal sm:leading-6 sm:tracking-wide mb-4'>
				{props.title}
			</h1>
			<Marquee className='bg-bgDark-200 dark:bg-bgLight-400 py-4 text-fontLight dark:text-fontDark'>
				<Text>{props.marqueeText}</Text>
			</Marquee>
		</header>
	)
}

export default Header
