'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import logo from '../../../public/assets/logo.webp'
import Image from 'next/image'
import NavLink from './NavLink'
import { YouTubeIcon, GitHubIcon, FacebookIcon, LinkedinIcon } from '@/app/utils/icons'
import SocialLink from './SocialLink'
import { Squash as Hamburger } from 'hamburger-react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#kontakt', label: 'Kontakt' },
]

const socialItems = [
  { href: 'https://github.com/marekgacek45', icon: GitHubIcon, label: 'GitHub' },
  { href: 'https://www.youtube.com/@marekgacekdev', icon: YouTubeIcon, label: 'YouTube' },
  { href: 'https://facebook.com/marekgacekdev', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/marek-gacek', icon: LinkedinIcon, label: 'LinkedIn' },
]

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 py-4 px-3 xs:px-6 sm:px-12 2xl:px-0 bg-ownPurple-400 dark:bg-ownYellow-400 shadow-slate-400  shadow-xl z-50 '>
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-24'>
            <Link
              onClick={handleLinkClick}
              href='/'
              className='flex items-center gap-3 text-3xl font-heading text-ownYellow-400 dark:text-ownPurple-400 hover:text-ownPink-600 dark:hover:text-ownPink-600 duration-150'>
              <Image src={logo} alt='logo' width={50} height={50} className='w-11' />
              Marek Gacek
            </Link>
            <ul className='hidden xl:flex gap-8'>
              {navLinks.map((link, index) => (
                <NavLink
                  link={link}
                  key={index}
                  onClick={handleLinkClick} 
                />
              ))}
            </ul>
          </div>
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
