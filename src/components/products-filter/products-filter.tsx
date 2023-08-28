import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Divider, Typography } from '@mui/material'
import React from 'react'
import ProductsAllCategories from './products-categories'
import { useTranslation } from 'next-i18next'
import PriceFilterComponent from './product-filter-price'
import IProduct from '@/interfaces/product/product.interface'
import FilteredProductsGrid from './filtered-products-grid'

function ProductsFilter({ filterObject, routerQuery }: any) {

          const { t } = useTranslation('common')
          console.log('props iz filtera', filterObject, routerQuery);

          return (
                    <ProductsFilterContainer>
                              <ProductsFilters>
                                        <FilterTitleBox>
                                                  <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                            {t('filter-page.all-categories')}
                                                  </Typography>
                                        </FilterTitleBox>
                                        <Divider />
                                        <PriceFilterComponent products={filterObject} onPriceFilterChange={(filteredProducts: IProduct[]) => {
                                                  throw new Error('Function not implemented.')
                                        }} />
                                        <Divider />
                                        <FilterCategoryAccordionBox>
                                                  <ProductsAllCategories></ProductsAllCategories>
                                        </FilterCategoryAccordionBox>
                              </ProductsFilters>
                              <FilteredProducts>
                                        <FilteredProductsTitle>
                                                  <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>
                                                            {routerQuery}
                                                  </Typography>
                                        </FilteredProductsTitle>
                                        <FilteredProductsGrid data={filterObject} />
                              </FilteredProducts>
                    </ProductsFilterContainer>
          )
}

export default ProductsFilter