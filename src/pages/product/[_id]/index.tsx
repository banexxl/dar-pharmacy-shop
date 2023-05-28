import AppDrawer from '@/components/navbar/drawer/drawer'
import ProductDetails from '@/components/product-details/product-details'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import IProduct from '@/interfaces/product/product.interface'
import productsServices from '@/services/product.services'
import theme from '@/styles/theme'
import { Container, Stack, ThemeProvider, Toolbar } from '@mui/material'
import { _id } from '@next-auth/mongodb-adapter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ObjectId } from 'mongodb'
import React from 'react'

const SingleProduct = (props: any) => {

          return (
                    <ThemeProvider theme={theme}>
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
                    </ThemeProvider>
          )
}

export default SingleProduct

export async function getStaticProps({ params }: any) {

          console.log('getstaticprops params', params);


          const product: IProduct = await productsServices().getProductById(params._id).then((product: any) => {
                    return product
          })

          return {
                    props: {
                              product: JSON.parse(JSON.stringify(product)),
                              ...(await serverSideTranslations(params.locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}

export const getStaticPaths = async () => {

          const data: any = await productsServices().getProductsForHomePage()

          const paths = data.map((product: IProduct) => ({
                    params: { _id: product._id.toString() }
          }))

          return {
                    paths,
                    fallback: true, // false or "blocking"
          };
}