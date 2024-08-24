import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = (props: { link: { href: string; label: string }; mobile?: boolean; onClick?: () => void }) => {
	const pathname = usePathname()

	const linkColor = props.mobile ? 'text-fontDark dark:text-fontLight' : 'text-fontLight dark:text-fontDark'

	return (
		<li
			onClick={props.onClick} 
			className={`text-3xl sm:text-4xl xl:text-xl font-semibold hover:animate-shake hover:text-ownPink-600 dark:hover:text-ownPink-600 duration-150 ${
				pathname === props.link.href ? 'text-ownYellow-400 dark:text-ownPurple-400 ' : `${linkColor}  `
			}`}>
			<Link href={props.link.href}>{props.link.label}</Link>
		</li>
	)
}

export default NavLink
