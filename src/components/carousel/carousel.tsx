import IProduct from '@/interfaces/product/product.interface';
import { Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ProductImage } from './carousel-image-loader';

const ProductCarousel = (props: any) => {

          const { products } = props
          console.log(products);

          return (
                    <Carousel animation="slide" sx={{ marginTop: '80px', position: 'relative' }}>
                              {products.map((product: IProduct) => (
                                        <CarouselProductItem key={product._id} name={product.name} description={product.description} img={product.imageURL} />
                              ))}
                    </Carousel>
          );
}

const CarouselProductItem = (props: any) => {

          console.log('props u karoselu', props);

          return (
                    <Paper >
                              <Typography>{props.name}</Typography>
                              <ProductImage src={props.img} alt={props.name} height={100} width={100} />
                              <Button>Learn More</Button>
                    </Paper>
          );
}

export default ProductCarousel;
