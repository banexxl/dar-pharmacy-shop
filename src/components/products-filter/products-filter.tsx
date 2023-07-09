import { FilterCategoryAccordionBox, FilterPriceAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Box } from '@mui/material'
import React from 'react'
import ProductsAllCategories from './products-categories'

function ProductsFilter(props: any) {

          //props je "{filterObject: 'Apoteka'}"

          return (
                    <ProductsFilterContainer>
                              <ProductsFilters>
                                        <FilterTitleBox>
                                                  Sve kategorije
                                        </FilterTitleBox>
                                        <FilterCategoryAccordionBox>
                                                  <ProductsAllCategories></ProductsAllCategories>
                                        </FilterCategoryAccordionBox>
                                        {/* <FilterPriceAccordionBox>

                                        </FilterPriceAccordionBox> */}
                              </ProductsFilters>
                              <FilteredProducts>
                                        <FilteredProductsTitle>
                                                  Na sta smo kliknuli
                                        </FilteredProductsTitle>
                              </FilteredProducts>
                    </ProductsFilterContainer>
          )
}

export default ProductsFilter