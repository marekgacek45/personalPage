'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '@/public/assets/logo.webp'
import { Squash as Hamburger } from 'hamburger-react'

import ThemeToggler from '@/app/components/nav/ThemeToggler'
import NavLink from '@/app/components/nav/NavLink'
import SocialLink from '@/app/components/nav/SocialLink'
import MobileMenu from '@/app/components/nav/MobileMenu'

import { socialItems } from '@/app/utils/socials'

const navLinks = [
	{ href: '/blog', label: 'Blog' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/#contact', label: 'Contact' },
]

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)

	const handleLinkClick = () => {
		setOpen(false)
	}

	return (
		<>
			<nav className='fixed top-0 left-0 right-0 py-4 px-3 xs:px-6 sm:px-12 2xl:px-0 bg-ownYellow-400 dark:bg-ownPurple-400  shadow-slate-500 shadow-lg z-50 '>
				{/* CONTAINER */}
				<div className='max-w-screen-2xl mx-auto flex justify-between items-center'>
					{/* links */}
					<div className='flex items-center gap-24'>
						<Link
							onClick={handleLinkClick}
							href='/'
							className='flex items-center gap-3 text-3xl font-heading text-ownPurple-400 dark:text-ownYellow-400 hover:text-ownPink-600 dark:hover:text-ownPink-600  duration-150'>
							<Image src={logo} alt='my logo' className='w-11' />
							Marek Gacek
						</Link>

						<ul className='hidden xl:flex gap-8'>
							{navLinks.map((link, index) => (
								<NavLink link={link} key={index} onClick={handleLinkClick} />
							))}
						</ul>
					</div>
					{/* socials & themeToggler $ hamburger */}
					<div className='hidden xl:flex items-center gap-4'>
						<ul className='flex gap-3'>
							{socialItems.map((item, index) => (
								<SocialLink item={item} key={index} />
							))}
						</ul>

						<ThemeToggler />
					</div>
					<div className='xl:hidden text-ownPink-400'>
						<Hamburger toggled={isOpen} toggle={setOpen} distance='sm' label='Otwórz menu' />
					</div>
				</div>
			</nav>
			{isOpen && <MobileMenu links={navLinks} socials={socialItems} onLinkClick={handleLinkClick} />}
		</>
	)
}

export default Navbar
