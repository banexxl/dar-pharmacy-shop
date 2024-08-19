import { DiscountSticker } from '@/styles/carousel/carousel'
import { Height } from '@mui/icons-material'
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
          <Box>
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
                         objectPosition: "center",
                         zIndex: '1000',
                    }}
               />
          </Box>
     )
}

export const CarouselManufacturerImage = (props: ProductImage) => {

     return (
          <div style={{ position: 'relative' }}>
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
                         objectPosition: "center",
                         zIndex: '1000'
                    }}
               />
          </div>
     )
}