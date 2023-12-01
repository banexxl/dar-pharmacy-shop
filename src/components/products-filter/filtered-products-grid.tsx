import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FilteredSingleProductMobile from "./filtered-single-product-mobile";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import FilteredSingleProductDesktop from "./filtered-single-product-desktop";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { useTranslation } from "next-i18next";
import { Colors } from "@/styles/theme";
import { useEffect, useState } from "react";

export default function FilteredProductsGrid(props: any) {
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));

     const [displayedProducts, setDisplayedProducts] = useState<any>([]);
     const [remainingProducts, setRemainingProducts] = useState<any>([]);
     const itemsPerPage = 10;

     useEffect(() => {
          initialLoad(); // Load initial products when the component mounts
     }, []);

     const loadMore = () => {
          const nextProducts = remainingProducts.slice(0, itemsPerPage);
          setDisplayedProducts([...displayedProducts, ...nextProducts]);
          setRemainingProducts(remainingProducts.slice(itemsPerPage));
     };

     const initialLoad = () => {
          const initialProducts = props.data.slice(0, itemsPerPage);
          setDisplayedProducts(initialProducts);
          setRemainingProducts(props.data.slice(itemsPerPage));
     };

     const renderProducts =
          displayedProducts.length > 0 &&
          displayedProducts.map((product: any) => (
               <Grid item key={product._id} xs={6} sm={4} md={3} display="flex" flexDirection={'column'} alignItems="center">
                    {isScreenToMedium ? (
                         <FilteredSingleProductMobile key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                    ) : (
                         <FilteredSingleProductDesktop key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                    )}
               </Grid>
          ));

     return (
          <Container sx={{ paddingBottom: '100px' }}>
               <Grid
                    container
                    spacing={{ xs: 2, md: 3, lg: 4 }}
                    justifyContent="center"
                    sx={{ margin: `20px 4px 10px 4px` }}
                    gridTemplateColumns={{ xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr' }}
               >
                    {renderProducts}
                    {remainingProducts.length > 0 && (
                         <Grid item xs={12} display="flex" justifyContent="center">
                              <Button onClick={loadMore} sx={{ marginTop: '60px' }}>Load more</Button>
                         </Grid>
                    )}
               </Grid>
               {displayedProducts.length === 0 && (
                    <Box sx={{ margin: '30px', paddingTop: '50px', color: Colors.primary }}>
                         <DoNotDisturbIcon />
                    </Box>
               )}
          </Container>
     );
}