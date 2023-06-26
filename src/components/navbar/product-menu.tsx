import * as React from 'react';
import Button from '@mui/material/Button';
import { StyledProductMenu } from '@/styles/navbar/product-menu';
import { Box, Typography } from '@mui/material';
import { NestedMenuItem } from 'mui-nested-menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { StyledMenuItem, StyledNestedTypography } from '@/styles/products-nested/products-nested';

export const ProductsMenu = () => {
          const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
          const open = Boolean(anchorEl);

          const handleClick = (event: React.MouseEvent<HTMLElement>) => {
                    setAnchorEl(event.currentTarget);
          };
          const handleClose = () => {
                    setAnchorEl(null);
          };

          return (

                    <Box>
                              <Button
                                        variant="contained"
                                        onClick={handleClick}
                                        endIcon={<ArrowDownwardIcon />}
                              >
                                        <StyledNestedTypography sx={{ textAlign: 'center' }}>
                                                  Proizvodi
                                        </StyledNestedTypography>
                              </Button>
                              <StyledProductMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                        {/* --------------------------APOTEKA------------------------------------------ */}
                                        <NestedMenuItem
                                                  label="Apoteka"
                                                  parentMenuOpen={open}
                                        >
                                                  <NestedMenuItem
                                                            label="Alergije"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kapsule i tablete
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sprejevi za nos
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Masti, gelovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Irigacioni set
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Anemije"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Folna kiselina i vitamini
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Biljni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Preparati gvožđa
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Bol"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bol u grlu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Menstrualni bolovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bolovi u kostima i mišićima
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Hemoroidi"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Lokalna primena
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bolovi u kostima i mišićima
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Holesterol i trigliceridi"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Omega masne kiseline
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ostalo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bolovi u kostima i mišićima
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Imunitet, prehlada"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Deca
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamini i minerali
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sprejevi za nos
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sprejevi za grlo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Irigacioni set
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Masti, gelovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Biljne kapi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Med, matični mleč i propolis
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pastile za grlo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Aloja, ehinacea, noni, aronija
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Probiotici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Omega masne kiseline
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ostalo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Kosa, koža, nokti"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Lokalna primena
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Kosti i zglobovi"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Primena na koži
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Mršavljenje, celulit"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Primena na koži
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Posebna ishrana"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kaše
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Šejkovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Zaslađivači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sportisti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bombone
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Putna apoteka"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dehidratacija
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dijareja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Mučnina
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Auto apoteka
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Stomačne tekobe"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nadutost i gasovi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Zatvor
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dijareja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Iritabilni kolon
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Otežan ovarenje i gorušica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Zdravo srce i cirkulacija"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oralni preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Primena na koži
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Vitamini i mineralni"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamin A
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamin B
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamin C
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamin D
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamin K
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Cink
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kalijum
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kalcijum
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Hrom
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Magnezijum
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Selen
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Gvožđe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <NestedMenuItem
                                                                      label="Ostali minerali"
                                                                      parentMenuOpen={open}
                                                            >
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography>
                                                                                          Bakar
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography>
                                                                                          Bor
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography>
                                                                                          Fluor
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                                      <StyledMenuItem onClick={handleClose}>
                                                                                <StyledNestedTypography>
                                                                                          Fosfor
                                                                                </StyledNestedTypography>
                                                                      </StyledMenuItem>
                                                            </NestedMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kompleksi vitamina i minerala
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Riblja ulja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Deca
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sportisti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Trudnice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Stariji
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Preparati za primenu na koži"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Iritacije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ožiljci i strije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Hemoroidi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Problemi sa cirkulacijom
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Intimna nega
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Opekotine
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sportske povrede
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Reuma
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Antiseptici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Gljivice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Rozacea
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitligo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Boginje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Herpes
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Seboreični dermatitis
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Žuljevi, kurje oči, bradavice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ekcem, psorijaza
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Suva, atopijska koža
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Lokalni anestetici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Površinske rane
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Oči i uši"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Tablete, kapsule, rastvori
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Higijena, nega
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kapi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Masti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Naočare
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Tečnosti i kutije za sočiva
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Čepovi za uši
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sprejevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem
                                                            label="Prva pomoć"
                                                            parentMenuOpen={open}
                                                  >
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Antiseptici
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Flasteri
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Zavojni materijal
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Energija i umor
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Sokovi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Antioksidansi, detoksikacija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Biljne kapi, biljna i eterična ulja
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bubrezi i mokraćni putevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Čajevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Dijabetes i insulinska resistencija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Jetra i žuč
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Kašalj
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      PMS
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Menopauza
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Odvikavanje od alkohola
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Pamćenje i koncentracija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Poremećaj fertiliteta
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Prostata i potencija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Stres, depresija, nesanica
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Dozatori i sekači za lekove
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                        </NestedMenuItem>
                                        {/* --------------------------Prirodna kozmetika------------------------------------------ */}
                                        <NestedMenuItem
                                                  label="Prirodna kozmetika"
                                                  parentMenuOpen={open}
                                        >

                                                  <NestedMenuItem label='Lice' parentMenuOpen={open}>
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
                                                  </StyledMenuItem>

                                        </NestedMenuItem>
                                        {/* --------------------------Lepota i nega------------------------------------------ */}
                                        <NestedMenuItem label='Lepota i nega' parentMenuOpen={open}>

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

                                        </NestedMenuItem>
                                        {/* --------------------------Bebi program----------------------------------------- */}
                                        <NestedMenuItem label='Bebi program' parentMenuOpen={open}>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Pribor za kupanje
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bebi čajevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>

                                                  <NestedMenuItem label='Bebi apoteka' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Boginje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Elektroliti
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Grčevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Higijena nosića
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Grickanje noktiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Higijena očiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Imunitet i apetit
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitamini
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Zubići
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vaške
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Bebi kozmetika' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Deterdženti i omekšivači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Mleka, losioni, ulja
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kupke i šamponi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Micelarne vode
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Puderi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kreme za lice i telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kreme protiv ojeda
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sapuni
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Balzami za usne
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Toaletne vode, dezodoransi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Tuferi i vate
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Štapići
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vlažne maramice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Paste i četkiceza zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Oprema za bebe' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oprema za kupatilo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Oprema za previjanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kolica i dodaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sedišta
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Tricikli i guralice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nosiljke
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pribor za negu' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Četke i češljevi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Grickalice, makazice, turpije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Paste za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Četkice za zube
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pribor za hranjenje' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Tanjiri i činije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Čaše i šolje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                No spill čaše
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Escajg
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Setovi za hranjenje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Šerpice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Miljackalica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Portikle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Posude za čuvanje hrane
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Termosi i termos torbe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Flašice, cucle, glodalice, zvečke' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Cucle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Flašice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dodaci za cucle i flašice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Termosi i termos torbe
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Laže i dodaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Glodalice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Zvečke
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Pelene' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pelene za jednokratnu upotrebu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pelene za odvikavanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pelene za kupanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Tetra pelene
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Hrana za bebe' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Lino
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Modilac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nestle
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nutrino
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Bebelac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Celia
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Hipp
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Humana
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Novalac
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Juvitana
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Milupa
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Aptamil
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Trudnice i dojilje' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Kozmetika za telo
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Mrežaste gaćice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Nega i zaštita bradavica
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pojasevi i grudnjaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ulošci za grudi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Pumpice za izmlazavanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Veštačke bradavice i pumpice za bradavice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dozeri za mleko
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vitaminski preparati
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Čajevi i napici za trudnice i dojilje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                                  <NestedMenuItem label='Aparati' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Alarmi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Termometri
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Blenderi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Grejači
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sterilizatori
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Aspiratri za nos
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>

                                        </NestedMenuItem>
                                        {/* --------------------------Medicinski aparati i oprema----------------------------------------- */}
                                        <NestedMenuItem label='Medicinski aparati i oprema' parentMenuOpen={open}>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Aparati za analizu sna
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Preciscivaci vazduha
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
                                                  <NestedMenuItem label='Merenje secera' parentMenuOpen={open}>
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
                                        </NestedMenuItem>
                                        {/* --------------------------Ortopedija i pomagala----------------------------------------- */}
                                        <NestedMenuItem label='Ortopedija i pomagala' parentMenuOpen={open}>
                                                  <NestedMenuItem label='Antidekubitalna pomagala' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Jastuci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Duseci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Stake
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Stapovi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Ortoze
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Kinezi trake
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Hodalice
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Postoljni podmetaci
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                        </NestedMenuItem>
                                        {/* --------------------------Dezinfekcija, dezinsekcija, maske----------------------------------------- */}
                                        <NestedMenuItem label='Dezinfekcija, dezinsekcija, maske' parentMenuOpen={open}>
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
                                        </NestedMenuItem>
                                        {/* --------------------------Obuca, carape, ulosci---------------------------------------- */}
                                        <NestedMenuItem label='Obuca, carape, ulosci' parentMenuOpen={open}>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bebe
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <NestedMenuItem label='Deca' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Decaci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Devojcice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Odrasli' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Muskarci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Zene
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                        </NestedMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography>
                                                            Carape za vene
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography>
                                                            Ulosci za stopala
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography>
                                                            Stitnici i separatori
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography>
                                                            AKCIJE
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                                  <StyledNestedTypography>
                                                            PROMOCIJE
                                                  </StyledNestedTypography>
                                        </StyledMenuItem>
                              </StyledProductMenu>
                    </Box>
          );
}
