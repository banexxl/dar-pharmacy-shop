import { DiscountSticker } from '@/styles/carousel/carousel'
import { Box } from '@mui/material'
import Image, { ImageLoader } from 'next/image'

const myLoader: ImageLoader = ({ src }) => {
          return `${src}`
}

type ProductImage = {
          src: string,
          alt: string,
          height: number,
          width: number,
          isOnDiscount: boolean
}

export const CarouselProductImage = (props: ProductImage) => {

          return (
                    <Box style={{ width: '100%', position: 'relative' }}>
                              {
                                        !props.isOnDiscount ?
                                                  null
                                                  : null
                              }
                              <Image
                                        unoptimized
                                        loader={myLoader}
                                        src={props.src}
                                        alt={props.alt}
                                        width={props.width}
                                        height={props.height}
                                        style={{
                                                  borderRadius: '20px',
                                                  maxWidth: '100%',
                                                  maxHeight: '150px',
                                                  width: '100%',
                                                  objectPosition: "center",
                                                  zIndex: '1000'
                                        }}
                              />
                    </Box>
          )
}

export const CarouselManufacturerImage = (props: ProductImage) => {

          return (
                    <div style={{ width: '100%', position: 'relative' }}>
                              <Image
                                        unoptimized
                                        loader={myLoader}
                                        src={props.src}
                                        alt={props.alt}
                                        width={props.width}
                                        height={props.height}
                                        style={{
                                                  borderRadius: '20px',
                                                  maxWidth: '100%',
                                                  maxHeight: '150px',
                                                  width: '100%',
                                                  objectPosition: "center",
                                                  zIndex: '1000'
                                        }}
                              />
                    </div>
          )
}