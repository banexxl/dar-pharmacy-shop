import { Container, Stack } from '@mui/material';
import { ProductsServices } from '@/services/product.services';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { UIProvider } from '@/context/ui/ui.context';
import SearchBox from '@/components/search/search';
import AppDrawer from '@/components/navbar/drawer/drawer';
import { Seo } from '@/components/seo';
import { slugToTitle, generateManufacturerTitle, generateManufacturerDescription, buildCanonicalUrl, generateCollectionPageStructuredData, generateBreadcrumbStructuredData } from '@/utils/seo-utils';

type Props = { products: any[]; manufacturerURL: string };

export default function ManufacturerPage({ products, manufacturerURL }: Props) {
  const router = useRouter();
  
  // Get manufacturer name from first product or format from URL
  const manufacturerName = products && products.length > 0 && products[0]?.manufacturer 
    ? products[0].manufacturer 
    : slugToTitle(manufacturerURL);
  
  const productCount = Array.isArray(products) ? products.length : 0;
  const manufacturerUrl = buildCanonicalUrl('proizvodi-proizvodjac-kategorija', manufacturerURL);
  
  const seoTitle = generateManufacturerTitle(manufacturerName);
  const seoDescription = generateManufacturerDescription(manufacturerName, productCount);
  
  // Generate breadcrumbs
  const breadcrumbs = [
    { name: 'Početna', url: buildCanonicalUrl() },
    { name: 'Proizvodi', url: buildCanonicalUrl('proizvodi') },
    { name: manufacturerName, url: manufacturerUrl }
  ];
  
  // Generate structured data
  const collectionStructuredData = generateCollectionPageStructuredData(
    manufacturerName,
    seoDescription,
    manufacturerUrl,
    productCount
  );
  
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
  
  return (
    <>
      <Seo 
        title={seoTitle}
        description={seoDescription}
        url={manufacturerUrl}
        keywords={`${manufacturerName}, proizvodi, apoteka DAR`}
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
  const manufacturers: string[] = await ProductsServices().getAllManufacturers();
  const paths = manufacturers.map((manufacturer: string) => ({ params: { manufacturerURL: manufacturer } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  const productsByManufacturer = await ProductsServices().getProductsByManufacturer(params.manufacturerURL);
  if (!productsByManufacturer) {
    return { redirect: { destination: '/404', permanent: false } };
  }
  return {
    props: { 
      products: JSON.parse(JSON.stringify(productsByManufacturer)),
      manufacturerURL: params.manufacturerURL
    },
    revalidate: 60,
  };
}

