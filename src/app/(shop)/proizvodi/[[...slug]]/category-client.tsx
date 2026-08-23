'use client';

import { Container, Box, Typography } from '@mui/material';
import NextLink from 'next/link';
import ProductsFilter from '@/components/products-filter/products-filter';
import SearchBox from '@/components/search/search';

interface ResolvedCategory {
  id: string;
  label: string;
  value: string;
}

interface CategoryClientProps {
  products: any[];
  mainCategory: ResolvedCategory | null;
  midCategory: ResolvedCategory | null;
  subCategory: ResolvedCategory | null;
  siblingCategories: ResolvedCategory[];
  level: 'all' | 'main' | 'mid' | 'sub';
}

export function CategoryClient({
  products,
  mainCategory,
  midCategory,
  subCategory,
  siblingCategories,
  level,
}: CategoryClientProps) {
  // ─── Breadcrumbs ─────────────────────────────────────────────────────────────
  const breadcrumbItems: { label: string; href?: string }[] = [
    { label: 'Početna', href: '/' },
    { label: 'Proizvodi', href: level === 'all' ? undefined : '/proizvodi' },
  ];

  if (mainCategory) {
    breadcrumbItems.push({
      label: mainCategory.label,
      href: midCategory || subCategory ? `/proizvodi/${mainCategory.value}` : undefined,
    });
  }

  if (midCategory) {
    breadcrumbItems.push({
      label: midCategory.label,
      href: subCategory ? `/proizvodi/${mainCategory!.value}/${midCategory.value}` : undefined,
    });
  }

  if (subCategory) {
    breadcrumbItems.push({ label: subCategory.label });
  }

  // ─── Page heading (H1) ──────────────────────────────────────────────────────
  const pageTitle = subCategory?.label ?? midCategory?.label ?? mainCategory?.label ?? 'Svi proizvodi';

  return (
    <Container disableGutters maxWidth="lg" sx={{ background: '#fff' }}>
      <Box component="main" sx={{ px: { xs: 2, md: 3 }, py: 2 }}>
        {/* Breadcrumbs */}
        <Box component="nav" aria-label="Breadcrumb" sx={{ mb: 2, mt: 1 }}>
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

        {/* H1 — one per page */}
        <Typography component="h1" variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
          {pageTitle}
        </Typography>

        {/* Category description */}
        <Typography component="p" variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          Prirodni preparati iz kategorije <Typography component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>({pageTitle})</Typography>. Izaberite proizvode renomiranih proizvođača uz stručni savet farmaceuta.
        </Typography>

        {/* Products section — ProductsFilter includes its own accordion sidebar */}
        <Box component="section" aria-label="Proizvodi">
          <SearchBox />
          <ProductsFilter
            filterObject={products}
            routerQuery={{ mainCategory: mainCategory?.value || '' }}
          />
        </Box>
      </Box>
    </Container>
  );
}
