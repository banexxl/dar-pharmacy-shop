import { Card, CardContent, CardActions, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import IProduct from '@/interfaces/product/product.interface';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cart/cart.slice';
import { Colors } from '@/styles/theme';
import Link from 'next/link';
import { useRouter } from 'next/router';

export type ProductCardProps = {
  product: IProduct;
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

  const price = Number(product.price);
  const discountAmount = Number(product.discountAmount);
  const hasDiscount = !!product.discount && !isNaN(discountAmount) && discountAmount > 0;
  const discounted: number = hasDiscount ? Math.max(price - discountAmount, 0) : price;

  return (
    <Card sx={{ width: '100%', maxWidth: compact ? 280 : 340, borderRadius: 2, border: `1px solid ${Colors.neutral[200]}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {showImage && (
        <Link href={`/proizvod/${product.slug}`} passHref>
          <CardMedia
            component="img"
            image={product.imageURL}
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
      <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
        {hasDiscount && (
          <Chip size="small" color="error" label={`-${Math.round(((product.price - discounted) / product.price) * 100)}%`} sx={{ mb: 1 }} />
        )}
        {showTitle && (
          <Link href={`/proizvod/${product.slug}`} passHref>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3, mb: 0.5, color: Colors.neutral[900], textAlign: 'center' }}>
              {product.name}
            </Typography>
          </Link>
        )}
        {showManufacturer && product.manufacturer && (
          <Typography variant="caption" sx={{ color: Colors.neutral[600], textAlign: 'center' }}>{product.manufacturer}</Typography>
        )}
        {showPrice && (
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, width: '100%' }}>
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
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', width: '100%' }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              disabled={product.availableStock <= 0}
              onClick={() => dispatch(addToCart(product))}
              sx={{ minWidth: 0, px: 2 }}
            >
              {product.availableStock > 0 ? 'Dodaj' : 'Nema'}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => router.push(`/proizvod/${product.slug}`)}
              sx={{ minWidth: 0, px: 2 }}
            >
              Detalji
            </Button>
          </Box>
        </CardActions>
      )}
    </Card>
  );
}
