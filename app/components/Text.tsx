import React from 'react'

const Text = (props:{children: React.ReactNode,className?:string}) => {
  return (
    <p className={`text-xl sm:text-2xl leading-normal ${props.className}`}>{props.children}</p>
  )
}

export default Text