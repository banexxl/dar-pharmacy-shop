import { Box, Typography } from "@mui/material";
import { Colors } from "@/styles/theme";
import IProduct from "@/interfaces/product/product.interface";

type ProductMetaProps = {
     product: IProduct;
     isScreenToMedium?: boolean;
}

export default function ProductMeta({ product, isScreenToMedium }: ProductMetaProps) {

     const calculateDiscountedPrice = (price: number, discount?: number): number => {
          if (discount === undefined) return price;
          return price - (price * discount) / 100;
     }

     return (
          <Box className="ProductMetaWrapper">
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
                                             {calculateDiscountedPrice(product.price, product.discountAmount)} RSD
                                        </Typography>
                                   </Typography>
                              </Box>
                         ) : (
                              <Typography
                                   variant={isScreenToMedium ? "caption" : "body1"}
                                   sx={{ fontSize: '1rem' }}
                                   component="div"
                              >
                                   Cena: {parseFloat(product.price.toString()).toFixed(2)} RSD
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
          </Box>
     );
}
