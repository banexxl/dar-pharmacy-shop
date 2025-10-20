import { Container, Stack } from "@mui/material";
import { UIProvider } from "../../../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../../../components/navbar/drawer/drawer";
import SearchBox from "../../../../../components/search/search"
import { ProductsServices } from '@/services/product.services'
// removed per-page ThemeProvider; using global provider
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { Seo } from "@/components/seo";
import theme from "@/styles/theme";

export default function MainCategoryPage(props: any) {

}


export async function getServerSideProps({ query }: any) {

     const productsByMainMidSubCategory: any = await ProductsServices().getProductsByMainCategoryMidCategorySubCategory(query.mainCategory, query.midCategory, query.subCategory)

     // if (!productsByMainMidSubCategory || productsByMainMidSubCategory.length === 0) {
     //      return {
     //           redirect: {
     //                destination: `/proizvodi/${query.mainCategory}/${query.midCategory}/${query.subCategory}/`
     //           },
     //      };
     // }

     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainMidSubCategory)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}

