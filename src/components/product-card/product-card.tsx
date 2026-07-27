import { Card, CardContent, CardActions, CardMedia, Typography, Box, Chip, IconButton, useMediaQuery, useTheme, Tooltip } from '@mui/material';
import Button from '@/components/button';
import Product from '@/interfaces/product/product.interface';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/cart/cart.slice';
import { addToWishList, removeFromWishList } from '@/store/wishlist/wishlist.slice';
import { Colors } from '@/styles/theme';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { wishListSelectorState } from '@/store/wishlist/wishlist-selector';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export type ProductCardProps = {
  product: Product;
  showImage?: boolean;
  showTitle?: boolean;
  showManufacturer?: boolean;
  showPrice?: boolean;
  showDescription?: boolean;
  showActions?: boolean;
  compact?: boolean;
};

export default function ProductCard({
  product,
  showImage = true,
  showTitle = true,
  showManufacturer = false,
  showPrice = true,
  showDescription = false,
  showActions = true,
  compact = false,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const wishListState = useSelector(wishListSelectorState);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const price = Number(product.price);
  const discount_amount = Number(product.discount_amount);
  const hasDiscount = !!product.discount && !isNaN(discount_amount) && discount_amount > 0;
  const discounted: number = hasDiscount ? Math.max(price - discount_amount, 0) : price;

  const handleDetails = async () => {
    await router.push(`/proizvod/${product.slug}`);
  };

  const isInWishlist = !!wishListState?.some((item: Product) => item.id === product.id);

  const handleAddToWishList = async () => {
    if (isInWishlist) {
      toast.error('Proizvod je već u listi želja', { position: 'top-center', duration: 1500 });
      return;
    }
    dispatch(addToWishList(product));
    toast.success('Proizvod je dodat u listu želja', { position: 'top-center', duration: 1500 });
  };

  // Remove from wishlist handler added to support toggle
  const handleRemoveFromWishList = async () => {
    if (!isInWishlist) return;
    dispatch(removeFromWishList(product));
    toast.success('Proizvod je uklonjen iz liste zelja', { position: 'top-center', duration: 1500 });
  };

  const handleAddToCart = async () => {
    dispatch(addToCart(product));
    toast.success('Proizvod je dodat u korpu', { position: 'top-center', duration: 1500 });
  };

  return (
    <Card sx={{
      width: '100%',
      maxWidth: compact ? 280 : 340,
      height: compact ? 360 : 440,
      borderRadius: 2,
      border: `1px solid ${Colors.neutral[200]}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch'
    }}>
      {showImage && (
        <Link href={`/proizvod/${product.slug}`} passHref>
          <CardMedia
            component="img"
            image={product.image_url}
            alt={product.name}
            sx={{
              height: compact ? 160 : 200,
              objectFit: 'contain',
              p: 1,
              backgroundColor: Colors.neutral[50],
              mx: 'auto',
              display: 'block',
              borderRadius: '28px',
            }}
          />
        </Link>
      )}
      <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', flexGrow: 1 }}>
        {hasDiscount && (
          <Chip size="small" color="error" label={`-${Math.round(((product.price - discounted) / product.price) * 100)}%`} sx={{ mb: 1 }} />
        )}
        {showTitle && (
          <Link href={`/proizvod/${product.slug}`} passHref>
            <Typography variant="subtitle1" sx={{
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 0.5,
              color: Colors.neutral[900],
              textAlign: 'center',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: 44
            }}>
              {product.name}
            </Typography>
          </Link>
        )}
        {showManufacturer && product.manufacturer && (
          <Typography variant="caption" sx={{ color: Colors.neutral[600], textAlign: 'center' }}>{product.manufacturer}</Typography>
        )}
        {showPrice && (
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, width: '100%', minHeight: 32 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: Colors.primary.dark }}>
              {discounted.toFixed(2)} RSD
            </Typography>
            {hasDiscount && (
              <Typography variant="body2" sx={{ color: Colors.neutral[500], textDecoration: 'line-through' }}>
                {product.price.toFixed(2)} RSD
              </Typography>
            )}
          </Box>
        )}
        {showDescription && (
          <Typography variant="body2" sx={{ mt: 1, color: Colors.neutral[700], textAlign: 'center' }}>
            {product.description?.slice(0, 120)}{product.description && product.description.length > 120 ? '…' : ''}
          </Typography>
        )}
      </CardContent>
      {showActions && (
        <CardActions
          sx={{ p: 2, pt: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: '100%' }}
        >
          {isMobile ? (
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', width: '100%' }}>
              <Tooltip title="Detalji">
                <span>
                  <IconButton color="primary" onClick={handleDetails} size="small">
                    <VisibilityIcon />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title={isInWishlist ? 'Ukloni iz liste zelja' : 'Dodaj u listu zelja'}>
                <span>
                  <IconButton color={isInWishlist ? 'error' : 'primary'} onClick={isInWishlist ? handleRemoveFromWishList : handleAddToWishList} size="small">
                    {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title={product.available_stock > 0 ? 'Dodaj u korpu' : 'Nema na stanju'}>
                <span>
                  <IconButton color="primary" onClick={handleAddToCart} disabled={product.available_stock <= 0} size="small">
                    <AddShoppingCartIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
          ) : (
            <>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', width: '100%' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={handleDetails}
                  sx={{ minWidth: 0, px: 2 }}
                >
                  Detalji
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={isInWishlist ? handleRemoveFromWishList : handleAddToWishList}
                  sx={{ minWidth: 0, px: 2 }}
                >
                  {isInWishlist ? 'Ukloni iz liste zelja' : 'Omiljeni'}
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', width: '100%' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={product.available_stock <= 0}
                  onClick={handleAddToCart}
                  sx={{ minWidth: 0, px: 2, width: '100%' }}
                >
                  {product.available_stock > 0 ? 'Dodaj u korpu' : 'Nema na stanju'}
                </Button>
              </Box>
            </>
          )}
        </CardActions>
      )}
    </Card>
  );
}
