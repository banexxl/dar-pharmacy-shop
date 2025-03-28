import { Box, Button, Container, Grid } from "@mui/material";
import SingleProductMobile from "./single-product-mobile";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProductDesktop from "./single-product-desktop";


export default function Products(props: any) {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     //const cart: ICartItem[] = useSelector((state: any) => state.cart)

     const renderProducts = props.data?.map((product: any) => (
          <Grid key={product._id} size={{ xs: 6, sm: 4, md: 3 }} display="flex" flexDirection={'column'} alignItems="center">
               {isScreenToMedium ? (
                    <SingleProductMobile product={product} isScreenToMedium={isScreenToMedium} />
               ) : (
                    <SingleProductDesktop product={product} isScreenToMedium={isScreenToMedium} />
               )}
          </Grid>
     ));
     return (
          <Container sx={{ paddingBottom: '100px' }}>
               <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    justifyContent="center"
                    sx={{ margin: `20px 4px 10px 4px` }}
                    // columns={{ xs: 4, sm: 4, md: 6 }}
                    gridTemplateColumns={{ xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr' }}
               >
                    {renderProducts}
               </Grid>
          </Container >
     );
}

