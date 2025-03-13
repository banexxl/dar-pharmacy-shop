import * as React from 'react';
import Button from '@mui/material/Button';
import { StyledProductMenu } from '@/styles/navbar/product-menu';
import { Box, Typography } from '@mui/material';
import { NestedMenuItem } from 'mui-nested-menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { StyledMenuItem, StyledNestedTypography } from '@/styles/products-nested/products-nested';
import Link from 'next/link';
import LoadingWheel from '@/components/loading/loading';
import { useState } from 'react';
import { Colors } from '@/styles/theme';
import { useUIContext } from '@/context/ui/ui.context';
import { useRouter } from 'next/router';

export const ProductsMenu = () => {

     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
     const open = Boolean(anchorEl);
     const { drawerOpen, setDrawerOpen, showLoadingWheel, setShowLoadingWheel } = useUIContext()
     const handleProductsClick = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(event.currentTarget)
     };

     const router = useRouter()

     const handleClose = () => {
          setAnchorEl(null)
          setDrawerOpen(false)
     };

     const onLinkClick = () => {
          setShowLoadingWheel('flex')
          setAnchorEl(null)
          setDrawerOpen(false)
     }

     return (
          <Box>
               <LoadingWheel showLoadingWheel={showLoadingWheel} />
               {/* <Button
                    variant="contained"
                    onClick={handleProductsClick}
                    endIcon={<ArrowDownwardIcon />}
                    sx={{
                         ':hover': {
                              backgroundColor: Colors.secondary.custom,
                              textEmphasisColor: Colors.dim_grey
                         }
                    }}
               > */}
               <Typography
                    sx={{ textAlign: 'center', color: Colors.secondary.custom, cursor: 'pointer' }}
                    onClick={handleProductsClick}

               // endIcon={<ArrowDownwardIcon />}
               >
                    Proizvodi
               </Typography>

               {/* </Button> */}
               <StyledProductMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <NestedMenuItem label="Prirodna kozmetika" parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/gana-kozmetika/prirodna-kozmetika')}>
                                   Gana kozmetika
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/gloria/prirodna-kozmetika')}>
                                   Gloria
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/fitaky/prirodna-kozmetika')}>
                                   Fitaky
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/weleda/prirodna-kozmetika')}>
                                   Weleda
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/majana/prirodna-kozmetika')}>
                                   Majana
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/viviscal/prirodna-kozmetika')}>
                                   Viviscal
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/herbalab/prirodna-kozmetika')}>
                                   Herbalab
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/medical-plants/prirodna-kozmetika')}>
                                   Medical plants
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/gamarde/prirodna-kozmetika')}>
                                   Gamarde
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/aronica/prirodna-kozmetika')}>
                                   Aronica
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/phyto/prirodna-kozmetika')}>
                                   Phyto
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label="Sve za bebe" parentMenuOpen={open}>
                         <NestedMenuItem label="Bebi prirodna kozmetika" parentMenuOpen={open}>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/fitaky/bebi-prirodna-kozmetika')}>
                                        Fitaky
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/azeta-bio/bebi-prirodna-kozmetika')}>
                                        Azeta bio
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/gamarde/bebi-prirodna-kozmetika')}>
                                        Gamarde
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/weleda/bebi-prirodna-kozmetika')}>
                                        Weleda
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>
                         <NestedMenuItem label="Bebi pelene" parentMenuOpen={open}>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/eco-boom/bebi-pelene')}>
                                        Eco Boom
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label="Biljne Tinkture" parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/fantastik-fungi/biljne-tinkture')}>
                                   Fantastik Fungi
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/priroda-na-dar/biljne-tinkture')}>
                                   Priroda na dar
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/bioteo/biljne-tinkture')}>
                                   Bioteo
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label="Čišćenje organizma" parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/okp/ciscenje-organizma')}>
                                   OKP paket za čišćenje organizma
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/priroda-na-dar/biljne-tinkture')}>
                                   Priroda na dar
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/ruska-apoteka')}>
                              Ruska Apoteka
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/prirodni-imunitet')}>
                              Prirodni imunitet
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/kolagen')}>
                              Kolagen
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/suplementi')}>
                              Suplementi
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/ledene-kocke-za-imunitet')}>
                              Ledene kocke za imunitet
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/domaci-prirodni-melemi')}>
                              Domaći prirodni melemi
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/mast-od-jazavca')}>
                              Mast od Jazavca
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/guscija-mast')}>
                              Guščija mast
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/ulja-za-masazu')}>
                              Ulja za masažu
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/imunitet-za-decu')}>
                              Imunitet za decu
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi-proizvodjac-kategorija/todoxin/prirodni-imunitet')}>
                              Todoxin
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/suplemania')}>
                              Suplemania
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/zao-prirodna-sminka')}>
                              Zao prirodna šminka
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/prirodni-imunitet')}>
                              Prirodni imunitet
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/proizvodi-za-zene')}>
                              Proizvodi za žene
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography onClick={() => router.push('/proizvodi/homeopatija')}>
                              Homeopatija
                         </StyledNestedTypography>
                    </StyledMenuItem>
               </StyledProductMenu>

          </Box >
     );
}
