import { Box, Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product/single-product";
import theme, { Colors } from "@/styles/theme";

export default function ProductMeta({ product, isScreenToMedium }: any) {

     const calculateDiscountedPrice = (price: number, discount: number): number => {
          return price - (price * discount) / 100;
     }

     return (
          <ProductMetaWrapper theme={theme}>
               <Typography variant='h6' lineHeight={2} textAlign='center'>
                    {product.name}
               </Typography>
               <Box textAlign="center">
                    {
                         product.discount ? (
                              <Box>
                                   <Typography
                                        variant={isScreenToMedium ? "caption" : "body1"}
                                        sx={{ fontSize: '1rem' }}
                                        component="div"
                                   >
                                        Originalna cena:
                                        <Typography
                                             sx={{
                                                  textDecoration: 'line-through',
                                             }}
                                             component="span"
                                        >
                                             {product.price} RSD
                                        </Typography>
                                   </Typography>
                                   <Typography
                                        variant={isScreenToMedium ? "caption" : "body1"}
                                        sx={{ fontSize: '1rem' }}
                                        component="div"
                                   >
                                        Cena sa popustom:
                                        <Typography
                                             sx={{
                                                  color: Colors.primary.main,
                                                  fontWeight: 'bold'
                                             }}
                                             component="span"
                                        >
                                             {calculateDiscountedPrice(product.price, product.discount)} RSD
                                        </Typography>
                                   </Typography>
                              </Box>
                         ) : (
                              <Typography
                                   variant={isScreenToMedium ? "caption" : "body1"}
                                   sx={{ fontSize: '1rem' }}
                                   component="div"
                              >
                                   Cena: {product.price} RSD
                              </Typography>
                         )
                    }
               </Box>
               <Typography
                    variant={isScreenToMedium ? "caption" : "body1"}
                    textAlign='center'
                    component="div"
               >
                    Pakovanje: {product.quantity + " " + product.quantityUnit}
               </Typography>
          </ProductMetaWrapper>
     );
}
