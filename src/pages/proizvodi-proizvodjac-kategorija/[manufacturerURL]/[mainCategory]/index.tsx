import { Container, Stack } from '@mui/material';
import { ProductsServices } from '@/services/product.services';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { UIProvider } from '@/context/ui/ui.context';
import SearchBox from '@/components/search/search';
import AppDrawer from '@/components/navbar/drawer/drawer';
import { Seo } from '@/components/seo';

type Props = { products: any[] };

export default function ManufacturerMainCategoryPage({ products }: Props) {
  const router = useRouter();
  return (
    <>
      <Seo title={'Proizvodi po proizvođaču i kategoriji'} description={'Pregled proizvoda po proizvođaču i kategoriji'} url={'https://www.apoteka-dar.rs/'} />
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
    props: { products: JSON.parse(JSON.stringify(products)) },
    revalidate: 60,
  };
}

