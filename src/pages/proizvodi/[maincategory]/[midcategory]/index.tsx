import { Inter } from '@next/font/google'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Navbar from "../../../../components/navbar/navbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../../../styles/theme";
import Banner from "../../../../components/banner/banner";
import Products from "../../../../components/products/products-grid";
import { UIProvider } from "../../../../context/ui/ui.context";
import Footer from "../../../../components/footer/footer";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../../components/navbar/drawer/drawer";
import Promotions from "../../../../components/promotions/promotions";
import SearchBox from "../../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MainCategoryPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

     const router = useRouter()
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          // Simulate an asynchronous operation, like fetching data
          setTimeout(() => {
               setIsLoading(false);
          }, 1000); // Adjust the duration as needed
     }, []);

     if (isLoading) {
          return <LoadingWheel />;
     }


     return (
          <DynamicThemeProvider theme={theme}>
               <Container
                    disableGutters
                    maxWidth="lg"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <SearchBox />
                              <ProductsFilter filterObject={props.products} routerQuery={router.asPath} />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider>
     )
}


export async function getServerSideProps({ query }: any) {

     const loadedParts = parseInt(query?.part as string) || 1

     const productsByMainMidCategory: any = await productsServices().getProductsByMainCategoryMidCategory(query.maincategory, query.midcategory, loadedParts)

     if (!productsByMainMidCategory || productsByMainMidCategory.length === 0) {
          return {
               redirect: {
                    destination: `/proizvodi/${query.maincategory}/${query.midcategory}/?part=1`
               },
          };
     }


     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainMidCategory)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}