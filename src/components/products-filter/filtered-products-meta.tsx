
import { Typography, Box } from "@mui/material";

export default function FilteredProductMeta({ product, isScreenToMedium }: any) {

     return (
          <Box className="ProductMetaWrapper">
               <Typography variant={"h6"} lineHeight={2} textAlign='center'>
                    {product.name}
               </Typography>
               <Typography variant={isScreenToMedium ? "caption" : "body1"} sx={{ fontSize: '1rem' }} textAlign='center'>
                    RSD: {product.price}
               </Typography>
               -----------------
               <Typography variant={isScreenToMedium ? "caption" : "body1"} textAlign='center'>
                    Pakovanje: {product.quantity + " " + product.quantityUnit}
               </Typography>
          </Box>
     );
}