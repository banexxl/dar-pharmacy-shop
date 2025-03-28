import * as React from 'react';
import { Box, Menu, MenuItem, Typography, Popover } from '@mui/material';
import { StyledProductMenu } from '@/styles/navbar/product-menu';
import { StyledMenuItem, StyledNestedTypography } from '@/styles/products-nested/products-nested';
import LoadingWheel from '@/components/loading/loading';
import { useState } from 'react';
import { Colors } from '@/styles/theme';
import { useUIContext } from '@/context/ui/ui.context';
import { useRouter } from 'next/router';

export const ProductsMenu = () => {
     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
     const [submenuAnchorEl, setSubmenuAnchorEl] = useState<null | HTMLElement>(null);
     const [submenu2AnchorEl, setSubmenu2AnchorEl] = useState<null | HTMLElement>(null);

     const open = Boolean(anchorEl);
     const submenuOpen = Boolean(submenuAnchorEl);
     const submenu2Open = Boolean(submenu2AnchorEl);

     const { drawerOpen, setDrawerOpen, showLoadingWheel, setShowLoadingWheel } = useUIContext();
     const router = useRouter();

     const handleProductsClick = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
          setAnchorEl(null);
          setSubmenuAnchorEl(null);
          setSubmenu2AnchorEl(null);
          setDrawerOpen(false);
     };

     const onLinkClick = (href: string) => {
          setShowLoadingWheel('flex');
          setAnchorEl(null);
          setSubmenuAnchorEl(null);
          setSubmenu2AnchorEl(null);
          setDrawerOpen(false);
          router.push(href);
     };

     const handleSubmenuEnter = (event: React.MouseEvent<HTMLElement>) => {
          setSubmenuAnchorEl(event.currentTarget);
     };

     const handleSubmenu2Enter = (event: React.MouseEvent<HTMLElement>) => {
          setSubmenu2AnchorEl(event.currentTarget);
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
                    <MenuItem onMouseEnter={handleSubmenuEnter} onMouseLeave={() => setSubmenuAnchorEl(null)}>
                         Prirodna kozmetika
                    </MenuItem>
                    <MenuItem onMouseEnter={handleSubmenu2Enter} onMouseLeave={() => setSubmenu2AnchorEl(null)}>
                         Sve za bebe
                    </MenuItem>
                    <StyledMenuItem onClick={() => onLinkClick('/proizvodi/ruska-apoteka')}>
                         <StyledNestedTypography>Ruska Apoteka</StyledNestedTypography>
                    </StyledMenuItem>
                    {/* ... other items like Prirodni imunitet, Kolagen, etc. */}
               </StyledProductMenu>

               {/* Submenu 1: Prirodna kozmetika */}
               <Popover
                    open={submenuOpen}
                    anchorEl={submenuAnchorEl}
                    onClose={() => setSubmenuAnchorEl(null)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    disableAutoFocus
                    disableEnforceFocus
               >
                    {[
                         ['gana-kozmetika', 'Gana kozmetika'],
                         ['gloria', 'Gloria'],
                         ['fitaky', 'Fitaky'],
                         ['weleda', 'Weleda'],
                         ['majana', 'Majana'],
                         ['viviscal', 'Viviscal'],
                         ['herbalab', 'Herbalab'],
                         ['medical-plants', 'Medical plants'],
                         ['gamarde', 'Gamarde'],
                         ['aronica', 'Aronica'],
                         ['phyto', 'Phyto'],
                    ].map(([brand, name]) => (
                         <StyledMenuItem key={brand} onClick={() => onLinkClick(`/proizvodi-proizvodjac-kategorija/${brand}/prirodna-kozmetika`)}>
                              <StyledNestedTypography>{name}</StyledNestedTypography>
                         </StyledMenuItem>
                    ))}
               </Popover>

               {/* Submenu 2: Sve za bebe */}
               <Popover
                    open={submenu2Open}
                    anchorEl={submenu2AnchorEl}
                    onClose={() => setSubmenu2AnchorEl(null)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    disableAutoFocus
                    disableEnforceFocus
               >
                    <StyledMenuItem onClick={() => onLinkClick('/proizvodi-proizvodjac-kategorija/fitaky/bebi-prirodna-kozmetika')}>
                         <StyledNestedTypography>Fitaky</StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => onLinkClick('/proizvodi-proizvodjac-kategorija/azeta-bio/bebi-prirodna-kozmetika')}>
                         <StyledNestedTypography>Azeta Bio</StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => onLinkClick('/proizvodi-proizvodjac-kategorija/gamarde/bebi-prirodna-kozmetika')}>
                         <StyledNestedTypography>Gamarde</StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => onLinkClick('/proizvodi-proizvodjac-kategorija/weleda/bebi-prirodna-kozmetika')}>
                         <StyledNestedTypography>Weleda</StyledNestedTypography>
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => onLinkClick('/proizvodi-proizvodjac-kategorija/eco-boom/bebi-pelene')}>
                         <StyledNestedTypography>Eco Boom (pelene)</StyledNestedTypography>
                    </StyledMenuItem>
               </Popover>
          </Box>
     );
};
