import { useState, useEffect, useCallback } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Colors } from '@/styles/theme';
import Product from '@/interfaces/product/product.interface';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, MenuItem, Select, Switch, RadioGroup, Radio, FormControl, FormLabel } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import ProductCard from '@/components/product-card/product-card';
import CategoryIcon from '@mui/icons-material/Category';
import ProductsAllCategories from './products-categories';

type FilteredProductsGridProps = {
  data: Product[];
  onShowNext: () => void;
  onShowPrevious: () => void;
  currentPage: number;
  totalProducts: number;
  isFilterDialogOpen: boolean;
  setIsFilterDialogOpen: (open: boolean) => void;
  isSortDialogOpen: boolean;
  setIsSortDialogOpen: (open: boolean) => void;
  priceRange: string;
  setPriceRange: (val: string) => void;
  discountOnly: boolean;
  setDiscountOnly: (val: boolean) => void;
  sortOption: string;
  setSortOption: (val: string) => void;
  handleFilter: () => void;
  handleSort: () => void;
};

export default function FilteredProductsGrid({
  data,
  onShowNext,
  onShowPrevious,
  currentPage,
  totalProducts,
  isFilterDialogOpen,
  setIsFilterDialogOpen,
  isSortDialogOpen,
  setIsSortDialogOpen,
  priceRange,
  setPriceRange,
  discountOnly,
  setDiscountOnly,
  sortOption,
  setSortOption,
  handleFilter,
  handleSort,
}: FilteredProductsGridProps) {
  const theme = useTheme();
  const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [isAllFiltersDialogOpen, setIsAllFiltersDialogOpen] = useState(false);

  const handleOpenSortDialog = () => {
    if (!sortOption) {
      setSortOption('price-asc');
    }
    setIsSortDialogOpen(true);
  };

  return (
    <Container sx={{ paddingBottom: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}>
        {isScreenToMedium && (
          <Button
            color="primary"
            variant="outlined"
            startIcon={<CategoryIcon />}
            onClick={() => setIsAllFiltersDialogOpen(true)}
          >
            Proizvodi
          </Button>
        )}
        <Button color="primary" variant="outlined" startIcon={<FilterListIcon />} onClick={() => setIsFilterDialogOpen(true)}>Filter</Button>
        <Button color="primary" variant="outlined" startIcon={<SortIcon />} onClick={handleOpenSortDialog}>Sort</Button>
      </Box>

      <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
        {data.length === 0 ? (
          <Box sx={{ margin: '30px', paddingTop: '50px', color: Colors.primary.main }}>
            <DoNotDisturbIcon />
          </Box>
        ) : (
          data.map((product) => (
            <Grid key={product.id} size={{ xs: 6, sm: 6, md: 4 }} display="flex" flexDirection={'column'} alignItems="center">
              <ProductCard product={product} compact />
            </Grid>
          ))
        )}
      </Grid>

      <Box sx={{ display: 'flex', paddingTop: '50px', justifyContent: 'space-between' }}>
        <Button onClick={onShowPrevious} disabled={currentPage === 0} startIcon={<ArrowBackIosIcon />}>Nazad</Button>
        <Typography sx={{ color: Colors.primary.main, alignSelf: 'center', fontSize: '.8rem' }}>
          {Math.min((currentPage + 1) * 10, totalProducts)} od {totalProducts}
        </Typography>
        <Button onClick={onShowNext} disabled={(currentPage + 1) * 10 >= totalProducts} endIcon={<ArrowForwardIosIcon />}>Učitaj još</Button>
      </Box>



      {isScreenToMedium && (
        <Dialog open={isAllFiltersDialogOpen} onClose={() => setIsAllFiltersDialogOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Svi filteri proizvoda</DialogTitle>
          <DialogContent>
            <Typography sx={{ mb: 1.5, color: 'text.secondary', fontSize: '0.9rem' }}>
              Izaberite kategoriju ili podkategoriju proizvoda.
            </Typography>
            <ProductsAllCategories onCategoryNavigate={() => setIsAllFiltersDialogOpen(false)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAllFiltersDialogOpen(false)}>Zatvori</Button>
          </DialogActions>
        </Dialog>
      )}

      <Dialog open={isFilterDialogOpen} onClose={() => setIsFilterDialogOpen(false)}>
        <DialogTitle>Filter proizvoda</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">Filter po ceni</FormLabel>
            <RadioGroup aria-label="price-range" name="price-range" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <FormControlLabel value="" control={<Radio />} label="Svi" />
              <FormControlLabel value="0-500" control={<Radio />} label="RSD 0 - RSD 500" />
              <FormControlLabel value="500-1000" control={<Radio />} label="RSD 500 - RSD 1000" />
              <FormControlLabel value="1000-2000" control={<Radio />} label="RSD 1000 - RSD 2000" />
              <FormControlLabel value="2000-5000" control={<Radio />} label="RSD 2000 - RSD 5000" />
              <FormControlLabel value="5000-" control={<Radio />} label="RSD 5000+" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel control={<Switch checked={discountOnly} onChange={(e) => setDiscountOnly(e.target.checked)} />} label="Prikaži samo proizvode sa popustom" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsFilterDialogOpen(false)}>Poništi</Button>
          <Button onClick={handleFilter} variant="contained">Primeni</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isSortDialogOpen} onClose={() => setIsSortDialogOpen(false)}>
        <DialogTitle>Sortiraj</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Select value={sortOption} onChange={(e) => setSortOption(e.target.value as string)}>
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
          <Button onClick={handleSort} variant="contained">Primeni</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}





