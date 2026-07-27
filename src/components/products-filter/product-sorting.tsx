import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Grid, List, ListItem, ListItemText } from '@mui/material';
import Product from '@/interfaces/product/product.interface';

interface ProductSortingProps {
     products: Product[];
}

const ProductSortingComponent: React.FC<ProductSortingProps> = ({ products }) => {
     const [sortBy, setSortBy] = useState<keyof Product>('name'); // Default sorting by 'name'
     const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Default sorting order is ascending

     const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
          setSortBy(event.target.value as keyof Product);
     };

     const handleOrderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
          setSortOrder(event.target.value as 'asc' | 'desc');
     };

     const sortProducts = (products: Product[], sortBy: keyof Product, sortOrder: 'asc' | 'desc') => {
          return [...products].sort((a, b) => {
               const aValue = a[sortBy];
               const bValue = b[sortBy];

               // Add safety checks to handle possible 'undefined' values
               if (typeof aValue === 'string' && typeof bValue === 'string') {
                    if (sortOrder === 'asc') {
                         return aValue.localeCompare(bValue);
                    } else {
                         return bValue.localeCompare(aValue);
                    }
               }

               return 0; // If 'aValue' or 'bValue' is not a string, we return 0 to maintain the current order
          });
     };

     const sortedProducts = sortProducts(products, sortBy, sortOrder);

     return (
          <div>
               <Grid container spacing={2} alignItems="center">
                    <Grid>
                         <FormControl variant="outlined" fullWidth>
                              <InputLabel htmlFor="sort-by">Sort By:</InputLabel>
                              <Select
                                   label="Sort By"
                                   value={sortBy}
                                   onChange={() => handleSortChange}
                                   inputProps={{ name: 'sort-by', id: 'sort-by' }}
                              >
                                   <MenuItem value="name">Name</MenuItem>
                                   <MenuItem value="price">Price</MenuItem>
                                   {/* Add other keys for sorting here */}
                              </Select>
                         </FormControl>
                    </Grid>
                    <Grid>
                         <FormControl variant="outlined" fullWidth>
                              <InputLabel htmlFor="sort-order">Sort Order:</InputLabel>
                              <Select
                                   label="Sort Order"
                                   value={sortOrder}
                                   onChange={() => handleOrderChange}
                                   inputProps={{ name: 'sort-order', id: 'sort-order' }}
                              >
                                   <MenuItem value="asc">Ascending</MenuItem>
                                   <MenuItem value="desc">Descending</MenuItem>
                              </Select>
                         </FormControl>
                    </Grid>
               </Grid>

               <List>
                    {sortedProducts.map((product, index) => (
                         <ListItem key={index}>
                              <ListItemText primary={product.name} secondary={product.description} />
                              {/* Add other product details as needed */}
                         </ListItem>
                    ))}
               </List>
          </div>
     );
};

export default ProductSortingComponent;
