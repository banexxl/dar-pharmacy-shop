
import { Typography, Box } from "@mui/material";
import { Colors } from "@/styles/theme";

export default function FilteredProductMeta({ product, isScreenToMedium }: any) {

     return (
          <Box className="ProductMetaWrapper">
               <Typography variant={"h6"} textAlign='center' sx={{ fontWeight: 700, color: Colors.neutral[900], lineHeight: 1.3 }}>
                    {product.name}
               </Typography>
               <Typography variant={isScreenToMedium ? "h6" : "h5"} textAlign='center' sx={{ color: Colors.primary.dark, fontWeight: 800, mt: 0.5 }}>
                    {parseFloat(product.price?.toString() || '0').toFixed(2)} RSD
               </Typography>
               <Typography variant={isScreenToMedium ? "caption" : "body2"} textAlign='center' sx={{ color: Colors.neutral[600], mt: 0.5 }}>
                    Pakovanje: {product.quantity + " " + product.quantity_unit}
               </Typography>
          </Box>
     );
}
