import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ProductsAllCategories from './products-categories'
import { useTranslation } from 'next-i18next'
import PriceFilterComponent from './product-filter-price'
import IProduct from '@/interfaces/product/product.interface'
import Products from '../products/products-grid'
import FilteredProductsGrid from './filtered-products-grid'
import { useRouter } from 'next/router'

function ProductsFilter(props: any) {

          const { t } = useTranslation('common')
          const router = useRouter()

          return (
                    <ProductsFilterContainer>
                              <ProductsFilters>
                                        <FilterTitleBox>
                                                  <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                            {t('filter-page.all-categories')}
                                                  </Typography>
                                        </FilterTitleBox>
                                        <Divider />
                                        <PriceFilterComponent products={[]} onPriceFilterChange={(filteredProducts: IProduct[]) => {
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
                                                            {
                                                                      props.filterObject.length !== 0 ?
                                                                                (props.filterObject[0].mainCategory + '/' + props.filterObject[0].midCategory + '/' + props.filterObject[0].subCategory).toUpperCase()
                                                                                :
                                                                                router.asPath.toUpperCase()
                                                            }
                                                  </Typography>
                                        </FilteredProductsTitle>
                                        <FilteredProductsGrid data={props.filterObject} />
                              </FilteredProducts>
                    </ProductsFilterContainer>
          )
}

export default ProductsFilter