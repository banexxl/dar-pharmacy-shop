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

export const ProductsMenu = () => {
          const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
          const open = Boolean(anchorEl);
          const [loading, setLoading] = useState(false)

          const handleClick = (event: React.MouseEvent<HTMLElement>) => {
                    setAnchorEl(event.currentTarget)
                    setLoading(true)
          };
          const handleClose = () => {
                    setAnchorEl(null)
          };
          const onLinkClick = () => {
                    setLoading(true)
                    setAnchorEl(null)
          }
          return (
                    <Box>
                              {
                                        loading ?
                                                  <LoadingWheel />
                                                  :
                                                  null
                              }
                              <Button
                                        variant="contained"
                                        onClick={handleClick}
                                        endIcon={<ArrowDownwardIcon />}
                                        sx={{
                                                  ':hover': {
                                                            backgroundColor: Colors.primary,
                                                            textEmphasisColor: Colors.dim_grey
                                                  }
                                        }}
                              >
                                        <StyledNestedTypography sx={{ textAlign: 'center' }}>
                                                  Proizvodi
                                        </StyledNestedTypography>

                              </Button>
                              <StyledProductMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography onClick={() => onLinkClick()}>
                                                            <Link href={'/proizvodi/akcije'}>
                                                                      Akcije
                                                            </Link>
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography onClick={() => onLinkClick()}>
                                                            <Link href={'/proizvodi/popularno'}>
                                                                      Popularno
                                                            </Link>
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                                        {/* --------------------------Prirodna kozmetika------------------------------------------ */}
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography onClick={() => onLinkClick()}>
                                                            <Link href={'/proizvodi/prirodna-kozmetika'}>
                                                                      Prirodna kozmetika
                                                            </Link>
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                                        {/* --------------------------Bebi program----------------------------------------- */}
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography onClick={() => onLinkClick()}>
                                                            <Link href={'/proizvodi/bebi-program'}>
                                                                      Bebi program
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
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/alergije/kapsule-i-tablete'}>
                                                                                          Kapsule i tablete
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>

                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/alergije/sprejevi-za-nos'}>
                                                                                          Sprejevi za nos
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/alergije/masti-gelovi'}>
                                                                                          Masti, gelovi
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
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
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/anemija/folna-kiselina-i-vitamini'}>
                                                                                          Folna kiselina i vitamini
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/anemija/biljni-preparati'}>
                                                                                          Biljni preparati
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
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
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/bol/bol-u-grlu'}>
                                                                                          Bol u grlu
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/bol/menstrualni-bolovi'}>
                                                                                          Menstrualni bolovi
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
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
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/hemoroidi/oralni-preparati'}>
                                                                                          Oralni preparati
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/hemoroidi/lokalna-primena'}>
                                                                                          Lokalna primena
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Holesterol i trigliceridi"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/holesterol-i-trigliceridi/omega-masne-kiseline'}>
                                                                                          Omega masne kiseline
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
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
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/imunitet-prehlada/deca'}>
                                                                                          Deca
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/imunitet-prehlada/vitamini-i-minerali'}>
                                                                                          Vitamini i minerali
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                <Link href={'/proizvodi/apoteka/imunitet-prehlada/sprejevi-za-nos'}>
                                                                                          Sprejevi za nos
                                                                                </Link>
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sprejevi za grlo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Irigacioni set
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Masti, gelovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Biljne kapi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Med, matični mleč i propolis
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Pastile za grlo
                                                                      </StyledNestedTypography >
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Aloja, ehinacea, noni, aronija
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Probiotici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Omega masne kiseline
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Ostalo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Kosa, koža i nokti"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Lokalna primena
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Kosti i zglobovi"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Primena na koži
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Mršavljenje, celulit"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Primena na koži
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Posebna ishrana"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kaše
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Šejkovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Zaslađivači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sportisti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Bombone
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Putna apoteka"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Dehidratacija
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Dijareja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Mučnina
                                                                      </StyledNestedTypography >
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Auto apoteka
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Stomačne tekobe"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Nadutost i gasovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Zatvor
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Dijareja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Iritabilni kolon
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Otežan ovarenje i gorušica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Zdravo srce i cirkulacija"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Primena na koži
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Vitamini i mineralni"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitamin A
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitamin B
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitamin C
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitamin D
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitamin K
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Cink
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kalijum
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kalcijum
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Hrom
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Magnezijum
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Selen
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Gvožđe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <NestedMenuItem
                                                                      label="Ostali minerali"
                                                                      parentMenuOpen={open}
                                                            >
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                          Bakar
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                          Bor
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                          Fluor
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                          Fosfor
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                            </NestedMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kompleksi vitamina i minerala
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Riblja ulja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Deca
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sportisti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Trudnice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Stariji
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Preparati za primenu na koži"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Iritacije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Ožiljci i strije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Hemoroidi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Problemi sa cirkulacijom
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Intimna nega
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Opekotine
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sportske povrede
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Reuma
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Antiseptici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Gljivice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Rozacea
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitligo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Boginje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Herpes
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Seboreični dermatitis
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Žuljevi, kurje oči, bradavice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Ekcem, psorijaza
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Suva, atopijska koža
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Lokalni anestetici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Površinske rane
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Oči i uši"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Tablete, kapsule, rastvori
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Higijena, nega
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kapi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Masti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Naočare
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Tečnosti i kutije za sočiva
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Čepovi za uši
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sprejevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Prva pomoć"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Antiseptici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Flasteri
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Zavojni materijal
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Energija i umor
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Sokovi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Antioksidansi, detoksikacija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Biljne kapi, biljna i eterična ulja
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Bubrezi i mokraćni putevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Čajevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Dijabetes i insulinska resistencija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Jetra i žuč
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Kašalj
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      PMS
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Menopauza
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Odvikavanje od alkohola
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Pamćenje i koncentracija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Poremećaj fertiliteta
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Prostata i potencija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Stres, depresija, nesanica
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Dozatori i sekači za lekove
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
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Pribor za kupanje
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Bebi čajevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <NestedMenuItem label='Bebi apoteka' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Boginje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Elektroliti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Grčevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Higijena nosića
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Grickanje noktiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Higijena očiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Imunitet i apetit
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitamini
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Zubići
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vaške
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Bebi kozmetika' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Deterdženti i omekšivači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Mleka, losioni, ulja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kupke i šamponi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Micelarne vode
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Puderi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kreme za lice i telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kreme protiv ojeda
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sapuni
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Balzami za usne
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Toaletne vode, dezodoransi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Tuferi i vate
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Štapići
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vlažne maramice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Paste i četkiceza zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Oprema za bebe' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Oprema za kupatilo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Oprema za previjanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kolica i dodaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sedišta
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Tricikli i guralice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Nosiljke
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pribor za negu' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Četke i češljevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Grickalice, makazice, turpije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Paste za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Četkice za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pribor za hranjenje' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Tanjiri i činije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Čaše i šolje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                No spill čaše
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Escajg
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Setovi za hranjenje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Šerpice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Miljackalica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Portikle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Posude za čuvanje hrane
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Termosi i termos torbe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Flašice, cucle, glodalice, zvečke' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Cucle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Flašice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Dodaci za cucle i flašice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Termosi i termos torbe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Laže i dodaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Glodalice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Zvečke
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pelene' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Pelene za jednokratnu upotrebu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Pelene za odvikavanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Pelene za kupanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Tetra pelene
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Hrana za bebe' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Lino
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Modilac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Nestle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Nutrino
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Bebelac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Celia
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Hipp
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Humana
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Novalac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Juvitana
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Milupa
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Aptamil
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Trudnice i dojilje' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Kozmetika za telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Mrežaste gaćice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Nega i zaštita bradavica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Pojasevi i grudnjaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Ulošci za grudi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Pumpice za izmlazavanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Veštačke bradavice i pumpice za bradavice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Dozeri za mleko
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Vitaminski preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Čajevi i napici za trudnice i dojilje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Aparati' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Alarmi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Termometri
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Blenderi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Grejači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Sterilizatori
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
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
                                        <NestedMenuItem label='Ortopedija i pomagala' parentMenuOpen={open}>
                                                  <NestedMenuItem label='Antidekubitalna pomagala' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Jastuci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                                Dušeci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Štake
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Štapovi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Ortoze
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Kinezi trake
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Hodalice
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography onClick={() => onLinkClick()}>
                                                                      Postoljni podmetači
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
                    </Box>
          );
}
