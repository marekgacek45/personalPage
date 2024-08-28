import React from 'react'

const ColorSpan = (props:{children: React.ReactNode, secondary?:boolean}) => {
  return (
    <span className={`font-accent text-3xl sm:text-4xl font-semibold tracking-wide ${props.secondary?"text-ownPurple-400 dark:text-ownYellow-400" : "text-ownPink-400"} `}>{props.children}</span>
  )
}

export default ColorSpan