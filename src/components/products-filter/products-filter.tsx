import { FilterCategoryAccordionBox, FilterTitleBox, FilteredProducts, FilteredProductsTitle, ProductsFilterContainer, ProductsFilters } from '@/styles/products-filter/products-filter'
import { Divider, Typography } from '@mui/material'
import React from 'react'
import ProductsAllCategories from './products-categories'
import { useTranslation } from 'next-i18next'
import PriceFilterComponent from './product-filter-price'
import IProduct from '@/interfaces/product/product.interface'
import FilteredProductsGrid from './filtered-products-grid'

function ProductsFilter(props: any) {

          const { t } = useTranslation('common')

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
                                                  {/* <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>
                                                            {
                                                                      props.length !== 0 ?
                                                                                (
                                                                                          props[0].mainCategory !== "" ?
                                                                                                    props[0].mainCategory + '/'
                                                                                                    :
                                                                                                    props[0].midCategory !== "" ?
                                                                                                              props[0].midCategory + '/'
                                                                                                              :
                                                                                                              props[0].subCategory !== "" ?
                                                                                                                        props[0].subCategory + '/'
                                                                                                                        :
                                                                                                                        ""



                                                                                ).toUpperCase()
                                                                                :
                                                                                router.asPath.toUpperCase()
                                                            }
                                                  </Typography> */}
                                        </FilteredProductsTitle>
                                        <FilteredProductsGrid data={props} />
                              </FilteredProducts>
                    </ProductsFilterContainer>
          )
}

export default ProductsFilter