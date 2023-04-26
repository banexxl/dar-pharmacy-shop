import IProduct from '@/interfaces/product/product.interface';
import { Button, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const ProductCarousel = (props: any) => {

          const { products } = props
          console.log(products);

          return (
                    <Carousel animation="slide">
                              {products.map((product: IProduct) => (
                                        <CarouselProductItem key={product._id} name={product.name} description={product.description} img={product.imageURL} />
                              ))}
                    </Carousel>
          );
}

const CarouselProductItem = (props: any) => {
          return (
                    <Paper>
                              <h2>{props.name}</h2>
                              <p>{props.description}</p>
                              <Image src={props.image} alt={props.name} />
                              <Button>Learn More</Button>
                    </Paper>
          );
}

export default ProductCarousel;
