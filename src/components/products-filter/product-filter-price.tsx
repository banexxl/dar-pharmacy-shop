import React, { useState } from 'react';
import { Slider, Typography, Grid, Box, Button } from '@mui/material';
import IProduct from '@/interfaces/product/product.interface';
import { useTranslation } from 'next-i18next';
import { PriceRangeBox } from '@/styles/products-filter/products-filter';

interface PriceFilterProps {
          products: IProduct[];
          onPriceFilterChange: (minPrice: any, maxPrice: any) => void;
}

const PriceFilterComponent: React.FC<PriceFilterProps> = ({ products, onPriceFilterChange }: any) => {

          const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
          const { t } = useTranslation('common')


          const handlePriceChange = (event: any, newPriceRange: any) => {
                    setPriceRange(newPriceRange);
          };

          const filterProductsByPriceRange = () => {
                    const [minPrice, maxPrice] = priceRange;
                    const filtered = products.filter((product: any) => {
                              const productPrice = product.price; // Adjust this according to your data structure
                              return productPrice >= minPrice && productPrice <= maxPrice;
                    });
                    onPriceFilterChange(filtered);
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
                              <Button onClick={filterProductsByPriceRange}>
                                        <Typography>
                                                  {t('filter-page.apply-filter')}
                                        </Typography>
                              </Button>
                    </PriceRangeBox>
          );
};

export default PriceFilterComponent;
