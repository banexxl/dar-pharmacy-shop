
import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product/single-product";
import { useTranslation } from "next-i18next";
import theme from "@/styles/theme";

export default function FilteredProductMeta({ product, isScreenToMedium }: any) {



     return (
          <ProductMetaWrapper theme={theme}>
               <Typography variant={"h6"} lineHeight={2} textAlign='center'>
                    {product.name}
               </Typography>
               <Typography variant={isScreenToMedium ? "caption" : "body1"} sx={{ fontSize: '1rem' }} textAlign='center'>
                    RSD: {product.price}
               </Typography>
               -----------------
               <Typography variant={isScreenToMedium ? "caption" : "body1"} textAlign='center'>
                    Pakovanje: {product.quantity}
               </Typography>
          </ProductMetaWrapper>
     );
}