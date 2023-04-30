import Image, { ImageLoader } from 'next/image'

const myLoader: ImageLoader = ({ src }) => {
          return `${src}`
}

type ProductImage = {
          src: string,
          alt: string,
          height: number,
          width: number
}

export const ProductImage = (props: ProductImage) => {

          return (
                    <div style={{ width: '100%', position: 'relative' }}>
                              <Image
                                        loader={myLoader}
                                        src={props.src}
                                        alt={props.alt}
                                        width={props.width}
                                        height={props.height}

                                        style={{
                                                  borderRadius: '20px',
                                                  maxWidth: '100%',
                                                  height: 'auto',
                                                  objectPosition: "center",
                                        }}
                              />
                    </div>
          )
}