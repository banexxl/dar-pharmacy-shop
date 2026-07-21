import { Box, Breadcrumbs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ProductsAllCategories from './products-categories';
import FilteredProductsGrid from './filtered-products-grid';

function ProductsFilter({ filterObject, routerQuery }: any) {

     // Parse the URL
     const manufacturerURL = routerQuery?.manufacturerURL || '';
     const mainCategory = routerQuery?.mainCategory || '';

     const [products, setProducts] = useState<any[]>(filterObject || []);
     const [displayedProducts, setDisplayedProducts] = useState<any[]>(products.slice(0, 10));
     const [currentPage, setCurrentPage] = useState(0);
     const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
     const [isSortDialogOpen, setIsSortDialogOpen] = useState(false);
     const [priceRange, setPriceRange] = useState('');
     const [discountOnly, setDiscountOnly] = useState(false);
     const [sortOption, setSortOption] = useState('');

     useEffect(() => {
          setProducts(filterObject || []);
          setDisplayedProducts((filterObject || []).slice(0, 10));
          setCurrentPage(0);
     }, [filterObject]);

     const updateDisplayedProducts = (page: number, list = products) => {
          const start = page * 10;
          const end = start + 10;
          setDisplayedProducts(list.slice(start, end));
          setCurrentPage(page);
     };

     const handleFilter = () => {
          const filtered = (filterObject || []).filter((product: any) => {
               if (discountOnly && !product.discount) return false;
               if (priceRange) {
                    const [min, max] = priceRange.split('-').map(Number);
                    if (max && (product.price < min || product.price > max)) return false;
                    if (!max && product.price < min) return false;
               }
               return true;
          });
          setProducts(filtered);
          updateDisplayedProducts(0, filtered);
          setSortOption('');
          setIsFilterDialogOpen(false);
     };

     const handleSort = () => {
          const sorted = [...products];
          if (sortOption === 'price-asc') sorted.sort((a, b) => a.price - b.price);
          else if (sortOption === 'price-desc') sorted.sort((a, b) => b.price - a.price);
          else if (sortOption === 'name-asc') sorted.sort((a, b) => a.name.localeCompare(b.name));
          else if (sortOption === 'name-desc') sorted.sort((a, b) => b.name.localeCompare(a.name));
          setProducts(sorted);
          updateDisplayedProducts(0, sorted);
          setIsSortDialogOpen(false);
     };

     const onShowNext = () => {
          if ((currentPage + 1) * 10 < products.length) {
               updateDisplayedProducts(currentPage + 1);
          }
     };

     const onShowPrevious = () => {
          if (currentPage > 0) {
               updateDisplayedProducts(currentPage - 1);
          }
     };

     return (
          <Box
               className="ProductsFilterContainer"
               sx={{
                    display: { xs: 'block', md: 'flex' },
                    alignItems: 'flex-start',
                    gap: { xs: 2, md: 4 },
               }}
          >
               <Box
                    className="ProductsFilters"
                    sx={{
                         display: { xs: 'none', md: 'block' },
                         flex: { md: '0 0 280px' },
                         width: { md: 280 },
                         position: { md: 'sticky' },
                         top: { md: 96 },
                    }}
               >
                    <Box className="FilterTitleBox">
                         <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                              Izaberi iz liste proizvoda
                         </Typography>
                    </Box>
                    <Box className="FilterCategoryAccordionBox">
                         <ProductsAllCategories />
                    </Box>
               </Box>
               <Box className="FilteredProducts" sx={{ flex: 1, width: '100%' }}>
                    <Box className="FilteredProductsTitle">
                         {(products.length === 0 || displayedProducts.length === 0) ? (
                              <Typography variant="body1" sx={{ color: 'text.secondary', justifyContent: 'center', display: 'flex', paddingBottom: '50px' }}>
                                   Nije pronađen ni jedan proizvod!
                              </Typography>
                         ) : (
                              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 5 }}>
                                   <Breadcrumbs
                                        sx={{
                                             color: 'red',
                                             '& a': {
                                                  color: 'red',
                                                  textDecoration: 'underline',
                                                  fontFamily: 'monospace',
                                             },
                                        }}
                                   >
                                        {manufacturerURL && (
                                             <Typography
                                                  component="a"
                                                  href={`/proizvodi-proizvodjac-kategorija/${manufacturerURL}`}
                                                  sx={{
                                                       fontSize: '1rem',
                                                       fontStyle: 'italic',
                                                       textDecoration: 'underline',
                                                       color: 'red',
                                                       fontFamily: 'monospace',
                                                  }}
                                             >
                                                  {manufacturerURL}
                                             </Typography>
                                        )}
                                        {mainCategory && (
                                             <Typography
                                                  component="a"
                                                  href={`/proizvodi-proizvodjac-kategorija/${manufacturerURL}/${mainCategory}`}
                                                  sx={{
                                                       fontSize: '1rem',
                                                       fontStyle: 'italic',
                                                       textDecoration: 'underline',
                                                       color: 'red',
                                                       fontFamily: 'monospace',
                                                  }}
                                             >
                                                  {mainCategory}
                                             </Typography>
                                        )}
                                   </Breadcrumbs>
                              </Box>
                         )}
                    </Box>
                    <FilteredProductsGrid
                         data={displayedProducts}
                         onShowNext={onShowNext}
                         onShowPrevious={onShowPrevious}
                         currentPage={currentPage}
                         totalProducts={products.length}
                         isFilterDialogOpen={isFilterDialogOpen}
                         setIsFilterDialogOpen={setIsFilterDialogOpen}
                         isSortDialogOpen={isSortDialogOpen}
                         setIsSortDialogOpen={setIsSortDialogOpen}
                         priceRange={priceRange}
                         setPriceRange={setPriceRange}
                         discountOnly={discountOnly}
                         setDiscountOnly={setDiscountOnly}
                         sortOption={sortOption}
                         setSortOption={setSortOption}
                         handleFilter={handleFilter}
                         handleSort={handleSort}
                    />
               </Box>
          </Box>
     );
}

export default ProductsFilter;


