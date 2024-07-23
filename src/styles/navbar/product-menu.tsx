
import { Menu, MenuProps } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const StyledProductMenu = styled((props: MenuProps) => (
     <Menu
          elevation={0}
          anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
          }}
          transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
          }}
          {...props}
     />
))(({ theme }) => ({
     '& .MuiPaper-root': {
          // borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          '& .MuiMenu-list': {
               padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
               '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    marginRight: theme.spacing(1.5),
               },
          },
     },
}));