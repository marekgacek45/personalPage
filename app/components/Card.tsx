import React from 'react'

const Card = (props: { children: React.ReactNode; title: string; className?: string }) => {
	return (
		<div className={`shadow-custom ${props.className}`}>
			<div className='  p-2 bg-bgDark-400'>
				<span className=' text-2xl font-accent font-bold  text-fontLight uppercase tracking-wider '>{props.title}</span>
			</div>
			{props.children}
		</div>
	)
}

export default Card
