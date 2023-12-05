import { Box, Button, CircularProgress, IconButton, InputAdornment, List, ListItem, ListItemText, Slide, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui/ui.context";
import { SearchBoxContainer, SearchResultsBox } from "@/styles/search/search.style";
import { KeyboardEvent, useState } from "react";
import Image from 'mui-image'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import IProduct from "@/interfaces/product/product.interface";
import LoadingWheel from "../loading/loading";
import { Colors } from "@/styles/theme";

type SearchResult = {
     message?: string,
     data?: [],
     error?: string
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
               if (/\S/.test(searchQuery)) {
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
               } else {
                    setLoading(false)
                    setSearchResults({ message: 'Navedeni termin nije pronadjen!', data: [] })
               }

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
               <SearchBoxContainer >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                         <TextField
                              label="Pronadji proizvod"
                              type="search"
                              variant='filled'
                              color='secondary'
                              helperText="Ukucajte zeljeni pojam za pretragu"
                              onChange={handleChange}
                              sx={{ width: '300px' }}
                              value={searchQuery}
                              onKeyDown={(e: KeyboardEvent) => {
                                   e.key === 'Enter' ?
                                        handleSearchClick()
                                        :
                                        null
                              }}
                         />
                         <SearchIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, cursor: 'pointer', marginBottom: '15px' }} color="secondary" onClick={() => handleSearchClick()} />
                    </Box>
                    <IconButton onClick={() => handleClearSearch()} sx={{ position: 'absolute', top: '5px', right: '5px' }} >
                         <CloseIcon sx={{ fontSize: '2rem' }} color="secondary" />
                    </IconButton>
                    <SearchResultsBox>
                         {
                              loading == true ?
                                   <Box >
                                        <CircularProgress color="secondary" />
                                   </Box>
                                   :
                                   <List sx={{
                                        overflow: 'auto', height: '500px', width: '60%', backgroundColor: 'rgba(198, 40, 40, 1)',
                                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: `1px solid ${Colors.dim_grey}`,
                                        borderRadius: '10px', boxShadow: `1px 2px 2px 2px ${Colors.secondary}`, paddingTop: '20px'
                                   }}>
                                        {
                                             searchResults?.data !== undefined || searchResults?.data !== null || Object.keys(searchResults.data).length !== 0 ?
                                                  searchResults?.data?.map((product: IProduct) => (
                                                       <ListItem key={product._id} component={'a'} href={`/proizvod/${product._id}`}
                                                            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}
                                                            onClick={() => setShowSearchBox(false)}
                                                       >
                                                            <ListItemText primary={product.name} secondary={product.manufacturer} />
                                                            <Box>

                                                                 <Image src={`${product.imageURL}`} alt="DAR proizvodi" height={100} width={100} />
                                                                 <Typography>
                                                                      {product.price} RSD
                                                                 </Typography>
                                                            </Box>
                                                       </ListItem>
                                                  ))
                                                  :
                                                  <Typography>
                                                       {
                                                            searchResults.message == 'Navedeni termin nije pronadjen!' ?
                                                                 "Za uneti termin ne postoje proizvodi!"
                                                                 :
                                                                 "ssssssssssss"
                                                       }
                                                  </Typography>

                                        }
                                   </List>
                         }
                    </SearchResultsBox>
               </SearchBoxContainer>
          </Slide >
     );
}
