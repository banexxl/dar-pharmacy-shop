'use client';

import { useState } from 'react';
import { Box, Container, Typography, Chip, Grid, Stack, Button } from '@mui/material';
import { BlogPost, BlogCategory, BLOG_CATEGORIES, BLOG_CATEGORY_LABELS } from '@/interfaces/blog/blog.interface';
import BlogCard from '@/components/blog-card/blog-card';
import { Colors } from '@/styles/theme';

interface BlogPageClientProps {
  blogs: BlogPost[];
}

export function BlogPageClient({ blogs }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'Sve'>('Sve');
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredBlogs =
    activeCategory === 'Sve'
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = filteredBlogs.length > visibleCount;

  const handleCategoryChange = (category: BlogCategory | 'Sve') => {
    setActiveCategory(category);
    setVisibleCount(10);
  };

  return (
    <Box component="main" sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${Colors.primary[50]} 0%, ${Colors.neutral[50]} 50%, ${Colors.secondary[50]} 100%)`,
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            bgcolor: Colors.primary[100],
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -40,
            left: -40,
            width: 150,
            height: 150,
            borderRadius: '50%',
            bgcolor: Colors.secondary[100],
            opacity: 0.4,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.2rem', md: '3rem' },
                fontWeight: 800,
                mb: 2,
                letterSpacing: '-0.02em',
                color: Colors.primary.main
              }}
            >
              Blog - Naš mali kutak
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: Colors.neutral[600],
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.7,
              }}
            >
              Saveti, vodiči i najnovije informacije iz sveta prirodne farmacije,
              zdravlja i lepote
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Category Filters */}
      {blogs.length > 0 && (
        <Container maxWidth="xl" sx={{ mt: { xs: 3, md: 5 } }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Chip
              label="Sve"
              onClick={() => handleCategoryChange('Sve')}
              sx={{
                fontWeight: 600,
                fontSize: '0.85rem',
                px: 1,
                height: 36,
                bgcolor: activeCategory === 'Sve' ? Colors.primary.main : Colors.neutral[100],
                color: activeCategory === 'Sve' ? '#fff' : Colors.neutral[700],
                border: `1px solid ${activeCategory === 'Sve' ? Colors.primary.main : Colors.neutral[200]}`,
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: activeCategory === 'Sve' ? Colors.primary.dark : Colors.neutral[200],
                },
              }}
            />
            {BLOG_CATEGORIES.map((category) => (
              <Chip
                key={category}
                label={BLOG_CATEGORY_LABELS[category]}
                onClick={() => handleCategoryChange(category)}
                sx={{
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  px: 1,
                  height: 36,
                  bgcolor:
                    activeCategory === category ? Colors.primary.main : Colors.neutral[100],
                  color: activeCategory === category ? '#fff' : Colors.neutral[700],
                  border: `1px solid ${activeCategory === category ? Colors.primary.main : Colors.neutral[200]}`,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor:
                      activeCategory === category ? Colors.primary.dark : Colors.neutral[200],
                  },
                }}
              />
            ))}
          </Stack>
        </Container>
      )}

      {/* Blog Grid */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {blogs.length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 10,
              px: 3,
              bgcolor: '#fff',
              borderRadius: '16px',
              border: `1px solid ${Colors.neutral[200]}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: Colors.neutral[700], fontWeight: 600, mb: 1.5 }}
            >
              Blog je u pripremi
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: Colors.neutral[500], maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}
            >
              Trenutno nema objavljenih članaka. Uskoro ćemo objaviti korisne savete
              o zdravlju, prirodnim preparatima i lepoti. Vratite se ponovo!
            </Typography>
          </Box>
        ) : filteredBlogs.length > 0 ? (
          <>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {visibleBlogs.map((blog) => (
                <Grid key={blog.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <BlogCard post={blog} />
                </Grid>
              ))}
            </Grid>
            {hasMore && (
              <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                  sx={{
                    borderColor: Colors.primary.main,
                    color: Colors.primary.main,
                    px: 4,
                    py: 1.2,
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: Colors.primary[50],
                      borderColor: Colors.primary.dark,
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  Učitaj još
                </Button>
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography
              variant="h6"
              sx={{ color: Colors.neutral[500], fontWeight: 500 }}
            >
              Nema objava u ovoj kategoriji.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
