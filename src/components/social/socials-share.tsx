'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

const shareButtonSx: SxProps<Theme> = {
  width: 40,
  minWidth: 40,
  height: 40,
  p: 0,
  color: Colors.primary.main,
  borderColor: Colors.primary.main,
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
        <Button
          aria-label="Podeli na Facebook-u"
          size="small"
          variant="outlined"
          sx={shareButtonSx}
        >
          <Iconify icon="carbon:logo-facebook" />
        </Button>
      </FacebookShareButton>

      <TwitterShareButton
        url={shareURL}
        title="Apoteka DAR"
      >
        <Button
          aria-label="Podeli na Twitter-u"
          size="small"
          variant="outlined"
          sx={shareButtonSx}
        >
          <Iconify icon="carbon:logo-twitter" />
        </Button>
      </TwitterShareButton>

      <ViberShareButton
        url={shareURL}
        title="Apoteka DAR"
      >
        <Button
          aria-label="Podeli putem Vibera"
          size="small"
          variant="outlined"
          sx={shareButtonSx}
        >
          <FaViber />
        </Button>
      </ViberShareButton>

      <EmailShareButton
        url={shareURL}
        subject="Apoteka DAR"
      >
        <Button
          aria-label="Podeli putem email-a"
          size="small"
          variant="outlined"
          sx={shareButtonSx}
        >
          <AlternateEmailIcon fontSize="small" />
        </Button>
      </EmailShareButton>
    </Box>
  );
};