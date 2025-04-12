import AppDrawer from '@/components/navbar/drawer/drawer'
import ProductDetails from '@/components/product-details/product-details'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import IProduct from '@/interfaces/product/product.interface'
import { ProductsServices } from '@/services/product.services'
import theme from '@/styles/theme'
import { Container, Stack } from '@mui/material'
import { _id } from '@next-auth/mongodb-adapter'
import React from 'react'
import LoadingWheel from '@/components/loading/loading'
import dynamic from 'next/dynamic'
import { Seo } from '@/components/seo'
import { notFound } from 'next/navigation'

type SingleProductProps = {
     product: IProduct
}

const SingleProduct = (props: SingleProductProps) => {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })


     return props.product ? (
          <DynamicThemeProvider theme={theme}>
               <Seo
                    title={props.product.name}
                    description={props.product.description}
                    image={props.product.imageURL}
                    url={`https://www.apoteka-dar.rs/proizvodi/${props.product._id}`}
                    keywords={props.product.name}
               />
               <Container
                    disableGutters
                    maxWidth="lg"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <ProductDetails discount={props.product.discount} _id={props.product._id} availableStock={props.product.availableStock} category={props.product.category} description={props.product.description}
                                   imageURL={props.product.imageURL} ingredients={props.product.ingredients} instructions={props.product.instructions} name={props.product.name}
                                   price={props.product.price} quantity={props.product.quantity} warning={props.product.warning} manufacturer={props.product.manufacturer} quantityUnit={props.product.quantityUnit} mediaURLs={props.product.mediaURLs} discountAmount={props.product.discountAmount} />
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider>
     )
          :
          notFound()
}

export default SingleProduct

export async function getServerSideProps(context: any) {

     const product: any = await ProductsServices().getProductById(context.params._id)

     if (!product) {
          return {
               notFound: true, // Redirects to the 404 page
          };
     }

     return {
          props: {
               product: JSON.parse(JSON.stringify(product)),
          },
     }
}