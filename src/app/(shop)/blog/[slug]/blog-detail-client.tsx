'use client';

import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  IconButton,
  Tooltip,
  Grid,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';
import { BlogPost, BLOG_CATEGORY_LABELS } from '@/interfaces/blog/blog.interface';
import BlogCard from '@/components/blog-card/blog-card';
import Iconify from '@/components/iconify/iconify';
import { Colors } from '@/styles/theme';

interface BlogDetailClientProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
  const formattedDate = new Date(blog.published_at).toLocaleDateString(
    'sr-Latn-RS',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  const handleShareX = () => {
    window.open(
      `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`,
      '_blank'
    );
  };

  const handleShareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${blog.title} ${shareUrl}`)}`,
      '_blank'
    );
  };

  const handleShareViber = () => {
    window.open(
      `viber://forward?text=${encodeURIComponent(`${blog.title} ${shareUrl}`)}`,
      '_blank'
    );
  };

  const handleShareTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`,
      '_blank'
    );
  };

  const handleShareNative = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: blog.title, text: blog.excerpt, url: shareUrl });
    }
  };

  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: Colors.neutral[50] }}>
      {/* Hero Cover Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 250, sm: 350, md: 450 },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${blog.cover_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            bgcolor: Colors.neutral[200],
          }}
        />
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)',
          }}
        />
        {/* Back Button */}
        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 16, md: 24 },
              left: { xs: 16, md: 32 },
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              px: 2,
              py: 1,
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: '#fff',
                transform: 'translateX(-2px)',
              },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 20, color: Colors.neutral[700] }} />
            <Typography variant="body2" sx={{ fontWeight: 600, color: Colors.neutral[700] }}>
              Nazad na blog
            </Typography>
          </Box>
        </Link>
      </Box>

      {/* Article Content */}
      <Container maxWidth="md" sx={{ mt: { xs: -4, md: -6 }, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: '20px',
            p: { xs: 3, sm: 4, md: 5 },
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            border: `1px solid ${Colors.neutral[100]}`,
          }}
        >
          {/* Category & Meta */}
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
            <Chip
              label={BLOG_CATEGORY_LABELS[blog.category]}
              sx={{
                bgcolor: Colors.primary[50],
                color: Colors.primary.main,
                fontWeight: 600,
                fontSize: '0.8rem',
                border: `1px solid ${Colors.primary[200]}`,
              }}
            />
            {/* Share Buttons */}
            <Stack direction="row" spacing={0.5}>
              <Tooltip title="Podeli na Facebook">
                <IconButton size="small" onClick={handleShareFacebook} sx={{ color: '#1877F2' }}>
                  <Iconify icon="mdi:facebook" width={20} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Podeli na X">
                <IconButton size="small" onClick={handleShareX} sx={{ color: '#000' }}>
                  <Iconify icon="ri:twitter-x-fill" width={18} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Podeli na WhatsApp">
                <IconButton size="small" onClick={handleShareWhatsApp} sx={{ color: '#25D366' }}>
                  <Iconify icon="mdi:whatsapp" width={20} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Podeli na Viber">
                <IconButton size="small" onClick={handleShareViber} sx={{ color: '#7360F2' }}>
                  <Iconify icon="simple-icons:viber" width={18} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Podeli na Telegram">
                <IconButton size="small" onClick={handleShareTelegram} sx={{ color: '#26A5E4' }}>
                  <Iconify icon="mdi:telegram" width={20} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Kopiraj link">
                <IconButton size="small" onClick={handleCopyLink} sx={{ color: Colors.neutral[600] }}>
                  <LinkIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Podeli">
                <IconButton size="small" onClick={handleShareNative} sx={{ color: Colors.neutral[600] }}>
                  <ShareIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          {/* Title */}
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
              lineHeight: 1.3,
              color: Colors.primary.main,
              mb: 2.5,
              letterSpacing: '-0.02em',
            }}
          >
            {blog.title}
          </Typography>

          {/* Author & Date Row */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{
              mb: 4,
              pb: 3,
              borderBottom: `1px solid ${Colors.neutral[200]}`,
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <PersonIcon sx={{ fontSize: 18, color: Colors.neutral[400] }} />
              <Typography variant="body2" sx={{ color: Colors.neutral[600], fontWeight: 500 }}>
                {blog.author}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarTodayIcon sx={{ fontSize: 16, color: Colors.neutral[400] }} />
              <Typography variant="body2" sx={{ color: Colors.neutral[500] }}>
                {formattedDate}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeIcon sx={{ fontSize: 16, color: Colors.neutral[400] }} />
              <Typography variant="body2" sx={{ color: Colors.neutral[500] }}>
                {blog.reading_time_minutes} min čitanja
              </Typography>
            </Stack>
          </Stack>

          {/* Article Body */}
          <Box
            dangerouslySetInnerHTML={{ __html: blog.content }}
            sx={{
              '& article': { lineHeight: 1.8 },
              '& h2': {
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                fontWeight: 700,
                color: Colors.neutral[800],
                mt: 4,
                mb: 2,
              },
              '& p': {
                fontSize: '1rem',
                color: Colors.neutral[700],
                mb: 2,
                lineHeight: 1.8,
              },
              '& ul': {
                pl: 3,
                mb: 3,
              },
              '& li': {
                fontSize: '1rem',
                color: Colors.neutral[700],
                mb: 1,
                lineHeight: 1.7,
              },
              '& blockquote': {
                borderLeft: `4px solid ${Colors.primary.main}`,
                pl: 3,
                py: 1,
                my: 3,
                bgcolor: Colors.primary[50],
                borderRadius: '0 12px 12px 0',
              },
              '& blockquote p': {
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: Colors.neutral[800],
                mb: 0.5,
              },
              '& blockquote cite': {
                fontSize: '0.85rem',
                color: Colors.neutral[500],
                fontWeight: 500,
              },
              '& strong': {
                color: Colors.neutral[900],
                fontWeight: 600,
              },
            }}
          />
        </Box>
      </Container>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
          <Divider sx={{ mb: { xs: 4, md: 6 } }} />
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: Colors.neutral[800],
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                mb: 1,
              }}
            >
              Slični članci
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: Colors.neutral[500], fontSize: '1rem' }}
            >
              Pročitajte još iz kategorije {BLOG_CATEGORY_LABELS[blog.category]}
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {relatedBlogs.map((relatedBlog) => (
              <Grid key={relatedBlog.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <BlogCard post={relatedBlog} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
}
