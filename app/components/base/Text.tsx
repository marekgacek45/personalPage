import React from 'react'

const Text = (props:{children: React.ReactNode}) => {
  return (
    <p className='text-xl sm:text-2xl leading-normal'>{props.children}</p>
  )
}

export default Text