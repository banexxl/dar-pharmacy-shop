import { IconButton, Slide, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui/ui.context";
import { SearchBoxContainer } from "@/styles/search/search.style";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchBox() {

          const { showSearchBox, setShowSearchBox } = useUIContext();
          const [searchQuery, setSearchQuery] = useState<string>('');
          const [searchResultsReady, setSearchResultsReady] = useState(false);
          const router = useRouter()
          const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
                    setSearchQuery(event.target.value);
          };

          const handleSearchClick = async () => {

                    try {
                              const response = await fetch('/api/search/product-search-api', {
                                        method: 'POST',
                                        body: searchQuery,
                                        headers: {
                                                  'Content-Type': 'application/text',
                                                  'Access-Control-Allow-Origin': '*',
                                                  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                                                  'Cache-Control': 'no-store'
                                        },
                              })

                              const fetchSearchResult = await response.json();
                              localStorage.setItem('search-results', JSON.stringify(fetchSearchResult.data));
                              setSearchResultsReady(true);
                              setShowSearchBox(false);
                    } catch (error) {
                              console.error('Error searching products:', error);
                    }
          };

          const handleClearSearch = () => {
                    localStorage.removeItem('search-results')
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
                                                  helperText="Pretraga proizvoda"
                                                  onChange={handleChange}
                                                  sx={{ width: '300px' }}
                                                  value={searchQuery}
                                        />
                                        <Link href={{ pathname: '/proizvodi' }}>
                                                  <SearchIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, cursor: 'pointer' }} color="secondary" onClick={() => handleSearchClick()} />
                                        </Link>
                                        <IconButton onClick={() => handleClearSearch()} sx={{ position: 'absolute', top: 10, right: 10, }} >
                                                  <CloseIcon sx={{ fontSize: '4rem' }} color="secondary" />
                                        </IconButton>
                              </SearchBoxContainer>
                    </Slide>
          );
}
