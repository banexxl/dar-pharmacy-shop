'use client';

import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NextLink from 'next/link';
import { JsonLd } from './json-ld';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BASE_URL = 'https://apoteka-dar.rs';

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Build JSON-LD BreadcrumbList
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <Box component="nav" aria-label="breadcrumb" sx={{ mb: 2, mt: 1 }}>
      <JsonLd data={jsonLdData} />
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ fontSize: '0.875rem' }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast || !item.href) {
            return (
              <Typography
                key={index}
                color="text.primary"
                sx={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                {item.label}
              </Typography>
            );
          }

          return (
            <Link
              key={index}
              component={NextLink}
              href={item.href}
              underline="hover"
              color="inherit"
              sx={{ fontSize: '0.875rem' }}
            >
              {item.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}
