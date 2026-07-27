import { Box, Button, CircularProgress, Divider, IconButton, InputAdornment, List, ListItem, ListItemText, Slide, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui/ui.context";
import { KeyboardEvent, useRef, useState } from "react";
import Image from "next/image";
import Product from "@/interfaces/product/product.interface";
import { Colors } from "@/styles/theme";
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

type SearchResult = {
     message?: string,
     data?: [],
     error?: string
}

export default function SearchBox() {

     const { showSearchBox, setShowSearchBox } = useUIContext();
     const [searchQuery, setSearchQuery] = useState<string>('');
     const [loading, setLoading] = useState(false);
     const [searchResults, setSearchResults] = useState<SearchResult>();
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const dispatch = useDispatch()
     const inputRef = useRef<HTMLInputElement | null>(null)

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
                              setSearchResults({ message: 'Navedeni termin nije pronadjen!', data: [] })
                              :
                              null
                         return response.json()
                    }).then((data) => {
                         setSearchResults(data)
                         setLoading(false)
                    }).catch((error) => {
                         setSearchResults({ message: 'Navedeni termin nije pronadjen!', data: [] })
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
          <Slide direction="down" in={showSearchBox} timeout={500} onEntered={() => inputRef.current?.focus()}>
               <Box
                    className="SearchBoxContainer"
                    sx={{
                         position: "fixed",
                         top: 0,
                         left: 0,
                         width: "100%",
                         height: "100%",
                         background: Colors.secondary[50],
                         display: "flex",
                         flexDirection: 'column',
                         justifyContent: "center",
                         alignItems: "center",
                         zIndex: 99999,
                         opacity: 1,
                    }}
               >
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
                              inputRef={inputRef}
                         />
                         <SearchIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, cursor: 'pointer', marginBottom: '15px' }} color="secondary" onClick={() => handleSearchClick()} />
                    </Box>
                    <IconButton onClick={() => handleClearSearch()} sx={{ position: 'absolute', top: '5px', right: '5px' }} >
                         <CloseIcon sx={{ fontSize: '2rem' }} color="secondary" />
                    </IconButton>
                    <Box
                         className="SearchResultsBox"
                         sx={{
                              width: "130%",
                              backgroundColor: Colors.secondary[50],
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              opacity: 1,
                              borderRadius: '10px',
                         }}
                    >
                         {
                              loading ? (
                                   <Box>
                                        <CircularProgress color="secondary" />
                                   </Box>
                              ) : (
                                   searchResults && searchResults.data && searchResults.data.length > 0 ?
                                        (
                                             <List sx={{
                                                  overflow: 'auto',
                                                  height: '500px',
                                                  width: isScreenToMedium ? '60%' : '20%',
                                                  backgroundColor: Colors.secondary[50],
                                                  display: 'flex',
                                                  flexDirection: 'column',
                                                  justifyContent: 'space-between',
                                                  border: `1px solid ${Colors.dim_grey}`,
                                                  borderRadius: '10px',
                                                  boxShadow: `1px 2px 2px 2px ${Colors.primary.lighter}`,
                                                  paddingTop: '20px',
                                                  paddingBottom: '20px',
                                             }}>
                                                  {searchResults.data.map((product: Product, index) => (
                                                       <Box key={product.id}>
                                                            <ListItem
                                                                 sx={{
                                                                      display: 'flex',
                                                                      justifyContent: 'space-between',
                                                                      alignItems: 'center',
                                                                      paddingTop: '20px',
                                                                      paddingBottom: '20px',
                                                                 }}
                                                            >
                                                                 <Box
                                                                      sx={{
                                                                           display: 'flex',
                                                                           flexDirection: 'row',
                                                                           alignItems: 'center',
                                                                           justifyContent: 'space-between',
                                                                           width: '100%',
                                                                      }}
                                                                 >
                                                                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                                                                           <ListItemText
                                                                                primary={product.name}
                                                                                secondary={product.manufacturer}
                                                                                sx={{
                                                                                     '& .MuiTypography-root': {
                                                                                          color: `${Colors.primary.main} !important`,
                                                                                     },
                                                                                }}
                                                                           />
                                                                           <Button
                                                                                onClick={() => {
                                                                                     toast.success('Item added to cart!', {
                                                                                          duration: 1500,
                                                                                          position: 'top-center'
                                                                                     });
                                                                                     dispatch(addToCart(product));
                                                                                }}
                                                                                disabled={product.available_stock <= 0}
                                                                           >
                                                                                {product.available_stock <= 0 ? "Nema na stanju" : "Dodaj u korpu"}
                                                                           </Button>
                                                                      </Box>
                                                                      <Box
                                                                           component={'a'}
                                                                           href={`/proizvod/${product.slug}`}
                                                                           sx={{
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                alignItems: 'center',
                                                                                textDecoration: 'none',
                                                                                color: 'inherit',
                                                                           }}
                                                                      >
                                                                           <Image
                                                                                src={product.image_url}
                                                                                alt="DAR proizvodi"
                                                                                height={100}
                                                                                width={100}
                                                                                style={{ borderRadius: '5px' }}
                                                                           />
                                                                           <Typography sx={{ marginTop: '8px' }}>
                                                                                {product.price} RSD
                                                                           </Typography>
                                                                      </Box>
                                                                 </Box>
                                                            </ListItem>
                                                            {index < searchResults.data!.length - 1 && (
                                                                 <Divider
                                                                      sx={{
                                                                           borderColor: Colors.primary.main,
                                                                           borderWidth: '1px',
                                                                           width: '90%',
                                                                           margin: '0 auto',
                                                                      }}
                                                                 />
                                                            )}
                                                       </Box>
                                                  ))}
                                             </List>
                                        ) : (
                                             <Typography sx={{ maxWidth: '350px' }}>
                                                  {searchResults?.error}
                                             </Typography>
                                        )
                              )
                         }
                    </Box>
               </Box>
          </Slide >
     );
}
