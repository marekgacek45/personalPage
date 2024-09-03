import React from 'react'
import LinkBtn from '../components/LinkBtn'
import Image from 'next/image'

const NotFound = () => {
  return (
    <header className=' relative  h-[85vh]  sm:h-[calc(73vh-76px)] mt-[76px]   '>
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      poster='/assets/hero-poster.webp'
      className=' absolute inset-0 w-full h-full object-cover hidden md:block'>
      <source src='/assets/hero.webm' type='video/webm' />
      Your browser does not support the video player.			</video>

    <Image
      src='/assets/hero--mobile.webp'
      alt='cyberpunk world'
      className='absolute inset-0 w-full h-full object-cover md:hidden'
      width={526}
      height={300}
      loading={'eager'}
    />

    <div className='bg-black absolute top-0 right-0 left-0 bottom-0 opacity-50'></div>

    <div className='absolute inset-0 max-w-screen-lg flex flex-col justify-center items-center text-center  gap-6 md:gap-12  px-6 sm:px-0  mx-auto '>
      <h1 className='text-[2.6rem] md:text-7xl xl:text-8xl 2xl:text-9xl font-heading text-ownYellow-400 uppercase leading-normal sm:leading-6 sm:tracking-wide '>
      404<br/> Page not found
      </h1>
      
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-12  lg:mt-0 2xl:mt-16'>
        <LinkBtn href='/'>Home</LinkBtn>
      
      </div>
    </div>
  </header>
  )
}

export default NotFound