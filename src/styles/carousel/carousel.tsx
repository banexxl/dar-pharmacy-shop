import styled from '@mui/system/styled';
import { Box, Button, Typography } from '@mui/material';
import { Colors } from '../theme';

export const StyledCarouselBox = styled(Box)({
          height: '400px',
          marginTop: '100px',
          justifyContent: 'center'
});

export const StyledCarouselCard = styled(Box)({
          display: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'space-between',
          border: '1px solid',
          borderRadius: '20px',
          borderColor: Colors.secondary,
          height: '100%',
          maxWidth: '100%',
          color: 'black',
          cursor: 'pointer',
          margin: '0px 25px'
})

export const CarouselTitle = styled(Typography)({
          color: 'black',
          textAlign: 'center'
});

export const CarouselImg = styled(Box)({
          alignItem: 'center',
          cursor: 'pointer',
          '-webkit-transition': '-webkit-transform 0.4s',
          transition: 'transform 0.4s',
          ':hover': {
                    webkitTransform: 'scale(1.2) rotate(0.01deg)',
                    transform: 'scale(1.1) rotate(0.01deg)'
          },
          maxWidth: '100%',
          height: 'auto',
          margin: '0px auto 0px auto',
})

export const CarouselButton = styled(Button)({
          background: `linear-gradient(to right bottom,${Colors.primary}, ${Colors.secondary})`,
          border: `1px solid ${Colors.dim_grey}`,
          transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          width: '50%',
          transform: 'translateX(50%)',
          ':hover': {
                    webkitTransform: 'scale(1.2) rotate(0.01deg)',
                    transform: 'scale(1.1) rotate(0.01deg) translateX(50%)',
          },
});
