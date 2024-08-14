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
                              <Link href={'/gana-kozmetika/prirodna-kozmetika?part=1'}>
                                   <StyledNestedTypography >
                                        Gana kozmetika
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <Link href={'/gloria/prirodna-kozmetika?part=1'}>
                                   <StyledNestedTypography >
                                        Gloria
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <Link href={'/fitaky/prirodna-kozmetika?part=1'}>
                                   <StyledNestedTypography >
                                        Fitaky
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <Link href={'/weleda/prirodna-kozmetika?part=1'}>
                                   <StyledNestedTypography >
                                        Weleda
                                   </StyledNestedTypography>
                              </Link>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/majana/prirodna-kozmetika?part=1'}>
                                        Majana
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/viviscal/prirodna-kozmetika?part=1'}>
                                        Viviscal
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/herbalab/prirodna-kozmetika?part=1'}>
                                        Herbalab
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/medical-plants/prirodna-kozmetika?part=1'}>
                                        Medical plants
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/gamarde/prirodna-kozmetika?part=1'}>
                                        Gamarde
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/aronica/prirodna-kozmetika?part=1'}>
                                        Aronica
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/hedera-vita/prirodna-kozmetika?part=1'}>
                                        Hederavita
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label='Bebi prirodna kozmetika' parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/fitaky/bebi-prirodna-kozmetika?part=1'}>
                                        Fitaky
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/azeta-bio/bebi-prirodna-kozmetika?part=1'}>
                                        Azeta bio
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/gamarde/bebi-prirodna-kozmetika?part=1'}>
                                        Gamarde
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/weleda/bebi-prirodna-kozmetika?part=1'}>
                                        Weleda
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    <NestedMenuItem label='Biljne Tinkture' parentMenuOpen={open}>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/fantastik-fungi/biljne-tinkture?part=1'}>
                                        Fantastik Fungi
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/priroda-na-dar/biljne-tinkture?part=1'}>
                                        Priroda na dar
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    {/* <NestedMenuItem label='Ruska Apoteka' parentMenuOpen={open}> */}
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/ruska-apoteka?part=1'}>
                                   Ruska Apoteka
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    {/* </NestedMenuItem> */}
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/prirodni-imunitet?part=1'}>
                                   Prirodni imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/okp-paket-za-ciscenje?part=1'}>
                                   OKP paket za čišćenje
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/kolagen?part=1'}>
                                   Kolagen
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/suplementi?part=1'}>
                                   Suplementi
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/ledene-kocke-za-imunitet?part=1'}>
                                   Ledene kocke za imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/prirodni-melemi?part=1'}>
                                   Domaći prirodni melemi
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/mast-od-jazavca?part=1'}>
                                   Mast od Jazavca
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/guscija-mast'}>
                                   Guščija mast
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/ulja-za-masazu?part=1'}>
                                   Ulja za masažu
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/imunitet-za-decu?part=1'}>
                                   Imunitet za decu
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/todoxin/prirodni-imunitet?part=1'}>
                                   Todoxin
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/suplemania?part=1'}>
                                   Suplemania
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/zao-prirodna-sminka/prirodna-kozmetika/?part=1'}>
                                   Zao prirodna šminka
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/prirodni-imunitet?part=1'}>
                                   Prirodni imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/proizvodi-za-zene?part=1'}>
                                   Proizvodi za žene
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
               </StyledProductMenu>
          </Box >
     );
}
