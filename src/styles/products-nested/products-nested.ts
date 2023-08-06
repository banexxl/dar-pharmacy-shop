import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Colors } from '../theme';

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
          fontSize: '1rem',
}));

export const StyledNestedTypography = styled(Typography)(({ theme }) => ({
          fontSize: '1rem',
          ':hover': {
                    backgroundColor: Colors.primary,
                    textEmphasisColor: Colors.dim_grey
          }
}));