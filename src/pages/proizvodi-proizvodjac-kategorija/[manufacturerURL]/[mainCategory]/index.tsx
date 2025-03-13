import { Container, Stack } from "@mui/material";
import { ProductsServices } from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import LoadingWheel from "@/components/loading/loading";
import theme from "@/styles/theme";
import { UIProvider } from "@/context/ui/ui.context";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { Seo } from "@/components/seo";

export default function MainCategoryAndManufacturerPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

     const router = useRouter()

     return (
          <DynamicThemeProvider theme={theme}>
               <Seo title={'Kategorija'} description={'Kategorija'} url={'https://www.apoteka-dar.rs/'} />
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
                              <ProductsFilter filterObject={props.products} routerQuery={router.query} />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider>
     )
}


export async function getStaticProps({ params }: any) {

     const productsByMainCategoryAndManufacturer: any = await ProductsServices().getProductsByMainCategoryAndManufacturer(params.mainCategory, params.manufacturerURL)

     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainCategoryAndManufacturer)),
          },
          revalidate: 10, // Revalidate at most once every 10 seconds
     }
}


export async function getStaticPaths() {
     // Fetch the data that determines the paths
     const paths = await ProductsServices().getAllPathsForMainCategoryAndManufacturer();
     return {
          paths: paths.map((path: any) => ({
               params: {
                    mainCategory: path.params.mainCategory,  // mainCategory
                    manufacturerURL: path.params.manufacturerURL,  // manufacturerURL
               }
          })),
          fallback: 'blocking',
     }
}
