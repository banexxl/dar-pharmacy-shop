import { Box, Breadcrumbs, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProductsAllCategories from './products-categories';
import PriceFilterComponent from './product-filter-price';
import FilteredProductsGrid from './filtered-products-grid';

function ProductsFilter({ filterObject, routerQuery }: any) {

     // Parse the URL
     const manufacturerURL = routerQuery?.manufacturerURL || '';
     const mainCategory = routerQuery?.mainCategory || '';
     const part = routerQuery?.part || '';

     const [filteredProducts, setFilteredProducts] = useState<any>();

     const handlePriceFilterChange = (filteredProducts: any) => {
          setFilteredProducts(filteredProducts);
     };

     return (
          <Box
               className="ProductsFilterContainer"
               sx={{
                    display: { xs: 'block', md: 'flex' },
                    alignItems: 'flex-start',
                    gap: { xs: 2, md: 4 },
               }}
          >
               <Box
                    className="ProductsFilters"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        flex: { md: '0 0 280px' },
                        width: { md: 280 },
                        position: { md: 'sticky' },
                        top: { md: 96 },
                    }}
               >
                    <Box className="FilterTitleBox">
                         <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                              Izaberi iz liste proizvoda
                         </Typography>
                    </Box>
                    <Divider />
                    {/* <PriceFilterComponent products={filterObject} onPriceFilterChange={handlePriceFilterChange} /> */}
                    <Divider />
                    <Box className="FilterCategoryAccordionBox">
                         <ProductsAllCategories />
                    </Box>
               </Box>
               <Box className="FilteredProducts" sx={{ flex: 1, width: '100%' }}>
                    <Box className="FilteredProductsTitle">
                         {(filterObject?.length === 0 || filteredProducts?.length === 0) ? (
                              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                   Nije pronađen ni jedan proizvod sa trenutnim filterom!
                              </Typography>
                         ) : (
                              <Breadcrumbs>
                                   {manufacturerURL && (
                                        <Typography sx={{ fontSize: '1rem', fontStyle: 'italic' }}>
                                             {manufacturerURL}
                                        </Typography>
                                   )}
                                   {mainCategory && (
                                        <Typography sx={{ fontSize: '1rem', fontStyle: 'italic' }}>
                                             {mainCategory}
                                        </Typography>
                                   )}
                              </Breadcrumbs>
                         )}
                    </Box>
                    <FilteredProductsGrid data={filteredProducts !== undefined ? filteredProducts : filterObject} />
               </Box>
          </Box>
     );
}

export default ProductsFilter;


