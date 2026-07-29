'use client';

import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { alpha, type SxProps, type Theme } from '@mui/material/styles';

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  ViberShareButton,
} from 'next-share';
import { FaViber } from 'react-icons/fa';

import Iconify from 'src/components/iconify';
import { Colors } from '@/styles/theme';

type SocialShareProps = {
  shareURL: string;
  sx?: SxProps<Theme>;
};

const shareIconSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  minWidth: 40,
  height: 40,
  p: 0,
  color: Colors.primary.main,
  border: '1px solid',
  borderColor: Colors.primary.main,
  borderRadius: 1,
  bgcolor: 'background.paper',
  '&:hover': {
    borderColor: Colors.primary.main,
    bgcolor: alpha(Colors.primary.main, 0.08),
  },
};

export const SocialShare = ({
  shareURL,
  sx,
}: SocialShareProps) => {
  return (
    <Box
      sx={[
        {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 40px)',
          gridTemplateRows: 'repeat(2, 40px)',
          gap: 1,
          p: 1,
          borderRadius: 1.5,
          bgcolor: 'background.paper',
          boxShadow: 3,
          boxSizing: 'border-box',
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <FacebookShareButton
        url={shareURL}
        quote="Apoteka DAR"
        hashtag="#apotekadar"
      >
        <Box aria-label="Podeli na Facebook-u" sx={shareIconSx}>
          <Iconify icon="carbon:logo-facebook" />
        </Box>
      </FacebookShareButton>

      <TwitterShareButton
        url={shareURL}
        title="Apoteka DAR"
      >
        <Box aria-label="Podeli na Twitter-u" sx={shareIconSx}>
          <Iconify icon="carbon:logo-twitter" />
        </Box>
      </TwitterShareButton>

      <ViberShareButton
        url={shareURL}
        title="Apoteka DAR"
      >
        <Box aria-label="Podeli putem Vibera" sx={shareIconSx}>
          <FaViber />
        </Box>
      </ViberShareButton>

      <EmailShareButton
        url={shareURL}
        subject="Apoteka DAR"
      >
        <Box aria-label="Podeli putem email-a" sx={shareIconSx}>
          <AlternateEmailIcon fontSize="small" />
        </Box>
      </EmailShareButton>
    </Box>
  );
};