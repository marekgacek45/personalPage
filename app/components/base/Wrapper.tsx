import React from 'react'

const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <div className='max-w-screen-2xl flex flex-col xl:flex-row  mx-auto gap-12 sm:gap-16 px-6 sm:px-12 '>{props.children}</div>
  )
}

export default Wrapper