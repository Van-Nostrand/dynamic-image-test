import React from 'react'
import Navbar from '@/components/Navbar'
import { imageData } from '@/constants'
import Image from '@/components/Image'

export default function App () {
  const images = imageData.map((img, i) => (
    <Image
      key={`image${i}`}
      src={img.src}
      ratioClass={img.ratioClass}
    />
  ))

  return (
    <div className="app-div">
      <Navbar />
      <div className="content">
        { images }
      </div>
    </div>
  )
}
