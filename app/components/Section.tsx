import React from 'react'

const Section = (props:{children: React.ReactNode, id?: string, className?:string}) => {
	return (
		<section id={props.id ? props.id : undefined} className={`py-12 sm:py-24  ${props.className}`}>
			{props.children}
		</section>
	)
}

export default Section
