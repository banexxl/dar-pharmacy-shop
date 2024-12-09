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
                    <NestedMenuItem label='Prirodna kozmetika' parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/gana-kozmetika/prirodna-kozmetika'}>
                                   <StyledNestedTypography >
                                        Gana kozmetika
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/gloria/prirodna-kozmetika'}>
                                   <StyledNestedTypography >
                                        Gloria
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/fitaky/prirodna-kozmetika'}>
                                   <StyledNestedTypography >
                                        Fitaky
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/weleda/prirodna-kozmetika'}>
                                   <StyledNestedTypography >
                                        Weleda
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/majana/prirodna-kozmetika'}>
                                        Majana
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/viviscal/prirodna-kozmetika'}>
                                        Viviscal
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/herbalab/prirodna-kozmetika'}>
                                        Herbalab
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/medical-plants/prirodna-kozmetika'}>
                                        Medical plants
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/gamarde/prirodna-kozmetika'}>
                                        Gamarde
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/aronica/prirodna-kozmetika'}>
                                        Aronica
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/phyto/prirodna-kozmetika'}>
                                   <StyledNestedTypography >
                                        Phyto
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label='Sve za bebe' parentMenuOpen={open}>
                         <NestedMenuItem label='Bebi prirodna kozmetika' parentMenuOpen={open}>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/fitaky/bebi-prirodna-kozmetika'}>
                                             Fitaky
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/azeta-bio/bebi-prirodna-kozmetika'}>
                                             Azeta bio
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/gamarde/bebi-prirodna-kozmetika'}>
                                             Gamarde
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/weleda/bebi-prirodna-kozmetika'}>
                                             Weleda
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>
                         <NestedMenuItem label='Bebi pelene' parentMenuOpen={open}>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/eco-boom/bebi-pelene'}>
                                             Eco Boom
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label='Biljne Tinkture' parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/fantastik-fungi/biljne-tinkture'}>
                                        Fantastik Fungi
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/priroda-na-dar/biljne-tinkture'}>
                                        Priroda na dar
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/bioteo/biljne-tinkture'}>
                                        Bioteo
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label='Čišćenje organizma' parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/okp/ciscenje-organizma'}>
                                        OKP paket za čišćenje organizma
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/priroda-na-dar/biljne-tinkture'}>
                                        Priroda na dar
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    {/* <NestedMenuItem label='Ruska Apoteka' parentMenuOpen={open}> */}
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/ruska-apoteka'}>
                                   Ruska Apoteka
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    {/* </NestedMenuItem> */}
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/prirodni-imunitet'}>
                                   Prirodni imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/kolagen'}>
                                   Kolagen
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/suplementi'}>
                                   Suplementi
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/ledene-kocke-za-imunitet'}>
                                   Ledene kocke za imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/domaci-prirodni-melemi'}>
                                   Domaći prirodni melemi
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/mast-od-jazavca'}>
                                   Mast od Jazavca
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/guscija-mast'}>
                                   Guščija mast
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/ulja-za-masazu'}>
                                   Ulja za masažu
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/imunitet-za-decu'}>
                                   Imunitet za decu
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi-proizvodjac-kategorija/todoxin/prirodni-imunitet'}>
                                   Todoxin
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/suplemania'}>
                                   Suplemania
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/zao-prirodna-sminka'}>
                                   Zao prirodna šminka
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/prirodni-imunitet'}>
                                   Prirodni imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/proizvodi-za-zene'}>
                                   Proizvodi za žene
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link rel='canonical' href={'/proizvodi/homeopatija'}>
                                   Homeopatija
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
               </StyledProductMenu>
          </Box >
     );
}
