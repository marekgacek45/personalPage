import React from 'react'
import LinkBtn from '@/app/components/LinkBtn'



const CategoryList = (props: { categories: Array<any> }) => {
	return (
		<div className='flex justify-start items-center gap-4 mt-2'>
			{props.categories.map((category, index) => (
				<LinkBtn key={index} small href={`/blog/kategoria/${category.slug.current}`}>
					{category.title}
				</LinkBtn>
			))}
		</div>
	)
}

export default CategoryList
