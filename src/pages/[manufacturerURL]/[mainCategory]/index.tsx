import { Container, Stack } from "@mui/material";
import theme from "../../../styles/theme";
import { UIProvider } from "../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../components/navbar/drawer/drawer";
import SearchBox from "../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';

export default function MainCategoryAndManufacturerPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

     const router = useRouter()
     // const [isLoading, setIsLoading] = useState(true);

     // useEffect(() => {
     //      // Simulate an asynchronous operation, like fetching data
     //      setTimeout(() => {
     //           setIsLoading(false);
     //      }, 1000); // Adjust the duration as needed
     // }, []);

     // if (isLoading) {
     //      return <LoadingWheel />;
     // }


     return (
          <DynamicThemeProvider theme={theme}>
               <title>Apoteka DAR - Proizvodi</title>
               <meta name="description" content="Apoteka Dar Kragujevac" />
               <meta name="keywords" content="apoteka, dar, kragujevac" />
               <meta property="og:title" content="Apoteka DAR" />
               <meta property="og:description" content="Apoteka Dar Kragujevac" />
               <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
               <meta property="og:url" content="https://www.apoteka-dar.rs" />
               <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
               <meta name="twitter:title" content="Apoteka DAR" />
               <meta name="twitter:description" content="Apoteka DAR - Proizvodi" />
               <meta name="twitter:image" content="/public/images/home-page/apotekaDar.jpg" />
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


export async function getServerSideProps({ query }: any) {

     const loadedParts = parseInt(query?.part as string) || 1

     const productsByMainCategoryAndManufacturer: any = await productsServices().getProductsByMainCategoryAndManufacturer(query.mainCategory, query.manufacturerURL, loadedParts)

     // if (!productsByMainCategoryAndManufacturer || productsByMainCategoryAndManufacturer.length === 0) {
     //      return {
     //           redirect: {
     //                destination: `/${query.manufacturerURL}/?part=1`
     //           },
     //      };
     // }


     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainCategoryAndManufacturer)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}