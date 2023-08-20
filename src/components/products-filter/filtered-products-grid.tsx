import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FilteredSingleProductMobile from "./filtered-single-product-mobile";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import FilteredSingleProductDesktop from "./filtered-single-product-desktop";
import { useTranslation } from "next-i18next";


export default function FilteredProductsGrid(props: any) {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const { t } = useTranslation('common')

          const renderProducts =
                    props.data.filterObject !== 'undefined' || props.data.filterObject !== null || props.data.filterObject.length != 0 ?
                              props.data.filterObject?.map((product: any) => (
                                        <Grid item key={product._id} xs={6} sm={4} md={3} display="flex" flexDirection={'column'} alignItems="center">
                                                  {isScreenToMedium ? (
                                                            <FilteredSingleProductMobile product={product} isScreenToMedium={isScreenToMedium} />
                                                  ) : (
                                                            <FilteredSingleProductDesktop product={product} isScreenToMedium={isScreenToMedium} />
                                                  )}
                                        </Grid>

                              ))
                              :
                              <Box sx={{ marginTop: '50px' }}>
                                        <Typography>
                                                  {t('filter-page.no-products')}
                                        </Typography>
                              </Box>

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
                    </Container >
          );
}

