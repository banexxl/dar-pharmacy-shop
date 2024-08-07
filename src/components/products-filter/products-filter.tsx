import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter';
import { Breadcrumbs, Divider, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ProductsAllCategories from './products-categories';
import { useTranslation } from 'next-i18next';
import PriceFilterComponent from './product-filter-price';
import IProduct from '@/interfaces/product/product.interface';
import FilteredProductsGrid from './filtered-products-grid';
import Link from 'next/link';
import { Colors } from '@/styles/theme';

function ProductsFilter({ filterObject, routerQuery }: any) {
     console.log('filterObject', filterObject);
     console.log('routerQuery', routerQuery);

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
                              Sve kategorije
                         </Typography>
                    </FilterTitleBox>
                    <Divider />
                    <PriceFilterComponent products={filterObject} onPriceFilterChange={handlePriceFilterChange} />
                    <Divider />
                    <FilterCategoryAccordionBox>
                         <ProductsAllCategories />
                    </FilterCategoryAccordionBox>
               </ProductsFilters>
               <FilteredProducts>
                    <FilteredProductsTitle>
                         {filterObject?.length === 0 || filteredProducts?.length === 0 ? (
                              "Nije pronadjen ni jedan proizvod sa trenutnim filterom!"
                         ) : (
                              <Breadcrumbs>
                                   {manufacturerURL && (
                                        <Link href={`/${manufacturerURL}`}>
                                             <Typography sx={{ fontSize: '1rem', fontStyle: 'italic' }}>
                                                  {manufacturerURL}
                                             </Typography>
                                        </Link>
                                   )}
                                   {mainCategory && (
                                        <Link href={`/${mainCategory}`}>
                                             <Typography sx={{ fontSize: '1rem', fontStyle: 'italic' }}>
                                                  {mainCategory}
                                             </Typography>
                                        </Link>
                                   )}
                                   {part && (
                                        <Typography sx={{ color: Colors.dim_grey }}>
                                             {part}
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
