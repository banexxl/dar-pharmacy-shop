import styled from '@mui/system/styled';
import { Box, Typography } from '@mui/material';
import { Colors } from '../theme';

export const StyledCarouselBox = styled(Box)({
          height: '400px',
          marginTop: '100px',
          padding: '0px 10px'
});

export const StyledCarouselCard = styled(Box)({
          display: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'space-between',
          border: '1px solid',
          borderRadius: '20px',
          borderColor: Colors.secondary,
          maxHeight: '100%',
          maxWidth: '100%',
          color: 'black',
          cursor: 'pointer',
          margin: '0px 5px'
})

export const CarouselTitle = styled(Typography)({
          color: 'black',
          textAlign: 'center'
});