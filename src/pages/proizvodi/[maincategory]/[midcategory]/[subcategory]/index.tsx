import { Container, Stack } from "@mui/material";
import theme from "../../../../../styles/theme";
import { UIProvider } from "../../../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../../../components/navbar/drawer/drawer";
import SearchBox from "../../../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';

export default function MainCategoryPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

     const router = useRouter()

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

     const productsByMainMidSubCategory: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory(query.maincategory, query.midcategory, query.subcategory, loadedParts)

     if (!productsByMainMidSubCategory || productsByMainMidSubCategory.length === 0) {
          return {
               redirect: {
                    destination: `/proizvodi/${query.maincategory}/${query.midcategory}/${query.subcategory}/?part=1`
               },
          };
     }

     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainMidSubCategory)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}