import { Box, IconButton, List, ListItem, ListItemText, Slide, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui/ui.context";
import { SearchBoxContainer, SearchResultsBox } from "@/styles/search/search.style";
import { useState } from "react";
import Link from "next/link";
import IProduct from "@/interfaces/product/product.interface";
import LoadingWheel from "../loading/loading";
import { Colors } from "@/styles/theme";

type SearchResult = {
          message?: string,
          data?: []
}

export default function SearchBox() {

          const { showSearchBox, setShowSearchBox } = useUIContext();
          const [searchQuery, setSearchQuery] = useState<string>('');
          const [loading, setLoading] = useState(false);
          const [searchResults, setSearchResults] = useState<SearchResult | undefined>();

          const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
                    setSearchQuery(event.target.value);
          };

          const handleSearchClick = async () => {

                    setLoading(true);

                    try {
                              await fetch('/api/search/product-search-api', {
                                        method: 'POST',
                                        body: searchQuery,
                                        headers: {
                                                  'Content-Type': 'application/text',
                                                  'Access-Control-Allow-Origin': '*',
                                                  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                                                  'Cache-Control': 'no-store'
                                        },
                              }).then((response: Response) => {
                                        !response.ok ?
                                                  setSearchResults({ data: [] })
                                                  :
                                                  null
                                        return response.json()
                              }).then((data) => {
                                        setSearchResults(data)
                                        setLoading(false)
                              }).catch((error) => {
                                        console.log(error);
                              })

                    } catch (error) {
                              console.error('Error searching products:', error);
                    }
          };

          const handleClearSearch = () => {
                    setShowSearchBox(false)
                    setSearchResults({ message: 'Navedeni termin nije pronadjen!', data: [] })
          };

          return (
                    <Slide direction="down" in={showSearchBox} timeout={500}>
                              <SearchBoxContainer>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>
                                                  <TextField
                                                            label="Pronadji proizvod"
                                                            type="search"
                                                            variant='filled'
                                                            color='secondary'
                                                            helperText="Pretraga proizvoda"
                                                            onChange={handleChange}
                                                            sx={{ width: '300px' }}
                                                            value={searchQuery}
                                                  />
                                                  <SearchIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, cursor: 'pointer' }} color="secondary" onClick={() => handleSearchClick()} />
                                        </Box>
                                        <IconButton onClick={() => handleClearSearch()} sx={{ position: 'absolute', top: 10, right: 10, }} >
                                                  <CloseIcon sx={{ fontSize: '4rem' }} color="secondary" />
                                        </IconButton>
                                        <SearchResultsBox>
                                                  <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: Colors.dim_grey }}>
                                                            {
                                                                      loading == true ?
                                                                                <LoadingWheel loading={loading} />
                                                                                :
                                                                                <List>
                                                                                          {
                                                                                                    searchResults?.data !== undefined || searchResults?.data !== null || Object.keys(searchResults.data).length == 0 ?
                                                                                                              searchResults?.data?.map((product: IProduct) => (
                                                                                                                        <ListItem key={product._id} component={'a'} href={`/proizvod/${product._id}`}>
                                                                                                                                  <ListItemText
                                                                                                                                            primary={product.name}
                                                                                                                                            secondary={product.manufacturer}
                                                                                                                                  />
                                                                                                                        </ListItem>
                                                                                                              ))
                                                                                                              :
                                                                                                              null
                                                                                          }
                                                                                </List>
                                                            }
                                                  </Box>
                                        </SearchResultsBox>
                              </SearchBoxContainer>
                    </Slide >
          );
}
