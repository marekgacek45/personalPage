
import React from 'react'

const SocialLink = (props: { item: { href: string;  icon?: any } }) => {
	return (
		<li className='hover:animate-shake'>
			<a href={props.item.href} target='_blank' rel='noreferrer nofollow'>
				<props.item.icon className='w-5 fill-white dark:fill-black' />
			</a>
		</li>
	)
}

export default SocialLink
