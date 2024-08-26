import AppDrawer from '@/components/navbar/drawer/drawer'
import ProductDetails from '@/components/product-details/product-details'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import IProduct from '@/interfaces/product/product.interface'
import productsServices from '@/services/product.services'
import theme from '@/styles/theme'
import { Container, Stack } from '@mui/material'
import { _id } from '@next-auth/mongodb-adapter'
import React from 'react'
import LoadingWheel from '@/components/loading/loading'
import dynamic from 'next/dynamic'
import { Seo } from '@/components/seo'

type SingleProductProps = {
     product: IProduct
}

const SingleProduct = (props: SingleProductProps) => {
     //this way next js does not try to render theme provider on server (no hydration error : )
     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })
     return (
          <DynamicThemeProvider theme={theme}>
               <Seo title={props.product.name} description={props.product.description} url={'https://www.apoteka-dar.rs/'} />
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
                                   price={props.product.price} quantity={props.product.quantity} warning={props.product.warning} manufacturer={props.product.manufacturer} quantityUnit={props.product.quantityUnit} mediaURLs={props.product.mediaURLs} />
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider>
     )
}

export default SingleProduct

export async function getServerSideProps(context: any) {

     const product: any = await productsServices().getProductById(context.params._id)
     // context iz getstaticprops {
     //           params: { _id: '647660082a76d9e7aa674dc8' },
     //           locales: ['sr-RS', 'en-US'],
     //           locale: 'sr-RS',
     //           defaultLocale: 'sr-RS'
     // }

     return {
          props: {
               product: JSON.parse(JSON.stringify(product)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}

// export const getStaticPaths = async (context: any) => {

//           //context { locales: ['sr-RS', 'en-US'], defaultLocale: 'sr-RS' }

//           const allProducts: any = await productsServices().getAllProducts()

//           const paths = allProducts.flatMap((product: any) =>
//                     context.locales.map((locale: any) => ({
//                               params: { _id: product._id.toString() },
//                               locale,
//                     }))
//           );

//           return {
//                     paths,
//                     fallback: false, // false or "blocking"
//           };
// }