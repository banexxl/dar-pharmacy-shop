import styled from '@mui/system/styled';
import { Box, Button, Typography } from '@mui/material';
import { Colors } from '../theme';

export const StyledCarouselBox = styled(Box)({
          display: 'block',
          marginTop: '50px',
          height: '400px',
          justifyContent: 'center',
});

export const StyledCarouselLogoBox = styled(Box)({
          display: 'block',
          marginTop: '50px',
          height: '200px',
          justifyContent: 'center',
});

export const StyledCarouselCard = styled(Box)({
          background: Colors.dove_gray,
          display: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'space-around',
          border: '1px solid',
          borderRadius: '20px',
          borderColor: Colors.secondary,
          height: '350px',
          maxWidth: '100%',
          color: 'black',
          cursor: 'pointer',
          margin: '0px 25px',
          ':hover': {
                    boxShadow: `0 0 11px ${Colors.secondary}`
          },
})

export const CarouselTitleBox = styled(Box)({
          height: '100px',
          width: '90%',
          paddingBottom: '30px',
          justifyContent: 'center',
          alignItems: 'center'
});

export const CarouselTitle = styled(Typography)({
          color: Colors.light,
          textAlign: 'center',
          fontWeight: 'bold'
});

export const CarouselManufacturerBox = styled(Box)({
          marginTop: '70px',
          height: '200px',
          width: '100%'
});

export const CarouselManufacturer = styled(Typography)({
          color: Colors.primary,
          textAlign: 'center',
          fontWeight: 'bold'
});

export const CarouselImgBox = styled(Box)({
          alignItem: 'center',
          cursor: 'pointer',
          webkitTransition: '-webkit-transform 0.4s',
          transition: 'transform 0.4s',
          ':hover': {
                    webkitTransform: 'scale(1.2) rotate(0.01deg)',
                    transform: 'scale(1.1) rotate(0.01deg)'
          },
          maxWidth: '100%',
          height: '100px',
          margin: '0px auto 0px auto',
})

export const CarouselLogoImgBox = styled(Box)({
          alignItem: 'center',
          cursor: 'pointer',
          webkitTransition: '-webkit-transform 0.4s',
          transition: 'transform 0.4s',
          ':hover': {
                    webkitTransform: 'scale(1.2) rotate(0.01deg)',
                    transform: 'scale(1.1) rotate(0.01deg)'
          },
          maxWidth: '100%',
          height: '150px',
          margin: '0px 50px',
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
          height: '30px'
});

export const DiscountSticker = styled(Box)({
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translate(50%, -50%)',
          backgroundColor: 'red',
          color: 'white',
          padding: '5px 10px',
          fontWeight: 'bold',
          fontSize: '14px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          ":before": {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    width: '1px',
                    backgroundColor: 'white',
                    transformOrigin: 'left top',
                    transform: 'scaleY(0.5)'
          }

})