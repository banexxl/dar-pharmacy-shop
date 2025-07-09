import * as React from 'react';
import { Box, Menu, MenuItem, Typography, Popover } from '@mui/material';
import { StyledProductMenu } from '@/styles/navbar/product-menu';
import { StyledMenuItem } from '@/styles/products-nested/products-nested';
import LoadingWheel from '@/components/loading/loading';
import { useState } from 'react';
import { Colors } from '@/styles/theme';
import { useUIContext } from '@/context/ui/ui.context';
import { useRouter } from 'next/router';

const menuItemStyle = {
     backgroundColor: '#ffe6e6',
     color: Colors.primary.main,
     '&:hover': {
          backgroundColor: '#ffcccc',
          color: Colors.primary.main,
     },
};

export const ProductsMenu = () => {
     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
     const [submenuAnchorEl, setSubmenuAnchorEl] = useState<null | HTMLElement>(null);
     const [submenu2AnchorEl, setSubmenu2AnchorEl] = useState<null | HTMLElement>(null);
     const [submenu3AnchorEl, setSubmenu3AnchorEl] = useState<null | HTMLElement>(null);
     const [submenu4AnchorEl, setSubmenu4AnchorEl] = useState<null | HTMLElement>(null);
     const open = Boolean(anchorEl);

     const { drawerOpen, setDrawerOpen, showLoadingWheel, setShowLoadingWheel } = useUIContext();
     const router = useRouter();

     const handleProductsClick = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
          setAnchorEl(null);
          setSubmenuAnchorEl(null);
          setSubmenu2AnchorEl(null);
          setSubmenu3AnchorEl(null);
          setSubmenu4AnchorEl(null);
          setDrawerOpen(false);
     };

     const onLinkClick = (href: string) => {
          setShowLoadingWheel('flex');
          handleClose();
          router.push(href);
     };

     const toggleSubmenu = (
          currentAnchor: HTMLElement,
          setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
          currentState: HTMLElement | null
     ) => {
          if (currentState === currentAnchor) {
               setter(null); // Close submenu if it's already open
          } else {
               setter(currentAnchor);
          }
     };

     return (
          <Box>
               <LoadingWheel showLoadingWheel={showLoadingWheel} />
               <Typography
                    sx={{ textAlign: 'center', color: Colors.secondary.custom, cursor: 'pointer' }}
                    onClick={handleProductsClick}
               >
                    Proizvodi
               </Typography>

               <StyledProductMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem
                         onClick={(e) => toggleSubmenu(e.currentTarget, setSubmenuAnchorEl, submenuAnchorEl)}
                         sx={menuItemStyle}
                    >
                         <Typography>
                              Prirodna kozmetika
                         </Typography>
                    </MenuItem>
                    <MenuItem
                         onClick={(e) => toggleSubmenu(e.currentTarget, setSubmenu2AnchorEl, submenu2AnchorEl)}
                         sx={menuItemStyle}
                    >
                         <Typography>
                              Sve za bebe
                         </Typography>
                    </MenuItem>
                    <MenuItem
                         onClick={(e) => toggleSubmenu(e.currentTarget, setSubmenu4AnchorEl, submenu4AnchorEl)}
                         sx={menuItemStyle}
                    >
                         <Typography>
                              Biljne tinkture
                         </Typography>
                    </MenuItem>
                    <MenuItem
                         onClick={(e) => toggleSubmenu(e.currentTarget, setSubmenu3AnchorEl, submenu3AnchorEl)}
                         sx={menuItemStyle}
                    >
                         Čišćenje organizma
                    </MenuItem>

                    {[
                         ['/proizvodi/ruska-apoteka', 'Ruska Apoteka'],
                         ['/proizvodi/prirodni-imunitet', 'Prirodni imunitet'],
                         ['/proizvodi/kolagen', 'Kolagen'],
                         ['/proizvodi/suplementi', 'Suplementi'],
                         ['/proizvodi/ledene-kocke-za-imunitet', 'Ledene kocke za imunitet'],
                         ['/proizvodi/domaci-prirodni-melemi', 'Domaći prirodni melemi'],
                         ['/proizvodi/mast-od-jazavca', 'Mast od Jazavca'],
                         ['/proizvodi/guscija-mast', 'Guščija mast'],
                         ['/proizvodi/ulja-za-masazu', 'Ulja za masažu'],
                         ['/proizvodi/imunitet-za-decu', 'Imunitet za decu'],
                         ['/proizvodi-proizvodjac-kategorija/todoxin/prirodni-imunitet', 'Todoxin'],
                         ['/proizvodi/suplemania', 'Suplemania'],
                         ['/proizvodi/zao-prirodna-sminka', 'Zao prirodna šminka'],
                         ['/proizvodi/proizvodi-za-zene', 'Proizvodi za žene'],
                         ['/proizvodi/homeopatija', 'Homeopatija'],
                    ].map(([href, label]) => (
                         <StyledMenuItem key={label} sx={menuItemStyle} onClick={() => onLinkClick(href)}>
                              <Typography>
                                   {label}
                              </Typography>
                         </StyledMenuItem>
                    ))}
               </StyledProductMenu>

               {/* Submenu: Prirodna kozmetika */}
               <Popover
                    open={Boolean(submenuAnchorEl)}
                    anchorEl={submenuAnchorEl}
                    onClose={() => setSubmenuAnchorEl(null)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
               >
                    {[
                         'pure-hristina-lazarevic',
                         'gana-kozmetika',
                         'gloria',
                         'fitaky',
                         'weleda',
                         'majana',
                         'viviscal',
                         'herbalab',
                         'medical-plants',
                         'gamarde',
                         'aronica',
                         'phyto',
                    ].map((brand) => (
                         <StyledMenuItem
                              key={brand}
                              sx={menuItemStyle}
                              onClick={() =>
                                   onLinkClick(`/proizvodi-proizvodjac-kategorija/${brand}/prirodna-kozmetika`)
                              }
                         >
                              <Typography>{brand.charAt(0).toUpperCase() + brand.slice(1).replace(/-/g, ' ')}</Typography>
                         </StyledMenuItem>
                    ))}
               </Popover>

               {/* Submenu: Sve za bebe */}
               <Popover
                    open={Boolean(submenu2AnchorEl)}
                    anchorEl={submenu2AnchorEl}
                    onClose={() => setSubmenu2AnchorEl(null)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
               >
                    {[
                         ['fitaky', 'bebi-prirodna-kozmetika'],
                         ['azeta-bio', 'bebi-prirodna-kozmetika'],
                         ['gamarde', 'bebi-prirodna-kozmetika'],
                         ['weleda', 'bebi-prirodna-kozmetika'],
                         ['eco-boom', 'bebi-pelene'],
                    ].map(([brand, category]) => (
                         <StyledMenuItem
                              key={brand + category}
                              sx={menuItemStyle}
                              onClick={() =>
                                   onLinkClick(`/proizvodi-proizvodjac-kategorija/${brand}/${category}`)
                              }
                         >
                              <Typography>{brand.charAt(0).toUpperCase() + brand.slice(1).replace(/-/g, ' ')}</Typography>
                         </StyledMenuItem>
                    ))}
               </Popover>

               {/* Submenu: Biljne tinture */}
               <Popover
                    open={Boolean(submenu4AnchorEl)}
                    anchorEl={submenu4AnchorEl}
                    onClose={() => setSubmenu4AnchorEl(null)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
               >
                    {[
                         ['fantastik-fungi', 'biljne-tinkture'],
                         ['priroda-na-dar', 'biljne-tinkture'],
                         ['bioteo', 'biljne-tinkture'],
                    ].map(([brand, category]) => (
                         <StyledMenuItem
                              key={brand + category}
                              sx={menuItemStyle}
                              onClick={() =>
                                   onLinkClick(`/proizvodi-proizvodjac-kategorija/${brand}/${category}`)
                              }
                         >
                              <Typography>{brand.charAt(0).toUpperCase() + brand.slice(1).replace(/-/g, ' ')}</Typography>
                         </StyledMenuItem>
                    ))}
               </Popover>

               {/* Submenu: Čišćenje organizma */}
               <Popover
                    open={Boolean(submenu3AnchorEl)}
                    anchorEl={submenu3AnchorEl}
                    onClose={() => setSubmenu3AnchorEl(null)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
               >
                    <StyledMenuItem
                         sx={menuItemStyle}
                         onClick={() => onLinkClick('/proizvodi-proizvodjac-kategorija/okp/ciscenje-organizma')}
                    >
                         <Typography>OKP paket za čišćenje organizma</Typography>
                    </StyledMenuItem>
                    <StyledMenuItem
                         sx={menuItemStyle}
                         onClick={() =>
                              onLinkClick('/proizvodi-proizvodjac-kategorija/priroda-na-dar/biljne-tinkture')
                         }
                    >
                         <Typography>Priroda na dar</Typography>
                    </StyledMenuItem>
               </Popover>
          </Box>
     );
};
