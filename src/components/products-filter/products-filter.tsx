import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductsAllCategories from './products-categories'
import { useTranslation } from 'next-i18next'
import PriceFilterComponent from './product-filter-price'
import IProduct from '@/interfaces/product/product.interface'
import FilteredProductsGrid from './filtered-products-grid'

function ProductsFilter({ filterObject, routerQuery }: any) {


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
                              {filterObject?.length == 0 || filteredProducts?.length == 0 ? "Nije pronadjen ni jedan proizvod sa trenutnim filterom!" : routerQuery}
                         </Typography>
                    </FilteredProductsTitle>
                    <FilteredProductsGrid data={filteredProducts != undefined ? filteredProducts : filterObject} />

               </FilteredProducts>
          </ProductsFilterContainer>
     )
}

export default ProductsFilter