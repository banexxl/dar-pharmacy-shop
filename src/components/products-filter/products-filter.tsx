import { FilterCategoryAccordionBox, FilterPriceAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Box } from '@mui/material'
import React from 'react'
import ProductsAllCategories from './products-categories'

function ProductsFilter(props: any) {



          return (
                    <ProductsFilterContainer>
                              <ProductsFilters>
                                        <FilterTitleBox>
                                                  Sve kategorije
                                        </FilterTitleBox>
                                        <FilterCategoryAccordionBox>
                                                  <ProductsAllCategories></ProductsAllCategories>
                                        </FilterCategoryAccordionBox>
                                        <FilterPriceAccordionBox>

                                        </FilterPriceAccordionBox>
                              </ProductsFilters>
                              <FilteredProducts>
                                        <FilteredProductsTitle>
                                                  asasasas
                                        </FilteredProductsTitle>
                              </FilteredProducts>
                    </ProductsFilterContainer>
          )
}

export default ProductsFilter