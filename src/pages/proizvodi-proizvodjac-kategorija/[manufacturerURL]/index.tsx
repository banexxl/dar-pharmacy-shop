import { Container, Stack } from '@mui/material';
import { ProductsServices } from '@/services/product.services';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { UIProvider } from '@/context/ui/ui.context';
import SearchBox from '@/components/search/search';
import AppDrawer from '@/components/navbar/drawer/drawer';
import { Seo } from '@/components/seo';

type Props = { products: any[] };

export default function ManufacturerPage({ products }: Props) {
  const router = useRouter();
  return (
    <>
      <Seo title={'Proizvodi po proizvođaču'} description={'Pregled proizvoda po proizvođaču'} url={'https://www.apoteka-dar.rs/'} />
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack>
          <UIProvider>
            <ProductsFilter filterObject={products} routerQuery={router.query} />
            <SearchBox />
            <AppDrawer isScreenToMedium={false} />
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
    props: { products: JSON.parse(JSON.stringify(productsByManufacturer)) },
    revalidate: 60,
  };
}

