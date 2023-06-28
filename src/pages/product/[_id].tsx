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

          const { t } = useTranslation('common')

          //this way next js does not try to render theme provider on server (no hydration error : )
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })


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
                                                            <ProductDetails discount={props.product.discount} _id={props.product._id} availableStock={props.product.availableStock} category={props.product.category} description={props.product.description}
                                                                      imageURL={props.product.imageURL} ingredients={props.product.ingredients} instructions={props.product.instructions} name={props.product.name}
                                                                      price={props.product.price} quantity={props.product.quantity} warning={props.product.warning} productURL={props.product.productURL} manufacturer={props.product.manufacturer} />
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}

export default SingleProduct

export async function getStaticProps(context: any) {

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
                              ...(await serverSideTranslations(context.locale, ['common'], null, ['en-US', 'sr-RS'])),
                    },
          }
}

export const getStaticPaths = async (context: any) => {

          //context { locales: ['sr-RS', 'en-US'], defaultLocale: 'sr-RS' }

          const productsByCategory: any = await productsServices().getProductsByMainCategory('Kosa, koža i nokti')



          const productsOnDiscount: any = await productsServices().getProductsByDiscount()

          const finalList = [
                    ...productsByCategory,
                    ...productsOnDiscount
          ]

          console.log(finalList);

          const paths = finalList.flatMap((product: any) =>
                    context.locales.map((locale: any) => ({
                              params: { _id: product._id.toString() },
                              locale,
                    }))
          );

          return {
                    paths,
                    fallback: false, // false or "blocking"
          };
}