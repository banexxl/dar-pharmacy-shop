import { Box, Button, Container, Grid } from "@mui/material";
import SingleProduct from "./single-product-mobile";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProductDesktop from "./single-product-desktop";
import ICartItem from "@/interfaces/cart/cart.interface";
import { useSelector } from "react-redux";


export default function Products(props: any) {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

          const cart: ICartItem[] = useSelector((state: any) => state.cart)

          const renderProducts = props.data?.map((product: any) => (
                    <Grid item key={product._id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
                              {isScreenToMedium ? (
                                        <SingleProduct product={product} isScreenToMedium={isScreenToMedium} />
                              ) : (
                                        <SingleProductDesktop product={product} isScreenToMedium={isScreenToMedium} />
                              )}

                    </Grid>
          ));
          return (
                    <Container>
                              <Grid
                                        container
                                        spacing={{ xs: 2, md: 3 }}
                                        justifyContent="center"
                                        sx={{ margin: `20px 4px 10px 4px` }}
                                        columns={{ xs: 4, sm: 8, md: 12 }}
                              >
                                        {renderProducts}
                              </Grid>
                    </Container>
          );
}

