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
                    <StyledMenuItem onClick={handleClose}>
                         <Link href={'/proizvodi/prirodna-kozmetika'}>
                              <StyledNestedTypography>
                                   Prirodna kozmetika
                              </StyledNestedTypography>
                         </Link>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/bebi-prirodna-kozmetika'}>
                                   Bebi prirodna kozmetika
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/kolagen'}>
                                   Kolagen
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/suplementi'}>
                                   Suplementi
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/ledene-kocke-za-imunitet'}>
                                   Ledene kocke za imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>
                         <StyledNestedTypography >
                              <Link href={'/proizvodi/prirodni-imunitet'}>
                                   Prirodni imunitet
                              </Link>
                         </StyledNestedTypography>
                    </StyledMenuItem>
                    {/* --------------------------APOTEKA------------------------------------------ */}
                    <NestedMenuItem
                         label="Apoteka"
                         parentMenuOpen={open}
                         ContainerProps={<Link href={"/proizvodi/apoteka"} />}
                    >
                         <NestedMenuItem
                              label="Alergije"
                              parentMenuOpen={open}
                              value={''}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/alergije/kapsule-i-tablete'}>
                                             Kapsule i tablete
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/alergije/sprejevi-za-nos'}>
                                             Sprejevi za nos
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/alergije/masti-gelovi'}>
                                             Masti, gelovi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/alergije/irigacioni-set'}>
                                             Irigacioni set
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Anemije"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/anemija/folna-kiselina-i-vitamini'}>
                                             Folna kiselina i vitamini
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/anemija/biljni-preparati'}>
                                             Biljni preparati
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/anemija/preparati-gvozdja'}>
                                             Preparati gvožđa
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Bol"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/bol/bol-u-grlu'}>
                                             Bol u grlu
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/bol/menstrualni-bolovi'}>
                                             Menstrualni bolovi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/bol/bolovi-u-zglobovima-i-misicima'}>
                                             Bolovi u zglobovima i mišićima
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Hemoroidi"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/hemoroidi/oralni-preparati'}>
                                             Oralni preparati
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/hemoroidi/lokalna-primena'}>
                                             Lokalna primena
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/hemoroidi/platforma'}>
                                             Platforma
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Holesterol i trigliceridi"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/holesterol-i-trigliceridi/omega-masne-kiseline'}>
                                             Omega masne kiseline
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/holesterol-i-trigliceridi/ostalo'}>
                                             Ostalo
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Imunitet, prehlada"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/deca'}>
                                             Deca
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/vitamini-i-minerali'}>
                                             Vitamini i minerali
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/sprejevi-za-nos'}>
                                             Sprejevi za nos
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/sprejevi-za-grlo'}>
                                             Sprejevi za grlo
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/irigacioni-set'}>
                                             Irigacioni set
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/masti-gelovi'}>
                                             Masti, gelovi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/biljne-kapi'}>
                                             Biljne kapi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/med-maticni-mlec-i-propolis'}>
                                             Med, matični mleč i propolis
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/pastile-za-grlo'}>
                                             Pastile za grlo
                                        </Link>
                                   </StyledNestedTypography >
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/aloja-ehinacea-noni-aronija'}>
                                             Aloja, ehinacea, noni, aronija
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/probiotici'}>
                                             Probiotici
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/omega-masne-kiseline'}>
                                             Omega masne kiseline
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/imunitet-prehlada/ostalo'}>
                                             Ostalo
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Kosa, koža i nokti"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/kosa-koza-nokti/oralni-preparati'}>
                                             Oralni preparati
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/kosa-koza-nokti/lokalna-primena'}>
                                             Lokalna primena
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Kosti i zglobovi"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/kosti-i-zglobovi/oralni-preparati'}>
                                             Oralni preparati
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/kosti-i-zglobovi/primena-na-kozi'}>
                                             Primena na koži
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Mršavljenje, celulit"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/mrsavljenje-celulit/oralni-preparati'}>
                                             Oralni preparati
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/mrsavljenje-celulit/primena-na-kozi'}>
                                             Primena na koži
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Posebna ishrana"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/posebna-ishrana/kase'}>
                                             Kaše
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/posebna-ishrana/sejkovi'}>
                                             Šejkovi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/posebna-ishrana/zasladjivaci'}>
                                             Zaslađivači
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/posebna-ishrana/sportisti'}>
                                             Sportisti
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/posebna-ishrana/bombone'}>
                                             Bombone
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Putna apoteka"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/putna-apoteka/dehidratacija'}>
                                             Dehidratacija
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/putna-apoteka/dijareja'}>
                                             Dijareja
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/putna-apoteka/mucnina'}>
                                             Mučnina
                                        </Link>
                                   </StyledNestedTypography >
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/putna-apoteka/auto-apoteka'}>
                                             Auto apoteka
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Stomačne tekobe"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/stomacne-tegobe/nadutost-i-gasovi'}>
                                             Nadutost i gasovi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/stomacne-tegobe/zatvor'}>
                                             Zatvor
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/stomacne-tegobe/dijareja'}>
                                             Dijareja
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/stomacne-tegobe/iritabilni-kolon'}>
                                             Iritabilni kolon
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/stomacne-tegobe/otezano-varenje-i-gorusica'}>
                                             Otežano varenje i gorušica
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Zdravo srce i cirkulacija"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/stomacne-tegobe/oralni-preparati'}>
                                             Oralni preparati
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/stomacne-tegobe/primena-na-kozi'}>
                                             Primena na koži
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Vitamini i mineralni"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/vitamin-a'}>
                                             Vitamin A
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/vitamin-b'}>
                                             Vitamin B
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/vitamin-c'}>
                                             Vitamin C
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/vitamin-d'}>
                                             Vitamin D
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/vitamin-k'}>
                                             Vitamin K
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/cink'}>
                                             Cink
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/kalijum'}>
                                             Kalijum
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/kalijum'}>
                                             Kalcijum
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/hrom'}>
                                             Hrom
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/magnezijum'}>
                                             Magnezijum
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/selen'}>
                                             Selen
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/gvozdje'}>
                                             Gvožđe
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/bakar'}>
                                             Bakar
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/bor'}>
                                             Bor
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/fluor'}>
                                             Fluor
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/fosfor'}>
                                             Fosfor
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/kompleksi-vitamina-i-minerala'}>
                                             Kompleksi vitamina i minerala
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/riblja-ulja'}>
                                             Riblja ulja
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/deca'}>
                                             Deca
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/sportisti'}>
                                             Sportisti
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/trudnice'}>
                                             Trudnice
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/vitamini-i-minerali/stariji'}>
                                             Stariji
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Preparati za primenu na koži"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/iritacije'}>
                                             Iritacije
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/oziljci-i-strije'}>
                                             Ožiljci i strije
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/hemoroidi'}>
                                             Hemoroidi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/problemi-sa-cirkulacijom'}>
                                             Problemi sa cirkulacijom
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/intimna-nega'}>
                                             Intimna nega
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/opekotine'}>
                                             Opekotine
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/sportske-povrede'}>
                                             Sportske povrede
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/reuma'}>
                                             Reuma
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/antiseptici'}>
                                             Antiseptici
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/gljivice'}>
                                             Gljivice
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/rozacea'}>
                                             Rozacea
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/vitiligo'}>
                                             Vitiligo
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/boginje'}>
                                             Boginje
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/herpes'}>
                                             Herpes
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/seboreicni-dermatitis'}>
                                             Seboreični dermatitis
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/zuljevi-kurje-oci-bradavice'}>
                                             Žuljevi, kurje oči, bradavice
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/ekcem-psorijaza'}>
                                             Ekcem, psorijaza
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/suva-atopijska-koza'}>
                                             Suva, atopijska koža
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/lokalni-anestetici'}>
                                             Lokalni anestetici
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/preparati-za-primenu-na-kozi/povrsinske-rane'}>
                                             Površinske rane
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Oči i uši"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/oci-i-usi/tablete-kapsule-rastvori'}>
                                             Tablete, kapsule, rastvori
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/oci-i-usi/higijena-nega'}>
                                             Higijena, nega
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/oci-i-usi/kapi'}>
                                             Kapi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/oci-i-usi/kapi'}>
                                             Masti
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/oci-i-usi/kapi'}></Link>
                                        Naočare
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        Tečnosti i kutije za sočiva<Link href={'/proizvodi/apoteka/oci-i-usi/kapi'}></Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/oci-i-usi/cepovi-za-usi'}>
                                             Čepovi za uši
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/oci-i-usi/sprejevi'}>
                                             Sprejevi
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <NestedMenuItem
                              label="Prva pomoć"
                              parentMenuOpen={open}
                         >
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/prva-pomoc/antiseptici'}>
                                             Antiseptici
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/prva-pomoc/flasteri'}>
                                             Flasteri
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/apoteka/prva-pomoc/zavojni-materijal'}>
                                             Zavojni materijal
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/energija-i-umor'}>
                                        Energija i umor
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/sokovi'}>
                                        Sokovi
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/antioksidansi-detoksikacija'}>
                                        Antioksidansi, detoksikacija
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/biljne-kapi-biljna-i-etericna-ulja'}>
                                        Biljne kapi, biljna i eterična ulja
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/bubrezi-mokracni-putevi'}>
                                        Bubrezi i mokraćni putevi
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/cajevi'}>
                                        Čajevi
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/dijabetes-i-insulinska-resistencija'}>
                                        Dijabetes i insulinska resistencija
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/jetra-i-zuc'}>
                                        Jetra i žuč
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/kasalj'}>
                                        Kašalj
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/pms'}>
                                        PMS
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/menopauza'}>
                                        Menopauza
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/odvikavanje-od-alkohola'}>
                                        Odvikavanje od alkohola
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/pamcenje-i-koncentracija'}>
                                        Pamćenje i koncentracija
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/poremecaj-fertiliteta'}>
                                        Poremećaj fertiliteta
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/prostata-i-potencija'}>
                                        Prostata i potencija
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/stres-depresija-nesanica'}>
                                        Stres, depresija, nesanica
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/apoteka/dozatori-i-sekaci-za-lekove'}>
                                        Dozatori i sekači za lekove
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>

                    </NestedMenuItem>
                    {/* ------------------------------------------------------------------------------- */}

                    {/* <NestedMenuItem label='Lice' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Higijena lica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Trepavice i obrve
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Hidratacija
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Anti-age
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Osetljiva koža
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Suva i atopijska koža
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Osetljiva koža, sklona crvenilu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Specificna nega, iritacije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Normalna koža
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Masna i problematicna koža
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Hiperpigmentacije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega usana
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Telo' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ostecena koža
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pilinzi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Celulit i strije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Losioni i kreme za telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega ruku i noktiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dezodoransi, stikovi i roll-on
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Suva koža i ekcemi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dermatitis i iritacija kože
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega grudi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Zadebljanja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Svrab
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ulja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Higijena tela
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Kosa i koža glave' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Opadanje kose
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega kose na suncu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Osetljiva koža glave
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamini i dodaci prehrani
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Normalna kosa
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Suva i oštećena kosa
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Masna kosa
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Perut
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Farbe za kosu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Bebe i deca' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pranje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sunčanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Zaštita od sunca' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bebe i deca
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Lice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Muškarci
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem> */}

                    {/* --------------------------Lepota i nega------------------------------------------ */}
                    {/* <NestedMenuItem label='Lepota i nega' parentMenuOpen={open}>

                                                  <NestedMenuItem label='Pribor za negu' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Četke i češljevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Makazice, gricklalice, turpije i pincete
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ogledala
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Lice' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Blaznice i tuferi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Četkice i aplikatori za šminku
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Gelovi i pene za lice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Veštačke trepavice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Šminka za lice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Šminka za oči i obrve
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Telo' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega grudi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Piling
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Gelovi za tuširanje, kupke i soli
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pene i pilinzi za kupanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Mleka, kreme i losioni
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ulja za telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Intimna nega' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Higijena
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Tamponi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ulošci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ulošci za inkontinenciju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vaginalete, kreme, gelovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Lubrikanti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Oralna higijena' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Paste za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Četkice i konac za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Proteze i kutije za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Rastvori za usta
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Afte
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ostalo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Kosa i koža glave' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sprejevi za suvo pranje kose
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Samponi za kosu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Regeneratori i pakovanja za kosu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ulje za kosu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kapi i ampule za kosu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Ruke' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kreme za ruke
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Lak za nokte
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega noktiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Skidači lakova za nokte
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Stopala' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dezodoransi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Žuljevi, kurije oci, urastanje noktiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Skidači lakova za nokte
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Bebe i deca' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Higijena
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Zaštita od sunca' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Odrasli
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bebe i deca
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                        </NestedMenuItem> */}

                    {/* <NestedMenuItem label='Bebi program' parentMenuOpen={open}>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography >
                                                                      Pribor za kupanje
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography >
                                                                      Bebi čajevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <NestedMenuItem label='Bebi apoteka' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Boginje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Elektroliti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Grčevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Higijena nosića
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Grickanje noktiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Higijena očiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Imunitet i apetit
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Vitamini
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Zubići
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Vaške
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Bebi kozmetika' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Deterdženti i omekšivači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Mleka, losioni, ulja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Kupke i šamponi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Micelarne vode
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Puderi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Kreme za lice i telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Kreme protiv ojeda
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Sapuni
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Balzami za usne
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Toaletne vode, dezodoransi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Tuferi i vate
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Štapići
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Vlažne maramice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Paste i četkiceza zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Oprema za bebe' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Oprema za kupatilo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Oprema za previjanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Kolica i dodaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Sedišta
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Tricikli i guralice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Nosiljke
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pribor za negu' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Četke i češljevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Grickalice, makazice, turpije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Paste za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Četkice za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pribor za hranjenje' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Tanjiri i činije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Čaše i šolje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                No spill čaše
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Escajg
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Setovi za hranjenje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Šerpice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Miljackalica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Portikle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Posude za čuvanje hrane
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Termosi i termos torbe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Flašice, cucle, glodalice, zvečke' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Cucle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Flašice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Dodaci za cucle i flašice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Termosi i termos torbe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Laže i dodaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Glodalice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Zvečke
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pelene' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Pelene za jednokratnu upotrebu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Pelene za odvikavanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Pelene za kupanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Tetra pelene
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Hrana za bebe' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Lino
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Modilac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Nestle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Nutrino
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Bebelac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Celia
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Hipp
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Humana
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Novalac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Juvitana
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Milupa
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Aptamil
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Trudnice i dojilje' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Kozmetika za telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Mrežaste gaćice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Nega i zaštita bradavica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Pojasevi i grudnjaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Ulošci za grudi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Pumpice za izmlazavanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Veštačke bradavice i pumpice za bradavice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Dozeri za mleko
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Vitaminski preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Čajevi i napici za trudnice i dojilje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Aparati' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Alarmi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Termometri
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Blenderi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Grejači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Sterilizatori
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography >
                                                                                Aspiratri za nos
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                        </NestedMenuItem> */}
                    {/* --------------------------Medicinski aparati i oprema----------------------------------------- */}
                    {/* <NestedMenuItem label='Medicinski aparati i oprema' parentMenuOpen={open}>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Aparati za analizu sna
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Prečisćivači vazduha
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Pulsni oksimetri
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Vage
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Aspiratori
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <NestedMenuItem label='Inhalatori' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Aparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dodatna oprema
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Merenje pritiska' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Aparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dodatna oprema
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Merenje sećera' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Aparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dodatna oprema
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Trake i lancete
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Toplomeri
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Stetoskopi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                        </NestedMenuItem> */}
                    {/* --------------------------Ortopedija i pomagala----------------------------------------- */}
                    <NestedMenuItem
                         label="Ortopedija i pomagala" parentMenuOpen={open}>
                         <NestedMenuItem label='Antidekubitalna pomagala' parentMenuOpen={open}>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/antidekubitalna-pomagala/jastuci'}>
                                             Jastuci
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                              <StyledMenuItem onClick={handleClose}>
                                   <StyledNestedTypography >
                                        <Link href={'/proizvodi/antidekubitalna-pomagala/duseci'}>
                                             Dušeci
                                        </Link>
                                   </StyledNestedTypography>
                              </StyledMenuItem>
                         </NestedMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/ortopedija-i-pomagala/antidekubitalna-pomagala/stake'}>
                                        Štake
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/ortopedija-i-pomagala/antidekubitalna-pomagala/stapovi'}>
                                        Štapovi
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/ortopedija-i-pomagala/ortoze'}>
                                        Ortoze
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/ortopedija-i-pomagala/kinezi-trake'}>
                                        Kinezi trake
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/ortopedija-i-pomagala/hodalice'}>
                                        Hodalice
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                         <StyledMenuItem onClick={handleClose}>
                              <StyledNestedTypography >
                                   <Link href={'/proizvodi/ortopedija-i-pomagala/postoljni-podmetaci'}>
                                        Postoljni podmetači
                                   </Link>
                              </StyledNestedTypography>
                         </StyledMenuItem>
                    </NestedMenuItem>
                    {/* --------------------------Dezinfekcija, dezinsekcija, maske----------------------------------------- */}
                    {/* <NestedMenuItem label='Dezinfekcija, dezinsekcija, maske' parentMenuOpen={open}>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Sredstva za dezinfekciju
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Repelenti
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <NestedMenuItem label='Maske za lice' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Odrasli
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Deca
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                        </NestedMenuItem> */}
                    {/* --------------------------Obuca, carape, ulosci---------------------------------------- */}
                    {/* <NestedMenuItem label='Obuća, čarape, ulošci' parentMenuOpen={open}>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bebe
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <NestedMenuItem label='Deca' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dečaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Devojčice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Odrasli' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Muškarci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Žene
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Čarape za vene
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Ulošci za stopala
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Štitnici i separatori
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                        </NestedMenuItem> */}


               </StyledProductMenu>
          </Box >
     );
}
