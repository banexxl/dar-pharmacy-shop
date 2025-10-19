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
          <Box className="ProductsFilterContainer">
               <Box className="ProductsFilters">
                    <Box className="FilterTitleBox">
                         <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
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
               <Box className="FilteredProducts">
                    <Typography className="FilteredProductsTitle">
                         {filterObject?.length === 0 || filteredProducts?.length === 0 ? (
                              "Nije pronađen ni jedan proizvod sa trenutnim filterom!"
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
                    </Typography>
                    <FilteredProductsGrid data={filteredProducts !== undefined ? filteredProducts : filterObject} />
               </Box>
          </Box>
     );
}

export default ProductsFilter;
