'use client';

import ProductDetails from '@/components/product-details/product-details';
import SearchBox from '@/components/search/search';
import RelatedProductsCarousel from '@/components/carousel/carousel-related-products';
import { Container, Stack, Box, Typography } from '@mui/material';
import NextLink from 'next/link';

interface CategoryLabels {
  mainLabel: string | null;
  midLabel: string | null;
  subLabel: string | null;
}

interface Props {
  product: any;
  relatedProducts?: any[];
  categoryLabels?: CategoryLabels;
  manufacturerName?: string | null;
}

export function ProductDetailClient({
  product,
  relatedProducts = [],
  categoryLabels,
}: Props) {
  // Build breadcrumbs
  const breadcrumbItems: { label: string; href?: string }[] = [
    { label: 'Početna', href: '/' },
  ];

  if (categoryLabels?.mainLabel && product.main_category) {
    breadcrumbItems.push({
      label: categoryLabels.mainLabel,
      href: `/proizvodi/${product.main_category}`,
    });
  }

  if (categoryLabels?.midLabel && product.mid_category) {
    breadcrumbItems.push({
      label: categoryLabels.midLabel,
      href: `/proizvodi/${product.main_category}/${product.mid_category}`,
    });
  }

  if (categoryLabels?.subLabel && product.sub_category) {
    breadcrumbItems.push({
      label: categoryLabels.subLabel,
      href: `/proizvodi/${product.main_category}/${product.mid_category}/${product.sub_category}`,
    });
  }

  breadcrumbItems.push({ label: product.name });

  return (
    <Container maxWidth="xl" sx={{ background: '#fff', pt: { xs: 10, md: 14 } }}>
      <Stack component="main">
        {/* Breadcrumbs */}
        <Box component="nav" aria-label="Breadcrumb" sx={{ mb: 2 }}>
          <Box
            component="ol"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            sx={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', p: 0, m: 0, gap: 0.5, fontSize: '0.875rem' }}
          >
            {breadcrumbItems.map((item, index) => (
              <Box
                component="li"
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              >
                {item.href ? (
                  <NextLink href={item.href} itemProp="item" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Typography component="span" itemProp="name" sx={{ fontSize: '0.875rem', '&:hover': { textDecoration: 'underline' } }}>
                      {item.label}
                    </Typography>
                  </NextLink>
                ) : (
                  <Typography component="span" itemProp="name" sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'text.primary' }}>
                    {item.label}
                  </Typography>
                )}
                <meta itemProp="position" content={String(index + 1)} />
                {index < breadcrumbItems.length - 1 && (
                  <Typography component="span" aria-hidden="true" sx={{ mx: 0.5, color: 'text.secondary', fontSize: '0.875rem' }}>
                    ›
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <ProductDetails {...product} />
        <RelatedProductsCarousel products={relatedProducts} />
        <SearchBox />
      </Stack>
    </Container>
  );
}
