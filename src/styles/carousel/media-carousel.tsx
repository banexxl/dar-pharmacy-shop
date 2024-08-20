import { Backdrop, Box, IconButton, styled } from "@mui/material";

export const BackdropStyled = styled(Backdrop)(({ theme }) => ({
     zIndex: theme.zIndex.drawer + 1,
     color: '#fff',
     backdropFilter: 'blur(5px)', // Blurs the background
}));

export const CarouselBox = styled(Box)({
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     width: '100%',
     height: '100%',
});

export const MediaStyled = styled('img')({
     maxWidth: '80%',
     maxHeight: '80%',
     objectFit: 'contain',
});

export const VideoStyled = styled('video')({
     maxWidth: '80%',
     maxHeight: '80%',
     objectFit: 'contain',
});

export const ArrowButton = styled(IconButton)(({ theme }) => ({
     position: 'absolute',
     top: '50%',
     transform: 'translateY(-50%)',
     color: '#fff',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
     },
}));

export const LeftArrowButton = styled(ArrowButton)({
     left: 16,
});

export const RightArrowButton = styled(ArrowButton)({
     right: 16,
});

export const CloseButton = styled(IconButton)(({ theme }) => ({
     position: 'absolute',
     top: theme.spacing(2),
     right: theme.spacing(2),
     color: theme.palette.grey[500],
}));