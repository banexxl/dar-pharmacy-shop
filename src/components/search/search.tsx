import { Button, Grid, IconButton, InputAdornment, Slide, TextField, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui/ui.context";
import { SearchBoxContainer, SearchField } from "@/styles/search/search.style";
import { ChangeEventHandler, useState } from "react";
import IProduct from "@/interfaces/product/product.interface";
import theme, { Colors } from "@/styles/theme";
import { NextResponse } from "next/server";
import { Product } from "@/styles/productdetails";
import Products from "../products/products-grid";
import SingleProductMobile from "../products/single-product-mobile";
import SingleProductDesktop from "../products/single-product-desktop";
import SingleProductSearched from "../product-search/searched-product";

export default function SearchBox() {

          const { showSearchBox, setShowSearchBox } = useUIContext();
          const [searchQuery, setSearchQuery] = useState<any>('');
          const [searchResults, setSearchResults] = useState([]);

          const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
                    setSearchQuery(event.target.value);
          };

          const handleSearchClick = async () => {

                    try {
                              await fetch('/api/search/product-search-api', {
                                        method: 'POST',
                                        body: searchQuery,
                                        headers: {
                                                  'Content-Type': 'application/text',
                                                  'Access-Control-Allow-Origin': '*',
                                                  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                                        },
                              }).then((response: Response) => {
                                        return response.json()
                              }).then((fetchSearchResult: any) => {
                                        setSearchResults(fetchSearchResult.data)
                                        //setShowSearchBox(false)
                              })

                    } catch (error) {
                              console.error('Error searching products:', error);
                    }
          };

          const handleClearSearch = () => {
                    setSearchQuery('')
                    setSearchResults([])
                    setShowSearchBox(false)
          };

          return (
                    <Slide direction="down" in={showSearchBox} timeout={500}>
                              <SearchBoxContainer>
                                        <TextField
                                                  label="Pronadji proizvod"
                                                  type="search"
                                                  variant='filled'
                                                  color='secondary'
                                                  helperText="Pretraga po nazivu proizvoda"
                                                  onChange={handleChange}
                                                  sx={{ width: '300px' }}
                                                  value={searchQuery}
                                        />

                                        <SearchIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} color="secondary" onClick={(e: any) => handleSearchClick()} />

                                        <IconButton
                                                  onClick={() => handleClearSearch()}
                                                  sx={{
                                                            position: 'absolute',
                                                            top: 10,
                                                            right: 10,
                                                  }}
                                        >
                                                  <CloseIcon sx={{ fontSize: '4rem' }} color="secondary" />
                                        </IconButton>
                                        {
                                                  searchResults.length !== 0 || searchResults !== undefined || searchResults !== null ?
                                                            searchResults.map((product: IProduct) => (
                                                                      <SingleProductSearched key={product._id} data={product} />
                                                            ))
                                                            :
                                                            null
                                        }
                              </SearchBoxContainer>
                    </Slide>
          );
}
