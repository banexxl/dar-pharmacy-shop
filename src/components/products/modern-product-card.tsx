import React, { useState, useRef, useEffect } from 'react';
import {
     Card,
     CardContent,
     CardActions,
     Typography,
     IconButton,
     Button,
     Box,
     Chip,
     Rating,
     Skeleton,
     Tooltip,
     Badge,
     Fade,
     Zoom,
} from '@mui/material';
import {
     Favorite,
     FavoriteBorder,
     AddShoppingCart,
     Visibility,
     Share,
     LocalOffer,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/cart/cart.slice';
import { addToWishList, removeFromWishList } from '@/store/wishlist/wishlist.slice';
import { wishListSelectorState } from '@/store/wishlist/wishlist-selector';
import Link from 'next/link';
import Image from 'mui-image';
import IProduct from '@/interfaces/product/product.interface';
import { formatCurrency } from '@/utils/currency-formatter';
import toast from 'react-hot-toast';

interface ModernProductCardProps {
     product: IProduct;
     loading?: boolean;
     onQuickView?: (product: IProduct) => void;
}

export default function ModernProductCard({
     product,
     loading = false,
     onQuickView
}: ModernProductCardProps) {
     const [isHovered, setIsHovered] = useState(false);
     const [imageLoaded, setImageLoaded] = useState(false);
     const [isVisible, setIsVisible] = useState(false);
     const cardRef = useRef<HTMLDivElement>(null);

     const dispatch = useDispatch();
     const wishListState = useSelector(wishListSelectorState);
     const isInWishlist = wishListState.some((item: IProduct) => item._id === product._id);

     // Intersection Observer for animations
     useEffect(() => {
          const observer = new IntersectionObserver(
               ([entry]) => {
                    if (entry.isIntersecting) {
                         setIsVisible(true);
                    }
               },
               { threshold: 0.1 }
          );

          if (cardRef.current) {
               observer.observe(cardRef.current);
          }

          return () => observer.disconnect();
     }, []);

     const handleAddToCart = () => {
          dispatch(addToCart(product));
          toast.success('Proizvod je dodat u korpu!', {
               position: 'bottom-right',
               duration: 2000,
          });
     };

     const handleWishlistToggle = () => {
          if (isInWishlist) {
               dispatch(removeFromWishList(product._id));
               toast.success('Uklonjen iz liste želja');
          } else {
               dispatch(addToWishList(product));
               toast.success('Dodat u listu želja');
          }
     };

     const handleQuickView = () => {
          if (onQuickView) {
               onQuickView(product);
          }
     };

     const discountPercentage = product.discountAmount
          ? Math.round(((product.price - product.discountAmount) / product.price) * 100)
          : 0;

     if (loading) {
          return (
               <Card sx={{ maxWidth: 340, m: 1, borderRadius: 3 }}>
                    <Skeleton variant="rectangular" height={200} />
                    <CardContent>
                         <Skeleton variant="text" height={30} />
                         <Skeleton variant="text" height={20} width="60%" />
                         <Skeleton variant="text" height={25} width="40%" />
                    </CardContent>
                    <CardActions>
                         <Skeleton variant="rectangular" width={80} height={36} />
                         <Skeleton variant="circular" width={40} height={40} />
                    </CardActions>
               </Card>
          );
     }

     return (
          <Zoom in={isVisible} timeout={500}>
               <Card
                    ref={cardRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                         maxWidth: 340,
                         m: 1,
                         borderRadius: 3,
                         boxShadow: isHovered
                              ? '0 20px 40px rgba(0,0,0,0.1)'
                              : '0 4px 12px rgba(0,0,0,0.05)',
                         transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         position: 'relative',
                         overflow: 'visible',
                         border: '1px solid',
                         borderColor: isHovered ? 'primary.main' : 'grey.200',
                         '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(135deg, rgba(197,48,48,0.05) 0%, rgba(59,130,246,0.05) 100%)',
                              opacity: isHovered ? 1 : 0,
                              transition: 'opacity 0.3s ease',
                              borderRadius: 3,
                              zIndex: -1,
                         }
                    }}
               >
                    {/* Discount Badge */}
                    {discountPercentage > 0 && (
                         <Chip
                              icon={<LocalOffer sx={{ fontSize: 16 }} />}
                              label={`-${discountPercentage}%`}
                              color="error"
                              size="small"
                              sx={{
                                   position: 'absolute',
                                   top: 12,
                                   left: 12,
                                   zIndex: 2,
                                   fontWeight: 600,
                                   boxShadow: '0 2px 8px rgba(239,68,68,0.3)',
                              }}
                         />
                    )}

                    {/* Quick Actions */}
                    <Fade in={isHovered}>
                         <Box
                              sx={{
                                   position: 'absolute',
                                   top: 12,
                                   right: 12,
                                   zIndex: 2,
                                   display: 'flex',
                                   flexDirection: 'column',
                                   gap: 1,
                              }}
                         >
                              <Tooltip title="Dodaj u listu želja" placement="left">
                                   <IconButton
                                        onClick={handleWishlistToggle}
                                        sx={{
                                             bgcolor: 'background.paper',
                                             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                             '&:hover': {
                                                  bgcolor: isInWishlist ? 'error.main' : 'primary.main',
                                                  color: 'white',
                                             },
                                             color: isInWishlist ? 'error.main' : 'text.secondary',
                                        }}
                                   >
                                        {isInWishlist ? <Favorite /> : <FavoriteBorder />}
                                   </IconButton>
                              </Tooltip>

                              <Tooltip title="Brz pregled" placement="left">
                                   <IconButton
                                        onClick={handleQuickView}
                                        sx={{
                                             bgcolor: 'background.paper',
                                             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                             '&:hover': {
                                                  bgcolor: 'secondary.main',
                                                  color: 'white',
                                             },
                                        }}
                                   >
                                        <Visibility />
                                   </IconButton>
                              </Tooltip>
                         </Box>
                    </Fade>

                    {/* Product Image */}
                    <Link href={`/proizvod/${product.slug}`} passHref>
                         <Box
                              sx={{
                                   p: 2,
                                   display: 'flex',
                                   justifyContent: 'center',
                                   alignItems: 'center',
                                   height: 200,
                                   cursor: 'pointer',
                                   position: 'relative',
                                   overflow: 'hidden',
                              }}
                         >
                              <Box
                                   component="img"
                                   src={product.imageURL}
                                   alt={product.name}
                                   loading="lazy"
                                   onLoad={() => setImageLoaded(true)}
                                   sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.3s ease',
                                        filter: imageLoaded ? 'none' : 'blur(5px)',
                                   }}
                              />
                         </Box>
                    </Link>

                    <CardContent sx={{ p: 3 }}>
                         {/* Product Name */}
                         <Link href={`/proizvod/${product.slug}`} passHref>
                              <Typography
                                   variant="h6"
                                   component="h3"
                                   sx={{
                                        fontWeight: 600,
                                        lineHeight: 1.3,
                                        height: '2.6em',
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        cursor: 'pointer',
                                        color: 'text.primary',
                                        '&:hover': {
                                             color: 'primary.main',
                                        },
                                        transition: 'color 0.2s ease',
                                        mb: 1,
                                   }}
                              >
                                   {product.name}
                              </Typography>
                         </Link>

                         {/* Brand */}
                         {product.manufacturer && (
                              <Typography
                                   variant="body2"
                                   color="text.secondary"
                                   sx={{ mb: 1, fontWeight: 500 }}
                              >
                                   {product.manufacturer}
                              </Typography>
                         )}

                         {/* Rating */}
                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <Rating
                                   value={4.5}
                                   precision={0.1}
                                   size="small"
                                   readOnly
                                   sx={{ mr: 1 }}
                              />
                              <Typography variant="body2" color="text.secondary">
                                   (12)
                              </Typography>
                         </Box>

                         {/* Price */}
                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                              {product.discountAmount ? (
                                   <>
                                        <Typography
                                             variant="h6"
                                             component="span"
                                             sx={{
                                                  fontWeight: 700,
                                                  color: 'error.main',
                                             }}
                                        >
                                             {formatCurrency(product.discountAmount)}
                                        </Typography>
                                        <Typography
                                             variant="body2"
                                             component="span"
                                             sx={{
                                                  textDecoration: 'line-through',
                                                  color: 'text.secondary',
                                             }}
                                        >
                                             {formatCurrency(product.price)}
                                        </Typography>
                                   </>
                              ) : (
                                   <Typography
                                        variant="h6"
                                        component="span"
                                        sx={{
                                             fontWeight: 700,
                                             color: 'primary.main',
                                        }}
                                   >
                                        {formatCurrency(product.price)}
                                   </Typography>
                              )}
                         </Box>

                         {/* Stock Status */}
                         <Chip
                              label={product.availableStock > 0 ? 'Na stanju' : 'Nema na stanju'}
                              color={product.availableStock > 0 ? 'success' : 'error'}
                              variant="outlined"
                              size="small"
                              sx={{ mb: 2 }}
                         />
                    </CardContent>

                    <CardActions sx={{ p: 3, pt: 0 }}>
                         <Button
                              variant="contained"
                              onClick={handleAddToCart}
                              disabled={product.availableStock === 0}
                              startIcon={<AddShoppingCart />}
                              sx={{
                                   flex: 1,
                                   borderRadius: 2,
                                   py: 1.5,
                                   fontWeight: 600,
                                   textTransform: 'none',
                                   background: product.availableStock > 0
                                        ? 'linear-gradient(135deg, #C53030 0%, #E53E3E 100%)'
                                        : undefined,
                                   '&:hover': {
                                        background: product.availableStock > 0
                                             ? 'linear-gradient(135deg, #9B2C2C 0%, #C53030 100%)'
                                             : undefined,
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 4px 12px rgba(197,48,48,0.3)',
                                   },
                                   transition: 'all 0.2s ease',
                              }}
                         >
                              {product.availableStock > 0 ? 'Dodaj u korpu' : 'Nema na stanju'}
                         </Button>
                    </CardActions>
               </Card>
          </Zoom>
     );
}