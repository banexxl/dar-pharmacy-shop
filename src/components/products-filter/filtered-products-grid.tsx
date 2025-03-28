import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import FilteredSingleProductMobile from "./filtered-single-product-mobile";
import FilteredSingleProductDesktop from "./filtered-single-product-desktop";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Colors } from "@/styles/theme";
import IProduct from "@/interfaces/product/product.interface";

// New imports for filtering and sorting
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, MenuItem, Select, Switch, RadioGroup, Radio, FormControl, FormLabel } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

type FilteredProductsGridProps = {
     data: IProduct[]
}

export default function FilteredProductsGrid(props: FilteredProductsGridProps) {
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

     const [products, setProducts] = useState<IProduct[]>(props.data || []);
     const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>([]);
     const [currentPage, setCurrentPage] = useState(0);
     // New state for filtering and sorting
     const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
     const [isSortDialogOpen, setIsSortDialogOpen] = useState(false);
     const [priceRange, setPriceRange] = useState('');
     const [discountOnly, setDiscountOnly] = useState(false);
     const [sortOption, setSortOption] = useState('');

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth'
          });
     };

     const updateDisplayedProducts = useCallback((page: number) => {
          const start = page * 10;
          const end = start + 10;
          setDisplayedProducts(products.slice(start, end));
          setCurrentPage(page);
     }, [products]);

     useEffect(() => {
          setProducts(props.data || []);
          updateDisplayedProducts(0);
     }, []);

     const onShowNext = () => {
          if ((currentPage + 1) * 10 < products.length) {
               updateDisplayedProducts(currentPage + 1);
               scrollToTop();
          }
     };

     const onShowPrevious = () => {
          if (currentPage > 0) {
               updateDisplayedProducts(currentPage - 1);
               scrollToTop();
          }
     };

     // New function for handling filtering
     const handleFilter = () => {
          let filteredProducts = props.data.filter((product) => {
               if (discountOnly && !product.discount) return false;

               if (priceRange) {
                    const [min, max] = priceRange.split('-').map(Number);
                    if (max && (product.price < min || product.price > max)) return false;
                    if (!max && product.price < min) return false;
               }

               return true;
          });

          setProducts(filteredProducts);
          setDisplayedProducts(filteredProducts.slice(0, 10));
          setCurrentPage(0);
          setSortOption(''); // reset sorting optionally
          setIsFilterDialogOpen(false);
     };


     // New function for handling sorting
     const handleSort = () => {
          let sortedProducts = [...products];

          if (sortOption === 'price-asc') {
               sortedProducts.sort((a, b) => a.price - b.price);
          } else if (sortOption === 'price-desc') {
               sortedProducts.sort((a, b) => b.price - a.price);
          } else if (sortOption === 'name-asc') {
               sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          } else if (sortOption === 'name-desc') {
               sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          }

          setProducts(sortedProducts);
          updateDisplayedProducts(0);
          setIsSortDialogOpen(false);
     };

     const renderProducts =
          displayedProducts.length === 0 ? (
               <Box sx={{ margin: '30px', paddingTop: '50px', color: Colors.primary.main }}>
                    <DoNotDisturbIcon />
               </Box>
          ) : (
               displayedProducts.map((product: IProduct) => (
                    <Grid key={product._id} item xs={6} sm={4} md={3} display="flex" flexDirection={'column'} alignItems="center">
                         {isScreenToMedium ? (
                              <FilteredSingleProductMobile key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                         ) : (
                              <FilteredSingleProductDesktop key={product._id} product={product} isScreenToMedium={isScreenToMedium} />
                         )}
                    </Grid>
               ))
          );

     return (
          <Container sx={{ paddingBottom: '100px' }}>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}>
                    <Button
                         variant="outlined"
                         startIcon={<FilterListIcon />}
                         onClick={() => setIsFilterDialogOpen(true)}
                    >
                         Filter
                    </Button>
                    <Button
                         variant="outlined"
                         startIcon={<SortIcon />}
                         onClick={() => setIsSortDialogOpen(true)}
                    >
                         Sort
                    </Button>
               </Box>

               <Grid container spacing={2}>
                    {renderProducts}
               </Grid>
               <Box sx={{ display: 'flex', paddingTop: '50px', justifyContent: 'space-between' }}>
                    <Button
                         onClick={onShowPrevious}
                         disabled={currentPage === 0}
                         startIcon={<ArrowBackIosIcon />}
                    >
                         Nazad
                    </Button>
                    <Typography sx={{
                         color: Colors.primary.main,
                         alignSelf: 'center',
                         fontSize: '.8rem'
                    }}>
                         {Math.min((currentPage + 1) * 10, products.length)} od {products.length}
                    </Typography>
                    <Button
                         onClick={onShowNext}
                         disabled={(currentPage + 1) * 10 >= products.length}
                         endIcon={<ArrowForwardIosIcon />}
                    >
                         Učitaj još
                    </Button>
               </Box>


               <Dialog open={isFilterDialogOpen} onClose={() => setIsFilterDialogOpen(false)}>
                    <DialogTitle>Filter proizvoda</DialogTitle>
                    <DialogContent>
                         <FormControl component="fieldset">
                              <FormLabel component="legend">Filter po ceni</FormLabel>
                              <RadioGroup
                                   aria-label="price-range"
                                   name="price-range"
                                   value={priceRange}
                                   onChange={(e) => setPriceRange(e.target.value)}
                              >
                                   <FormControlLabel value="" control={<Radio />} label="Svi" />
                                   <FormControlLabel value="0-500" control={<Radio />} label="RSD 0 - RSD 500" />
                                   <FormControlLabel value="500-1000" control={<Radio />} label="RSD 500 - RSD 1000" />
                                   <FormControlLabel value="1000-2000" control={<Radio />} label="RSD 1000 - RSD 2000" />
                                   <FormControlLabel value="2000-5000" control={<Radio />} label="RSD 2000 - RSD 5000" />
                                   <FormControlLabel value="5000-" control={<Radio />} label="RSD 5000+" />
                              </RadioGroup>
                         </FormControl>

                         <FormControlLabel
                              control={
                                   <Switch
                                        checked={discountOnly}
                                        onChange={(e) => setDiscountOnly(e.target.checked)}
                                   />
                              }
                              label="Prikaži samo proizvode sa popustom"
                         />
                    </DialogContent>
                    <DialogActions>
                         <Button onClick={() => setIsFilterDialogOpen(false)}>Poništi</Button>
                         <Button onClick={handleFilter} variant="contained">
                              Primeni
                         </Button>
                    </DialogActions>
               </Dialog>

               <Dialog open={isSortDialogOpen} onClose={() => setIsSortDialogOpen(false)}>
                    <DialogTitle>Sortiraj</DialogTitle>
                    <DialogContent>
                         <FormControl fullWidth>
                              <Select
                                   value={sortOption}
                                   onChange={(e) => setSortOption(e.target.value as string)}
                              >
                                   <MenuItem value="">Poništi</MenuItem>
                                   <MenuItem value="price-asc">Cena: Rastuća</MenuItem>
                                   <MenuItem value="price-desc">Cena: Opadajuća</MenuItem>
                                   <MenuItem value="name-asc">Naziv: A to Z</MenuItem>
                                   <MenuItem value="name-desc">Naziv: Z to A</MenuItem>
                              </Select>
                         </FormControl>
                    </DialogContent>
                    <DialogActions>
                         <Button onClick={() => setIsSortDialogOpen(false)}>Poništi</Button>
                         <Button onClick={handleSort} variant="contained">
                              Primeni
                         </Button>
                    </DialogActions>
               </Dialog>
          </Container>
     );
}