import * as React from 'react';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { StyledProductMenu } from '@/styles/navbar/product-menu';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { IconMenuItem, NestedMenuItem } from 'mui-nested-menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import theme, { Colors } from '@/styles/theme';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const ProductsMenu = () => {
          const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
          const open = Boolean(anchorEl);
          const handleClick = (event: React.MouseEvent<HTMLElement>) => {
                    setAnchorEl(event.currentTarget);
          };
          const handleClose = () => {
                    setAnchorEl(null);
          };

          const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));

          return (

                    <Box>
                              <Button
                                        variant="contained"
                                        onClick={handleClick}
                                        endIcon={<ArrowDownwardIcon />}
                              >
                                        <Typography sx={{ textAlign: 'center' }}>
                                                  Proizvodi
                                        </Typography>
                              </Button>
                              <StyledProductMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                        {/* --------------------------AKCIJE------------------------------------------ */}
                                        <MenuItem onClick={handleClose}>
                                                  <Typography>
                                                            Akcije
                                                  </Typography>
                                        </MenuItem>
                                        {/* --------------------------APOTEKA------------------------------------------ */}
                                        <NestedMenuItem
                                                  label="Apoteka"
                                                  parentMenuOpen={open}
                                        >
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Alergije
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Anemije
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Antioksidanti i detoksikacija
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Biljne kapi i etarska ulja
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Bol
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Bubrezi o mokracni putevi
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Cajevi
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Dijabetes i insulinska resistencija
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Hemoroidi
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Hlesterol i trigliceridi
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Imunitet i prehlada
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Jetra i zuc
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Kasalj
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Kosa, koza, nokti
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Kosti i zglobovi
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Menopauza
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      PMS
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Mrsavljenje i celulit
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Odvikavanje od alkohola
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Pamcenje i koncentracija
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Poremecaj fertiliteta
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Prostata i potencija
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Posebna ishrana
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Posebna ishrana
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Putna apoteka
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Stomacne tegobe
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Stres, depresija, nesanica
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Srce i cirkulacija
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Vitamini i minerali
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Preparati za kozu
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Oci i usi
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Prva pomoc
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Dozatori i sekaci za lekove
                                                            </Typography>
                                                  </MenuItem>
                                        </NestedMenuItem>
                                        {/* --------------------------Med kozmetika------------------------------------------ */}
                                        <NestedMenuItem
                                                  label="Medicinska kozmetika"
                                                  parentMenuOpen={open}
                                        >
                                                  <NestedMenuItem label='Lice' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Higijena lica
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Trepavice i obrve
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Hidratacija
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Anti-age
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Osetljiva koza
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Suva i atopijska koza
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Osetljiva koza, sklona crvenilu
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Specificna nega, iritacije
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Normalna koza
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Masna i problematicna koza
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Hiperpigmentacije
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega usana
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Telo' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Ostecena koza
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Pilinzi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Celulit i strije
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Losioni i kreme za telo
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega ruku i noktiju
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Dezodoransi, stikovi i roll-on
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Suva koza i ekcemi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Dermatitis i iritacija koze
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega grudi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Zadebljanja
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Svrab
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Ulja
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Higijena tela
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Kosa i koza glave' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Opadanje kose
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega kose na suncu
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Osetljiva koza glave
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Vitamini i dodaci prehrani
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Normalna kosa
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Suva i ostecena kosa
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Masna kosa
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Perut
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Farbe za kosu
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Bebe i deca' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Pranje
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Suncanje
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Zastita od sunca' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Oralni preparati
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Bebe i deca
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Lice
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Telo
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Muskarci
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Brendovi
                                                            </Typography>
                                                  </MenuItem>
                                        </NestedMenuItem>
                                        {/* --------------------------Lepota i nega------------------------------------------ */}
                                        <NestedMenuItem label='Lepota i nega' parentMenuOpen={open}>
                                                  <NestedMenuItem label='Lice' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Blaznice i tuferi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Cetkice i aplikatori za sminku
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Gelovi i pene za lice
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Vestacke trepavice
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Sminka za lice
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Sminka za oci i obrve
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Telo' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega grudi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Piling
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Gelovi za tusiranje, kupke i soli
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Pene i pilinzi za kupanje
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Mleka, kreme i losioni
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Ulja za telo
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Intimna nega' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Higijena
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Tamponi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Ulosci
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Ulosci za inkontinenciju
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Vaginalete, kreme, gelovi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Lubrikanti
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Oralna higijena' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Paste za zube
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Cetkice i konac za zube
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Proteze i kutije za zube
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Rastvori za usta
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Afte
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Ostalo
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Kosa i koza glave' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Sprejevi za suvo pranje kose
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Samponi za kosu
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Regeneratori i pakovanja za kosu
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Ulje za kosu
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Kapi i ampule za kosu
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Ruke' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Kreme za ruke
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Lak za nokte
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega noktiju
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Skidaci lakova za nokte
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Stopala' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Dezodoransi
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Zuljevi, kurije oci, urastanje noktiju
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Skidaci lakova za nokte
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Bebe i deca' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Higijena
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Nega
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                                  <NestedMenuItem label='Zastita od sunca' parentMenuOpen={open}>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Odrasli
                                                                      </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                      <Typography>
                                                                                Bebe i deca
                                                                      </Typography>
                                                            </MenuItem>
                                                  </NestedMenuItem>
                                        </NestedMenuItem>
                                        {/* --------------------------Bebi program----------------------------------------- */}
                                        <NestedMenuItem label='Bebi program' parentMenuOpen={open}>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Bebi apoteka
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Bebi kozmetika
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Oprema za bebe
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Pribor za negu
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Pribor za hranjenje
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Flasice, cucle, glodalice, zvecke
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Pelene
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Hrana za bebe
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Bebi cajevi
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Trudnice dojilje
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>
                                                            <Typography>
                                                                      Aparati
                                                            </Typography>
                                                  </MenuItem>
                                        </NestedMenuItem>
                              </StyledProductMenu>
                    </Box>
          );
}
