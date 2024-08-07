import { Box, Container, Grid, Link, Typography } from "@mui/material";
import FilteredSingleProductMobile from "./filtered-single-product-mobile";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import FilteredSingleProductDesktop from "./filtered-single-product-desktop";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { Colors } from "@/styles/theme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function FilteredProductsGrid(props: any) {
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
     const router = useRouter();
     const [products, setProducts] = useState<any[]>(props.data || []);
     const [hasMore, setHasMore] = useState(true);

     useEffect(() => {
          // Check if there are more products to load
          setHasMore(props.data && props.data.length > 0);
          setProducts(props.data || []);
     }, [props.data]);

     const onLoadMore = async () => {
          const manufacturerURL = router.query.manufacturerURL as string;
          const mainCategory = router.query.mainCategory as string || 'prirodna-kozmetika';
          const midCategory = router.query.midCategory as string || 'alergija';
          const subCategory = router.query.subCategory as string || 'ostalo';
          const nextPart = parseInt(router.query.part as string) + 1 || 1;

          if (!manufacturerURL) {
               const paths = router.asPath.split('/').filter(Boolean);

               if (paths.length === 2) {
                    router.push(`/proizvodi/${mainCategory}?part=${nextPart}`);
               } else if (paths.length === 3) {
                    router.push(`/proizvodi/${mainCategory}/${midCategory}?part=${nextPart}`);
               } else if (paths.length === 4) {
                    router.push(`/proizvodi/${mainCategory}/${midCategory}/${subCategory}?part=${nextPart}`);
               }
          } else {
               await router.push(`/${manufacturerURL}/${mainCategory}?part=${nextPart}`);
          }
     };

     const renderProducts =
          props.data == undefined || props.data?.length == 0 ? (
               <Box sx={{ margin: '30px', paddingTop: '50px', color: Colors.primary }}>
                    <DoNotDisturbIcon />
               </Box>
          ) : (
               products?.map((product: any) => (
                    <Grid item key={product._id} xs={6} sm={4} md={3} display="flex" flexDirection={'column'} alignItems="center">
                         {isScreenToMedium ? (
                              <FilteredSingleProductMobile key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                         ) : (
                              <FilteredSingleProductDesktop key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                         )}
                    </Grid>
               ))
          );

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
               </Grid>
               {hasMore && (
                    <Box sx={{ display: 'flex', paddingTop: '50px', justifyContent: 'space-between' }}>
                         <Link onClick={() => router.back()} style={{ display: 'flex', alignItems: 'center' }}>
                              <ArrowBackIosIcon />
                              <Typography sx={{ cursor: 'pointer' }}>
                                   Nazad
                              </Typography>
                         </Link>
                         <Link onClick={() => onLoadMore()} style={{ display: 'flex', alignItems: 'center' }}>
                              <Typography sx={{ cursor: 'pointer' }}>
                                   Učitaj još
                              </Typography>
                              <ArrowForwardIosIcon />
                         </Link>
                    </Box>
               )}
               {!hasMore && (
                    <Box sx={{ display: 'flex', paddingTop: '50px', justifyContent: 'center' }}>
                         <Link onClick={() => router.back()} style={{ display: 'flex', alignItems: 'center' }}>
                              <ArrowBackIosIcon />
                              <Typography sx={{ cursor: 'pointer' }}>
                                   Nazad
                              </Typography>
                         </Link>
                    </Box>
               )}
          </Container>
     );
}
