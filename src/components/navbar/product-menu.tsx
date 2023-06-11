import * as React from 'react';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { StyledProductMenu } from '@/styles/navbar/product-menu';
import { Box, Typography } from '@mui/material';
import { IconMenuItem, NestedMenuItem } from 'mui-nested-menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Colors } from '@/styles/theme';

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
                                        <Typography sx={{ color: Colors.shaft }}>
                                                  Proizvodi
                                        </Typography>
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
