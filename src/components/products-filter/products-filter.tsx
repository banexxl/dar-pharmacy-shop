import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Breadcrumbs, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductsAllCategories from './products-categories'
import { useTranslation } from 'next-i18next'
import PriceFilterComponent from './product-filter-price'
import IProduct from '@/interfaces/product/product.interface'
import FilteredProductsGrid from './filtered-products-grid'
import Link from 'next/link'
import { Colors } from '@/styles/theme'

function ProductsFilter({ filterObject, routerQuery }: any) {

     console.log('routerQuery', routerQuery);
     // Split the URL at the '?' to separate the path and the query string
     const pageNumber = routerQuery.split('=')[1];
     const routerQuerySplit = routerQuery.split('/');

     // Split the path into segments
     console.log('pathSegments', routerQuerySplit);

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
                         <Typography sx={{ fontSize: '20px', fontWeight: 'bold', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                              {filterObject?.length == 0 || filteredProducts?.length == 0 ? "Nije pronadjen ni jedan proizvod sa trenutnim filterom!" :
                                   <Breadcrumbs>
                                        <Link
                                             href="/proizvodi/prirodna-kozmetika"
                                        >
                                             <Typography>
                                                  {routerQuerySplit[0]}
                                             </Typography>
                                        </Link>
                                        <Link href="/proizvodi">
                                             <Typography>
                                                  {routerQuerySplit[1]}
                                             </Typography>
                                        </Link>
                                        <Link href="/proizvodi">
                                             <Typography>
                                                  {routerQuerySplit[2]?.split('?')[0]}
                                             </Typography>
                                        </Link>
                                        <Typography sx={{ color: Colors.dim_grey }}>{pageNumber}</Typography>
                                   </Breadcrumbs>
                              }
                         </Typography>
                    </FilteredProductsTitle>
                    <FilteredProductsGrid data={filteredProducts != undefined ? filteredProducts : filterObject} />
               </FilteredProducts>
          </ProductsFilterContainer>
     )
}

export default ProductsFilter