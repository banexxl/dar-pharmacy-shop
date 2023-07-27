import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Box } from '@mui/material'
import React from 'react'
import ProductsAllCategories from './products-categories'
import { useTranslation } from 'next-i18next'
import PriceFilterComponent from './product-filter-price'
import IProduct from '@/interfaces/product/product.interface'
import Products from '../products/products-grid'

function ProductsFilter(props: any) {

          const { t } = useTranslation('common')
          console.log('props iz komponente', props);


          return (
                    <ProductsFilterContainer>
                              <ProductsFilters>
                                        <FilterTitleBox>
                                                  {t('filter-page.all-categories')}
                                        </FilterTitleBox>
                                        <PriceFilterComponent products={[]} onPriceFilterChange={function (filteredProducts: IProduct[]): void {
                                                  throw new Error('Function not implemented.')
                                        }} />
                                        <FilterCategoryAccordionBox>
                                                  <ProductsAllCategories></ProductsAllCategories>
                                        </FilterCategoryAccordionBox>
                              </ProductsFilters>
                              <FilteredProducts>
                                        <FilteredProductsTitle>
                                                  Na sta smo kliknuli
                                        </FilteredProductsTitle>
                                        <Products data={props.filterObject} />
                              </FilteredProducts>
                    </ProductsFilterContainer>
          )
}

export default ProductsFilter