import React from 'react'
import './image.scss'

interface ImageProps {
  src: string;
  ratioClass: string;
}
export default function Image ({ src, ratioClass = '' }: ImageProps) {
  const placeholderClass = ratioClass ? `placeholder ${ratioClass}` : 'placeholder'

  return (
    <div className="img-el">
      <img
        src={src}
        loading="lazy"
      />
      <div className={placeholderClass} />
    </div>
  )
}
