import Link from 'next/link';
import React from 'react'

const Card = (props: { children: React.ReactNode; title: string; className?: string,href?: string }) => {
	const content = (
		<>
		  <div className='p-2 bg-bgDark-400 dark:bg-bgLight-200'>
			<span className='text-2xl font-accent font-bold text-fontLight dark:text-fontDark uppercase tracking-wider'>
			  {props.title}
			</span>
		  </div>
		  {props.children}
		</>
	  )
	
	  if (props.href) {
		return (
		  <Link href={props.href} className={`shadow-custom ${props.className}`}>
			{content}
		  </Link>
		)
	  } else {
		return (
		  <div className={`shadow-custom ${props.className}`}>
			{content}
		  </div>
		)
	  }
}

export default Card
