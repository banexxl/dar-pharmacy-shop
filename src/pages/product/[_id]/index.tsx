import AppDrawer from '@/components/navbar/drawer/drawer'
import ProductDetails from '@/components/product-details/product-details'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import IProduct from '@/interfaces/product/product.interface'
import productsServices from '@/services/product.services'
import theme from '@/styles/theme'
import { Container, Stack, ThemeProvider, Toolbar } from '@mui/material'
import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const SingleProduct = (props: any) => {

          console.log('data from product props', props);

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
                                                            <ProductDetails _id={props._id} availableStock={props.availableStock} category={props.category} description={props.description}
                                                                      imageURL={props.imageURL} ingredients={props.ingredients} instructions={props.instructions} name={props.name}
                                                                      price={props.price} quantity={props.quantity} warning={props.warning} productURL={props.productURL}
                                                            />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider>
          )
}

export default SingleProduct

export async function getStaticProps({ locale }: any, _id: string) {


          const product: IProduct = await productsServices().getProductById(_id).then((product: any) => {
                    return product
          })

          console.log(product);

          //notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          //redirect: {
          //           destination: "/nodata"
          // }  mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          //revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              product: JSON.parse(JSON.stringify(product)),
                              ...(await serverSideTranslations(locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}

export const getStaticPaths = async () => {

          let ids = []

          await productsServices().getProductsForHomePage().then((products: any) => {
                    products.forEach((element: IProduct) => {
                              var id = element._id.valueOf()
                              ids.push(id)
                    });
          })

          return {
                    paths: [
                              {
                                        params: {
                                                  _id: 'next.js',
                                        },
                              }, // See the "paths" section below
                    ],
                    fallback: true, // false or "blocking"
          };
}