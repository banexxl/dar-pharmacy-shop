import { Container, Stack } from "@mui/material";
import { UIProvider } from "../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../components/navbar/drawer/drawer";
import SearchBox from "../../../components/search/search"
import { ProductsServices } from '@/services/product.services'
// removed per-page ThemeProvider; using global provider
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Seo } from "@/components/seo";
import theme from "@/styles/theme";

export default function MainCategoryPage(props: any) {

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

