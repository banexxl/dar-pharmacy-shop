import styled from '@mui/system/styled';
import { Box, Typography } from '@mui/material';

export const StyledCarouselBox = styled(Box)({
          display: 'block',
          maxWidth: '100vw',
          overflow: 'hidden',
          width: '100%',
          maxHeight: '200px',
          marginTop: '100px',
});

export const StyledCarouselCard = styled(Box)({
          display: 'flex',
          border: '1px solid #fff',
          borderRadius: '8px',
          height: '200px',
          width: '200px',
          color: '#fff',
          cursor: 'pointer'
})

export const StyledCarouselImageBox = styled(Box)({
          maxWidth: '100px',
          maxHeight: '100px',
})

export const StyledTypography = styled(Typography)({
          color: 'white',
          position: 'relative',
          bottom: 20,
          left: 20,
});