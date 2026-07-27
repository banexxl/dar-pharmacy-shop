import { Box, Typography } from "@mui/material";
import { Colors } from "@/styles/theme";
import Product from "@/interfaces/product/product.interface";

type ProductMetaProps = {
     product: Product;
     isScreenToMedium?: boolean;
}

export default function ProductMeta({ product, isScreenToMedium }: ProductMetaProps) {

     const calculateDiscountedPrice = (price: number, discount?: number): number => {
          if (discount === undefined) return price;
          return price - (price * discount) / 100;
     }

     return (
          <Box className="ProductMetaWrapper">
               <Typography variant='h4' lineHeight={1.3} textAlign='center' sx={{ fontWeight: 700, color: Colors.neutral[900], mb: 1 }}>
                    {product.name}
               </Typography>
               <Box textAlign="center" sx={{ mb: 1 }}>
                    {
                         product.discount ? (
                              <Box>
                                   <Typography
                                        variant={isScreenToMedium ? "caption" : "body2"}
                                        sx={{ color: Colors.neutral[600] }}
                                        component="div"
                                   >
                                        Originalna cena:
                                        <Typography
                                             sx={{
                                                  textDecoration: 'line-through',
                                                  color: Colors.neutral[500]
                                             }}
                                             component="span"
                                        >
                                             {product.price} RSD
                                        </Typography>
                                   </Typography>
                                   <Typography variant={isScreenToMedium ? 'h6' : 'h5'} sx={{ color: Colors.primary.dark, fontWeight: 800 }}>
                                        {calculateDiscountedPrice(product.price, product.discount_amount ? product.discount_amount : 0)} RSD
                                   </Typography>
                              </Box>
                         ) : (
                              <Typography variant={isScreenToMedium ? 'h6' : 'h5'} sx={{ color: Colors.primary.dark, fontWeight: 800 }}>
                                   {parseFloat(product.price.toString()).toFixed(2)} RSD
                              </Typography>
                         )
                    }
               </Box>
               <Typography variant='body2' textAlign='center' sx={{ color: Colors.neutral[600] }}>
                    Pakovanje: {product.quantity + " " + product.quantity_unit}
               </Typography>
          </Box>
     );
}
