import { Button, IconButton, InputAdornment, Slide, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui/ui.context";
import { SearchBoxContainer, SearchField } from "@/styles/search/search.style";
import { ChangeEventHandler, useState } from "react";
import IProduct from "@/interfaces/product/product.interface";
import { Colors } from "@/styles/theme";
import { NextResponse } from "next/server";
import { Product } from "@/styles/productdetails";

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
                                        console.log('fetchSearchResult', fetchSearchResult);
                                        setSearchResults(fetchSearchResult)
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
                                                  sx={{
                                                            position: 'absolute',
                                                            top: 10,
                                                            right: 10,
                                                  }}
                                        >
                                                  <CloseIcon sx={{ fontSize: '4rem' }} color="secondary" onClick={() => handleClearSearch()} />
                                        </IconButton>

                                        {/* Display search results */}
                                        {/* {
                                                  searchResults.length !== 0 || searchResults !== undefined || searchResults !== null ?
                                                            searchResults.map((product: IProduct) => (
                                                                      <Product key={product._id}>{product.name}</Product>
                                                            ))
                                                            :
                                                            null
                                        } */}
                              </SearchBoxContainer>
                    </Slide>
          );
}
