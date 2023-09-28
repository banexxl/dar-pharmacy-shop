import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductsAllCategories from './products-categories'
import { useTranslation } from 'next-i18next'
import PriceFilterComponent from './product-filter-price'
import IProduct from '@/interfaces/product/product.interface'
import FilteredProductsGrid from './filtered-products-grid'

function ProductsFilter({ filterObject, routerQuery }: any) {

          const { t } = useTranslation('common')
          const [filteredProducts, setFilteredProducts] = useState();

          const handlePriceFilterChange = (filteredProducts: any) => {
                    setFilteredProducts(filteredProducts);
          };

          return (
                    <ProductsFilterContainer>
                              <ProductsFilters>
                                        <FilterTitleBox>
                                                  <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                            {t('filter-page.all-categories')}
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
                                                  <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>
                                                            {filterObject.length != 0 ? routerQuery : "Nije pronadjen ni jedan proizvod sa trenutnim filterom!"}
                                                  </Typography>
                                        </FilteredProductsTitle>
                                        <FilteredProductsGrid data={filterObject} />
                              </FilteredProducts>
                    </ProductsFilterContainer>
          )
}

export default ProductsFilter