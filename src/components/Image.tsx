import React, { useRef, useEffect, useState } from 'react'
import './image.scss'

interface ImageProps {
  src: string;
  ratioClass?: string;
}

function getPercentage (width: number, height: number): string {
  const ratio = Math.round(((height / width) + Number.EPSILON) * 100) / 100
  return `${ratio * 100}%`
}
export default function ImageElement ({ src, ratioClass = '' }: ImageProps) {
  const imageRef = useRef<HTMLImageElement>(new Image())
  const haveInitializedImg = useRef(false)
  const [placeholderStyle, setPlaceholderStyle] = useState<null | { paddingBottom: string }>(null)

  useEffect(() => {
    imageRef.current.onload = (loadedImg: any) => {
      if (!ratioClass) {
        setPlaceholderStyle({ paddingBottom: getPercentage(loadedImg.target.width, loadedImg.target.height) })
      }
      haveInitializedImg.current = true
    }
    imageRef.current.src = src
    imageRef.current.loading = 'lazy'
  }, [])

  if (!haveInitializedImg.current) {
    return null
  }

  console.log('imageref is', imageRef.current)
  return (
    <div className="img-el">

      <img
        src={src}
        loading="lazy"
      />
      <div
        className={ratioClass ? `placeholder ${ratioClass}` : 'placeholder'}
        style={placeholderStyle ?? {}}
      />
    </div>
  )
}
