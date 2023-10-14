import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
// import { imageData } from '@/constants'
import ImageElement from '@/components/Image'
const tempImgData = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/400/300',
  'https://picsum.photos/600/600'
]
export default function App () {
  const [page, setPage] = useState(0)

  // const content = page === 0
  //   ? imageData.map((img, i) => (
  //     <ImageElement
  //       key={`image${i}`}
  //       src={img.src}
  //       // ratioClass={img.ratioClass}
  //     />
  //   ))
  //   : (
  //     <ImageElement
  //       src={imageData[0].src}
  //       // ratioClass={imageData[0].ratioClass}
  //     />
  //   )
  const content = tempImgData.map((img, i) => (
    <ImageElement
      key={`img${i}`}
      src={img}
    />
  ))

  return (
    <div className="app-div">
      <Navbar setPage={setPage} />
      { page === 0 && (
        <div className="content">
          { content }
        </div>
      )}

      { page === 1 && (
        <div className="details">
          <div className="details__col-1">
            { content }
            <div className="details__image-footer">
              footer text
            </div>
          </div>
          <div className="details__col-2">
            <div className="details__information">
              <div className="details__title">
                TITLE
              </div>
              <div className="details__description">
                lorem ipsum whatever
              </div>
              <div className="details__other">
                more?
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
