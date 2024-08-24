import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = (props: { link: { href: string; label: string } }) => {
	const pathname = usePathname()
	return (
		<li
			className={`text-xl hover:animate-shake ${
				pathname === props.link.href
					? 'text-ownYellow-400 dark:text-ownPurple-400 '
					: 'text-fontLight dark:text-fontDark'
			}`}>
			<Link href={props.link.href}>{props.link.label}</Link>
		</li>
	)
}

export default NavLink
