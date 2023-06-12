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
                                        {
                                                  isScreenToMedium ?
                                                            <LocalMallIcon sx={{ color: Colors.shaft }} />
                                                            :
                                                            <Typography sx={{ color: Colors.shaft }}>
                                                                      Proizvodi
                                                            </Typography>
                                        }
                              </Button>
                              <StyledProductMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                        <MenuItem onClick={handleClose}>
                                                  <Typography>
                                                            Akcije
                                                  </Typography>
                                        </MenuItem>
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
                                                                      Antioksidanti
                                                            </Typography>
                                                  </MenuItem>
                                                  <MenuItem onClick={handleClose}>


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
                                                                                          Antioksidanti
                                                                                </Typography>
                                                                      </MenuItem>
                                                            </NestedMenuItem>
                                                  </MenuItem>
                                        </NestedMenuItem>

                                        <NestedMenuItem
                                                  label="Medicinska kozmetika"
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
                                                                      Antioksidanti
                                                            </Typography>
                                                  </MenuItem>
                                        </NestedMenuItem>

                                        <NestedMenuItem
                                                  label="Lepota i nega"
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
                                                                      Antioksidanti
                                                            </Typography>
                                                  </MenuItem>
                                        </NestedMenuItem>

                                        <NestedMenuItem
                                                  label="Bebi program"
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
                                                                      Antioksidanti
                                                            </Typography>
                                                  </MenuItem>
                                        </NestedMenuItem>

                                        <NestedMenuItem
                                                  label="Dezinfekcija, dezinsekcija, maske"
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
                                                                      Antioksidanti
                                                            </Typography>
                                                  </MenuItem>
                                        </NestedMenuItem>
                              </StyledProductMenu>
                    </Box>
          );
}
