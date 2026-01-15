import { Container, Stack } from '@mui/material';
import { ProductsServices } from '@/services/product.services';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { UIProvider } from '@/context/ui/ui.context';
import SearchBox from '@/components/search/search';
import AppDrawer from '@/components/navbar/drawer/drawer';
import { Seo } from '@/components/seo';
import { slugToTitle, generateManufacturerTitle, generateManufacturerDescription, buildCanonicalUrl, generateCollectionPageStructuredData, generateBreadcrumbStructuredData } from '@/utils/seo-utils';

type Props = { products: any[]; manufacturerURL: string; mainCategory: string };

export default function ManufacturerMainCategoryPage({ products, manufacturerURL, mainCategory }: Props) {
  const router = useRouter();
  
  // Get manufacturer name from first product or format from URL
  const manufacturerName = products && products.length > 0 && products[0]?.manufacturer 
    ? products[0].manufacturer 
    : slugToTitle(manufacturerURL);
  
  const categoryName = slugToTitle(mainCategory);
  const productCount = Array.isArray(products) ? products.length : 0;
  const pageUrl = buildCanonicalUrl('proizvodi-proizvodjac-kategorija', manufacturerURL, mainCategory);
  
  const seoTitle = generateManufacturerTitle(manufacturerName, categoryName);
  const seoDescription = generateManufacturerDescription(manufacturerName, productCount, categoryName);
  
  // Generate breadcrumbs
  const breadcrumbs = [
    { name: 'Početna', url: buildCanonicalUrl() },
    { name: 'Proizvodi', url: buildCanonicalUrl('proizvodi') },
    { name: manufacturerName, url: buildCanonicalUrl('proizvodi-proizvodjac-kategorija', manufacturerURL) },
    { name: `${manufacturerName} - ${categoryName}`, url: pageUrl }
  ];
  
  // Generate structured data
  const collectionStructuredData = generateCollectionPageStructuredData(
    `${manufacturerName} - ${categoryName}`,
    seoDescription,
    pageUrl,
    productCount
  );
  
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
  
  return (
    <>
      <Seo 
        title={seoTitle}
        description={seoDescription}
        url={pageUrl}
        keywords={`${manufacturerName}, ${categoryName}, proizvodi, apoteka DAR`}
        structuredData={[collectionStructuredData, breadcrumbStructuredData]}
      />
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack>
          <UIProvider>
            <ProductsFilter filterObject={products} routerQuery={router.query} />
            <SearchBox />

          </UIProvider>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  // Expecting service to provide an array like [{ params: { manufacturerURL, mainCategory } }, ...]
  const pathsData = await ProductsServices().getAllPathsForMainCategoryAndManufacturer();
  const paths = pathsData.map((p: any) => ({ params: { manufacturerURL: p.params.manufacturerURL, mainCategory: p.params.mainCategory } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  const products = await ProductsServices().getProductsByMainCategoryAndManufacturer(params.mainCategory, params.manufacturerURL);
  if (!products) {
    return { redirect: { destination: '/404', permanent: false } };
  }
  return {
    props: { 
      products: JSON.parse(JSON.stringify(products)),
      manufacturerURL: params.manufacturerURL,
      mainCategory: params.mainCategory
    },
    revalidate: 60,
  };
}

