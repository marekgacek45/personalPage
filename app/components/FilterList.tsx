import React from 'react'

const FilterList = (props: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center  items-center  '>
						<h2 className='text-xl font-heading '>Kategorie:</h2>
						<div className='flex flex-wrap justify-center gap-6 '>
							{props.children}
						</div>
					</div>
  )
}

export default FilterList