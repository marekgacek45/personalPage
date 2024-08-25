import React from 'react'

const Section = (props:{children: React.ReactNode, id?: string,className?:string}) => {
	return (
		<section id={props.id ? props.id : undefined} className={`bg-bgLight-400 dark:bg-bgDark-400 py-12 sm:py-20  ${props.className}`}>
			{props.children}
		</section>
	)
}

export default Section
