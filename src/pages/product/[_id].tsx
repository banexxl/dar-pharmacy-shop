import AppDrawer from '@/components/navbar/drawer/drawer'
import ProductDetails from '@/components/product-details/product-details'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import IProduct from '@/interfaces/product/product.interface'
import productsServices from '@/services/product.services'
import theme from '@/styles/theme'
import { Container, Stack } from '@mui/material'
import { _id } from '@next-auth/mongodb-adapter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import LoadingWheel from '@/components/loading/loading'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const SingleProduct = (props: any) => {

          console.log("single product props", props);

          const { t } = useTranslation('common')

          //this way next js does not try to render theme provider on server (no hydration error : )
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          console.log("props from product page", props);


          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('homepage.title')}</title>
                              </Head>
                              <Container
                                        disableGutters
                                        maxWidth="lg"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <ProductDetails _id={props.product._id} availableStock={props.product.availableStock} category={props.product.category} description={props.product.description}
                                                                      imageURL={props.product.imageURL} ingredients={props.product.ingredients} instructions={props.product.instructions} name={props.product.name}
                                                                      price={props.product.price} quantity={props.product.quantity} warning={props.product.warning} productURL={props.product.productURL}
                                                            />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}

export default SingleProduct

export async function getStaticProps({ params }: any) {

          const products: any = await productsServices().getProductsForHomePage()
          console.log('product from get staticprops', products);

          return {
                    props: {
                              products: JSON.parse(JSON.stringify(products)),
                              ...(await serverSideTranslations(params.locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}

export const getStaticPaths = async () => {

          const data: any = await productsServices().getProductsByCategory('Herbalab')

          const paths = data.map((product: IProduct) => ({
                    params: { _id: product._id.toString() }
          }))

          console.log('paths', paths);

          return {
                    paths,
                    fallback: false, // false or "blocking"
          };
}