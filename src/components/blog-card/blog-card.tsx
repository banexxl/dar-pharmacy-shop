'use client';

import { Box, Typography, Chip, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { BlogPost } from '@/interfaces/blog/blog.interface';
import { Colors } from '@/styles/theme';

interface BlogCardProps {
     post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
     const formattedDate = new Date(post.published_at).toLocaleDateString(
          'sr-Latn-RS',
          { day: 'numeric', month: 'long', year: 'numeric' }
     );

     return (
          <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         borderRadius: '16px',
                         overflow: 'hidden',
                         bgcolor: '#fff',
                         height: '100%',
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         border: `1px solid ${Colors.neutral[200]}`,
                         cursor: 'pointer',
                         '&:hover': {
                              transform: 'translateY(-6px)',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                              borderColor: Colors.primary.light,
                              '& .blog-card-image': {
                                   transform: 'scale(1.08)',
                              },
                              '& .blog-card-arrow': {
                                   transform: 'translateX(4px)',
                                   color: Colors.primary.main,
                              },
                         },
                    }}
               >
                    {/* Image Container */}
                    <Box
                         sx={{
                              position: 'relative',
                              width: '100%',
                              height: { xs: 180, sm: 200, md: 220 },
                              overflow: 'hidden',
                              bgcolor: Colors.neutral[100],
                         }}
                    >
                         <Box
                              className="blog-card-image"
                              sx={{
                                   width: '100%',
                                   height: '100%',
                                   backgroundImage: `url(${post.cover_image})`,
                                   backgroundSize: 'cover',
                                   backgroundPosition: 'center',
                                   transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                   bgcolor: Colors.neutral[200],
                              }}
                         />
                         {/* Category Badge */}
                         <Chip
                              label={post.category}
                              size="small"
                              sx={{
                                   position: 'absolute',
                                   top: 12,
                                   left: 12,
                                   bgcolor: 'rgba(255,255,255,0.95)',
                                   backdropFilter: 'blur(8px)',
                                   color: Colors.primary.main,
                                   fontWeight: 600,
                                   fontSize: '0.75rem',
                                   height: 28,
                                   border: `1px solid ${Colors.primary[200]}`,
                              }}
                         />
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: { xs: 2, sm: 2.5 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                         {/* Meta Info */}
                         <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
                              <Stack direction="row" spacing={0.5} alignItems="center">
                                   <CalendarTodayIcon sx={{ fontSize: 14, color: Colors.neutral[400] }} />
                                   <Typography variant="caption" sx={{ color: Colors.neutral[500], fontSize: '0.75rem' }}>
                                        {formattedDate}
                                   </Typography>
                              </Stack>
                              <Stack direction="row" spacing={0.5} alignItems="center">
                                   <AccessTimeIcon sx={{ fontSize: 14, color: Colors.neutral[400] }} />
                                   <Typography variant="caption" sx={{ color: Colors.neutral[500], fontSize: '0.75rem' }}>
                                        {post.reading_time_minutes} min čitanja
                                   </Typography>
                              </Stack>
                         </Stack>

                         {/* Title */}
                         <Typography
                              variant="h6"
                              sx={{
                                   fontWeight: 700,
                                   fontSize: { xs: '1rem', sm: '1.1rem' },
                                   lineHeight: 1.4,
                                   color: Colors.neutral[800],
                                   mb: 1,
                                   display: '-webkit-box',
                                   WebkitLineClamp: 2,
                                   WebkitBoxOrient: 'vertical',
                                   overflow: 'hidden',
                              }}
                         >
                              {post.title}
                         </Typography>

                         {/* Excerpt */}
                         <Typography
                              variant="body2"
                              sx={{
                                   color: Colors.neutral[600],
                                   lineHeight: 1.6,
                                   fontSize: '0.85rem',
                                   display: '-webkit-box',
                                   WebkitLineClamp: 3,
                                   WebkitBoxOrient: 'vertical',
                                   overflow: 'hidden',
                                   flexGrow: 1,
                              }}
                         >
                              {post.excerpt}
                         </Typography>

                         {/* Footer */}
                         <Stack
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{ mt: 2, pt: 1.5, borderTop: `1px solid ${Colors.neutral[100]}` }}
                         >
                              <Typography
                                   variant="caption"
                                   sx={{ color: Colors.neutral[500], fontWeight: 500 }}
                              >
                                   {post.author}
                              </Typography>
                              <Stack direction="row" alignItems="center" spacing={0.5}>
                                   <Typography
                                        variant="caption"
                                        sx={{ color: Colors.primary.main, fontWeight: 600 }}
                                   >
                                        Pročitaj više
                                   </Typography>
                                   <ArrowForwardIcon
                                        className="blog-card-arrow"
                                        sx={{
                                             fontSize: 16,
                                             color: Colors.primary.main,
                                             transition: 'all 0.3s ease',
                                        }}
                                   />
                              </Stack>
                         </Stack>
                    </Box>
               </Box>
          </Link>
     );
}

export default BlogCard;
