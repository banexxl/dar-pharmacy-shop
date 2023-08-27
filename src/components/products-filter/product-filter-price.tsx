import React, { useState } from 'react';
import { Slider, Typography, Grid, Box, Button } from '@mui/material';
import IProduct from '@/interfaces/product/product.interface';
import { useTranslation } from 'next-i18next';
import { PriceRangeBox } from '@/styles/products-filter/products-filter';

interface PriceFilterProps {
          products: IProduct[];
          onPriceFilterChange: (filteredProducts: IProduct[]) => void;
}

const PriceFilterComponent: React.FC<PriceFilterProps> = ({ products, onPriceFilterChange }) => {

          const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
          const { t } = useTranslation('common')


          const handlePriceChange = (event: Event, newValue: number | number[]) => {
                    if (Array.isArray(newValue)) {
                              setPriceRange(newValue as [number, number]);
                    }
          };

          const handleFilterProducts = () => {
                    // Filtering products based on the selected price range
                    const filteredProducts = products.filter(
                              (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
                    );
                    onPriceFilterChange(filteredProducts);
          };

          return (
                    <PriceRangeBox >
                              <Typography gutterBottom>{t('filter-page.price-range')}</Typography>
                              <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={10} marginLeft='6%'>
                                                  <Slider
                                                            value={priceRange}
                                                            onChange={handlePriceChange}
                                                            valueLabelDisplay="auto"
                                                            min={0}
                                                            max={10000}
                                                            step={100}
                                                            aria-labelledby="price-range-slider"
                                                  />
                                        </Grid>
                                        <Grid item xs={6}>
                                                  <Typography variant="subtitle2">{`RSD ${priceRange[0]}`}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                                  <Typography variant="subtitle2" align="right">{`RSD ${priceRange[1]}`}</Typography>
                                        </Grid>
                              </Grid>
                              <Button onClick={handleFilterProducts}>
                                        <Typography>
                                                  {t('filter-page.apply-filter')}
                                        </Typography>
                              </Button>
                    </PriceRangeBox>
          );
};

export default PriceFilterComponent;
