import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import FilteredSingleProductMobile from "./filtered-single-product-mobile";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import FilteredSingleProductDesktop from "./filtered-single-product-desktop";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { Colors } from "@/styles/theme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function FilteredProductsGrid(props: any) {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const router = useRouter();
     const [products, setProducts] = useState<any[]>(props.data || []);

     const onLoadMore = async () => {
          const nextPart = parseInt(router.query.part as string) + 1 || 1
          const maincategory = router.query.maincategory || 'prirodna-kozmetika';

          await router.push(`/proizvodi/${maincategory}?part=${nextPart}`);
     };

     const renderProducts =
          props.data == undefined || props.data?.length == 0 ?
               <Box sx={{ margin: '30px', paddingTop: '50px', color: Colors.primary }}>
                    <DoNotDisturbIcon />
               </Box>
               :
               products?.map((product: any) => (
                    <Grid item key={product._id} xs={6} sm={4} md={3} display="flex" flexDirection={'column'} alignItems="center">
                         {isScreenToMedium ? (
                              <FilteredSingleProductMobile key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                         ) : (
                              <FilteredSingleProductDesktop key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                         )}
                    </Grid>

               ))

     return (
          <Container sx={{ paddingBottom: '100px' }}>
               <Grid
                    container
                    spacing={{ xs: 2, md: 3, lg: 4 }}
                    justifyContent="center"
                    sx={{ margin: `20px 4px 10px 4px` }}
                    // columns={{ xs: 4, sm: 4, md: 6 }}
                    gridTemplateColumns={{ xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr' }}
               >
                    {renderProducts}

               </Grid>
               <Box sx={{ display: 'flex', paddingTop: '50px', justifyContent: 'center' }}>
                    <Link onClick={() => onLoadMore()} >
                         <Typography sx={{ cursor: 'pointer' }}>
                              Učitaj još
                         </Typography>
                    </Link>
               </Box>
          </Container >
     );
}

