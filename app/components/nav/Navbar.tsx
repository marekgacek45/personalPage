'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'

import logo from '../../../public/assets/logo.webp'
import Image from 'next/image'
import NavLink from './NavLink'

import { YouTubeIcon, GitHubIcon } from '@/app/utils/icons'
import SocialLink from './SocialLink'

import { Squash as Hamburger } from 'hamburger-react'

const navLinks = [
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/kontakt', label: 'Kontakt' },
]

const socialItems = [
	{ href: '/', icon: YouTubeIcon },
	{ href: 'https://github.com/marek-gacek', icon: GitHubIcon },
]

const openMenu = () => {
	console.log('open')
}

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
  
	return (
    <>
   
		<nav className=' fixed top-0 left-0 right-0 py-3 px-12 2xl:px-0 bg-ownPurple-400 dark:bg-ownYellow-400 z-50 text-ownYellow-400 dark:text-ownPurple-400'>
			{/* CONTAINER */}
			<div className='max-w-screen-2xl mx-auto flex justify-between items-center'>
				{/* nav-links */}
				<div className='flex items-center gap-24'>
					<Link   onClick={() => setOpen(false)}  href='/' className='flex items-center gap-3 text-3xl font-heading '>
						<Image src={logo} alt='logo' width={50} height={50} className='w-12' />
						Marek Gacek
					</Link>

					<ul className='hidden xl:flex gap-8 '>
						{navLinks.map((link, index) => (
							<NavLink link={link} key={index} />
						))}
					</ul>
				</div>
				{/* socials && themeToggler */}
				<div className='hidden xl:flex items-center gap-4'>
					<ul className='flex gap-2'>
						{socialItems.map((item, index) => (
							<SocialLink item={item} key={index} />
						))}
					</ul>
					<ThemeToggler />
				</div>
				{/* hamburger */}
				<div className='xl:hidden'>
					<Hamburger toggled={isOpen} toggle={setOpen} distance='sm' label='Otwórz menu' />
				</div>

				
			</div>
		</nav>
      {isOpen && <div className='fixed top-[72px] right-0 left-0 bottom-0  w-full bg-ownTurquise-400   animate-fadeIn'>
        <div className='absolute top-6 right-6'>
        <ThemeToggler />
        </div>
        <div className='flex flex-col justify-center h-full  items-center gap-8'>

        <ul className='flex flex-col justify-center  items-center gap-8 '>
						{navLinks.map((link, index) => (
              <NavLink link={link} key={index} />
						))}
					</ul>
        
					<ul className='flex gap-4 mt-6'>
						{socialItems.map((item, index) => (
              <SocialLink item={item} key={index} />
						))}
					</ul>
				
            </div>
				
        </div>}
    </>
	)
}

export default Navbar
