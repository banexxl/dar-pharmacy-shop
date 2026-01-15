import { Container, Stack } from "@mui/material";
import theme from "../../../../styles/theme";
import { UIProvider } from "../../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import SearchBox from "../../../../components/search/search"
import { ProductsServices } from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { Seo } from "@/components/seo";
import { slugToTitle, generateCategoryTitle, generateCategoryDescription, buildCanonicalUrl, generateCollectionPageStructuredData, generateBreadcrumbStructuredData } from '@/utils/seo-utils';

export default function MainCategoryPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

     const router = useRouter()

     const mainCategory = router.query.mainCategory as string;
     const midCategory = router.query.midCategory as string;
     const mainCategoryName = slugToTitle(mainCategory || '');
     const midCategoryName = slugToTitle(midCategory || '');
     const productCount = Array.isArray(props.products) ? props.products.length : 0;
     const categoryUrl = buildCanonicalUrl('proizvodi', mainCategory, midCategory);

     const seoTitle = generateCategoryTitle(mainCategoryName, midCategoryName);
     const seoDescription = generateCategoryDescription(mainCategoryName, productCount, midCategoryName);

     // Generate breadcrumbs
     const breadcrumbs = [
          { name: 'Početna', url: buildCanonicalUrl() },
          { name: 'Proizvodi', url: buildCanonicalUrl('proizvodi') },
          { name: mainCategoryName, url: buildCanonicalUrl('proizvodi', mainCategory) },
          { name: midCategoryName, url: categoryUrl }
     ];

     // Generate structured data
     const collectionStructuredData = generateCollectionPageStructuredData(
          midCategoryName,
          seoDescription,
          categoryUrl,
          productCount
     );

     const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

     return (
          <DynamicThemeProvider theme={theme}>
               <Seo
                    title={seoTitle}
                    description={seoDescription}
                    url={categoryUrl}
                    keywords={`${midCategoryName}, ${mainCategoryName}, proizvodi, apoteka DAR`}
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
     )
}


export async function getServerSideProps({ query }: any) {

     const productsByMainMidCategory: any = await ProductsServices().getProductsByMainCategoryMidCategory(query.mainCategory, query.midCategory)

     // if (!productsByMainMidCategory || productsByMainMidCategory.length === 0) {
     //      return {
     //           redirect: {
     //                destination: `/proizvodi/${query.mainCategory}/${query.midCategory}/`
     //           },
     //      };
     // }


     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainMidCategory)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}