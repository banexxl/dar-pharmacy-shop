import { Container, Stack } from "@mui/material";
import { UIProvider } from "../../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../../components/navbar/drawer/drawer";
import SearchBox from "../../../../components/search/search"
import { ProductsServices } from '@/services/product.services'
// removed per-page ThemeProvider; using global provider
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Seo } from "@/components/seo";
import theme from "@/styles/theme";

export default function MainCategoryPage(props: any) {

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

