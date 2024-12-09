import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter';
import { Breadcrumbs, Divider, Typography } from '@mui/material';
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
          <ProductsFilterContainer>
               <ProductsFilters>
                    <FilterTitleBox>
                         <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                              Izaberi iz liste proizvoda
                         </Typography>
                    </FilterTitleBox>
                    <Divider />
                    {/* <PriceFilterComponent products={filterObject} onPriceFilterChange={handlePriceFilterChange} /> */}
                    <Divider />
                    <FilterCategoryAccordionBox>
                         <ProductsAllCategories />
                    </FilterCategoryAccordionBox>
               </ProductsFilters>
               <FilteredProducts>
                    <FilteredProductsTitle>
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
                    </FilteredProductsTitle>
                    <FilteredProductsGrid data={filteredProducts !== undefined ? filteredProducts : filterObject} />
               </FilteredProducts>
          </ProductsFilterContainer>
     );
}

export default ProductsFilter;
