import Link from 'next/link';


const Card = ({title,children,href,className}: { children: React.ReactNode; title: string; className?: string,href?: string }) => {
	const content = (
		<>
		  <div className='p-2 bg-bgDark-400 dark:bg-bgLight-200'>
			<span className='text-2xl font-accent font-bold text-fontLight dark:text-fontDark uppercase tracking-wider'>
			  {title}
			</span>
		  </div>
		  {children}
		</>
	  )
	
	  if (href) {
		return (
		  <Link href={href} className={`shadow-custom ${className}`}>
			{content}
		  </Link>
		)
	  } else {
		return (
		  <div className={`shadow-custom  ${className}`}>
			{content}
		  </div>
		)
	  }
}

export default Card
