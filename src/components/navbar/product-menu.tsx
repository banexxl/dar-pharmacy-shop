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
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Alergije
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Anemije
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Antioksidanti i detoksikacija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Biljne kapi i etarska ulja
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bol
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bubrezi o mokracni putevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Cajevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  {/* <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Dijabetes i insulinska resistencija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem> */}
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Hemoroidi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Hlesterol i trigliceridi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Imunitet i prehlada
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Jetra i zuc
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Kasalj
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Kosa, koza, nokti
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Kosti i zglobovi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Menopauza
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      PMS
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Mrsavljenje i celulit
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Odvikavanje od alkohola
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Pamcenje i koncentracija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Poremecaj fertiliteta
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Prostata i potencija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Posebna ishrana
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Posebna ishrana
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Putna apoteka
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Stomacne tegobe
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Stres, depresija, nesanica
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Srce i cirkulacija
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Vitamini i minerali
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Preparati za kozu
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Oci i usi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Prva pomoc
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Dozatori i sekaci za lekove
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                        </NestedMenuItem>
                                        {/* --------------------------Medicinska kozmetika------------------------------------------ */}
                                        <NestedMenuItem
                                                  label="Medicinska kozmetika"
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
                                                                                Osetljiva koza
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Suva i atopijska koza
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Osetljiva koza, sklona crvenilu
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Specificna nega, iritacije
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Normalna koza
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Masna i problematicna koza
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
                                                                                Ostecena koza
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
                                                                                Suva koza i ekcemi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Dermatitis i iritacija koze
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
                                                  <NestedMenuItem label='Kosa i koza glave' parentMenuOpen={open}>
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
                                                                                Osetljiva koza glave
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
                                                                                Suva i ostecena kosa
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
                                                                                Suncanje
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Zastita od sunca' parentMenuOpen={open}>
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
                                                                      Muskarci
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Brendovi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                        </NestedMenuItem>
                                        {/* --------------------------Lepota i nega------------------------------------------ */}
                                        <NestedMenuItem label='Lepota i nega' parentMenuOpen={open}>
                                                  <NestedMenuItem label='Lice' parentMenuOpen={open}>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Blaznice i tuferi
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Cetkice i aplikatori za sminku
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Gelovi i pene za lice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Vestacke trepavice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sminka za lice
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Sminka za oci i obrve
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
                                                                                Gelovi za tusiranje, kupke i soli
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
                                                                                Ulosci
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Ulosci za inkontinenciju
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
                                                                                Cetkice i konac za zube
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
                                                  <NestedMenuItem label='Kosa i koza glave' parentMenuOpen={open}>
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
                                                                                Skidaci lakova za nokte
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
                                                                                Zuljevi, kurije oci, urastanje noktiju
                                                                      </StyledNestedTypography>
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={handleClose}>
                                                                      <StyledNestedTypography>
                                                                                Skidaci lakova za nokte
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
                                                  <NestedMenuItem label='Zastita od sunca' parentMenuOpen={open}>
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
                                                                      Bebi apoteka
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bebi kozmetika
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Oprema za bebe
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Pribor za negu
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Pribor za hranjenje
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Flasice, cucle, glodalice, zvecke
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Pelene
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Hrana za bebe
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Bebi cajevi
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Trudnice dojilje
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
                                                  <StyledMenuItem onClick={handleClose}>
                                                            <StyledNestedTypography>
                                                                      Aparati
                                                            </StyledNestedTypography>
                                                  </StyledMenuItem>
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
