'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import myPhoto from '@/public/my-photo.webp'
import myPhotoPixel from '@/public/my-photo--pixel.webp'

const ImageFlipper = () => {
	const [currentImage, setCurrentImage] = useState(myPhoto)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(prevImage => (prevImage === myPhoto ? myPhotoPixel : myPhoto))
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return <Image src={currentImage} alt='Marek Gacek - programista FullStack' className='object-cover shadow-custom ' quality={50} width={550} height={550} />
}

export default ImageFlipper
