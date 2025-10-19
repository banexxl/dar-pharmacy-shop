import React, { useEffect, useState } from 'react';
import { Dialog, IconButton, Backdrop, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { Colors } from '@/styles/theme';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

interface MediaItem {
     type: 'image' | 'video';
     src: string;
     alt?: string;
}

interface MediaCarouselProps {
     media: MediaItem[];
     open: boolean;
     initialIndex?: number;
     onClose: () => void;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ media, open, initialIndex = 0, onClose }) => {

     const [activeIndex, setActiveIndex] = useState(initialIndex);

     useEffect(() => {
          if (open) {
               setActiveIndex(initialIndex);
          }
     }, [open, initialIndex]);

     const handlePrev = () => {
          setActiveIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
     };

     const handleNext = () => {
          setActiveIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
     };

     return (
          <Dialog
               fullScreen
               open={open}
               onClose={onClose}
               PaperProps={{ sx: { backgroundColor: 'transparent', boxShadow: 'none' } }}
          >
               <Backdrop
                    className="BackdropStyled"
                    open={open}
               >
                    <Box className="CarouselBox">
                         <IconButton
                              className="LeftArrowButton"
                              onClick={handlePrev}
                         >
                              <ArrowBackIosNewIcon />
                         </IconButton>

                         {media[activeIndex].type === 'image' ? (
                              <Box
                                   sx={{
                                        maxWidth: '80%',
                                        maxHeight: '80%',
                                        position: 'relative',
                                   }}
                              >
                                   <Image
                                        src={media[activeIndex].src}
                                        alt={media[activeIndex].alt || ''}
                                        height={400}
                                        width={300}
                                        style={{ borderRadius: '10px', boxShadow: `10 10 10px ${Colors.primary}` }}
                                   />
                              </Box>
                         )
                              :
                              media[activeIndex].type === 'video' ?
                                   (
                                        <Box
                                             component="video"
                                             src={media[activeIndex].src}
                                             autoPlay
                                             controls
                                             sx={{
                                                  maxWidth: '80%',
                                                  maxHeight: '80%',
                                                  objectFit: 'contain',
                                             }}
                                        />
                                   )
                                   :
                                   (
                                        <ImageNotSupportedIcon
                                             sx={{
                                                  fontSize: '100px',
                                                  color: Colors.primary.main,
                                             }}
                                        />
                                   )
                         }

                         <IconButton
                              className="RightArrowButton"
                              onClick={handleNext}
                         >
                              <ArrowForwardIosIcon />
                         </IconButton>
                    </Box>

                    <IconButton
                         className="CloseButton"
                         onClick={onClose}
                    >
                         <CloseIcon />
                    </IconButton>
               </Backdrop>
          </Dialog>
     );
};

export default MediaCarousel;
