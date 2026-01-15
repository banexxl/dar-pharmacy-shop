import { Container, Stack } from "@mui/material";
import theme from "../../../styles/theme";
import { UIProvider } from "../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../components/navbar/drawer/drawer";
import SearchBox from "../../../components/search/search"
import { ProductsServices } from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Seo } from "@/components/seo";
import { slugToTitle, generateCategoryTitle, generateCategoryDescription, buildCanonicalUrl, generateCollectionPageStructuredData, generateBreadcrumbStructuredData } from '@/utils/seo-utils';

export default function MainCategoryPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

     const router = useRouter()
     const [loading, setLoading] = useState(false)
     
     const mainCategory = router.query.mainCategory as string;
     const categoryName = slugToTitle(mainCategory || '');
     const productCount = Array.isArray(props.products) ? props.products.length : 0;
     const categoryUrl = buildCanonicalUrl('proizvodi', mainCategory);
     
     const seoTitle = generateCategoryTitle(categoryName);
     const seoDescription = generateCategoryDescription(categoryName, productCount);
     
     // Generate breadcrumbs
     const breadcrumbs = [
          { name: 'Početna', url: buildCanonicalUrl() },
          { name: 'Proizvodi', url: buildCanonicalUrl('proizvodi') },
          { name: categoryName, url: categoryUrl }
     ];
     
     // Generate structured data
     const collectionStructuredData = generateCollectionPageStructuredData(
          categoryName,
          seoDescription,
          categoryUrl,
          productCount
     );
     
     const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

     return (
          <>
               {
                    loading ?
                         <LoadingWheel /> :
                         <DynamicThemeProvider theme={theme}>
                              <Seo 
                                   title={seoTitle}
                                   description={seoDescription}
                                   url={categoryUrl}
                                   keywords={`${categoryName}, proizvodi, apoteka DAR`}
                                   structuredData={[collectionStructuredData, breadcrumbStructuredData]}
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
                                             <SearchBox />
                                             <ProductsFilter filterObject={props.products} routerQuery={router.query} />

                                        </UIProvider>
                                   </Stack>
                              </Container>
                         </DynamicThemeProvider>
               }
          </>
     )
}

export async function getServerSideProps({ query }: any) {

     const productsByMainCategoryLimited: any = await ProductsServices().getProductsByMainCategory(query.mainCategory)
     // notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page

     // if (!productsByMainCategoryLimited || productsByMainCategoryLimited.length === 0) {
     //      return {
     //           redirect: {
     //                destination: `/proizvodi/${query.mainCategory}`
     //           },
     //      };
     // }
     // mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
     // revalidate bi trebao da ponovo odradi getstaticprops logiku

     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainCategoryLimited)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}