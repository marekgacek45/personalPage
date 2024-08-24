import React from 'react'

const SocialLink = (props: { item: { href: string; icon: any; label: string }; mobile?: boolean }) => {
	return (
		<li className='hover:animate-shake group'>
			<a href={props.item.href} target='_blank' rel='noreferrer nofollow' aria-label={props.item.label}>
				<props.item.icon
					className={`w-6 sm:w-10 xl:w-6 ${props.mobile ? 'fill-black dark:fill-white' : 'fill-white dark:fill-black'} group-hover:fill-ownPink-600 dark:group-hover:fill-ownPink-600 duration-150`}
				/>
			</a>
		</li>
	)
}

export default SocialLink
