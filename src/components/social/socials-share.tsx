import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import Iconify from 'src/components/iconify';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, ViberShareButton } from 'next-share';
import { FaViber } from 'react-icons/fa';
import { Colors } from '@/styles/theme';

// ----------------------------------------------------------------------

type ShareProps = {
  shareURL: string;
  flexDirection: 'row' | 'column';
};

export const SocialShare = ({ shareURL, flexDirection }: ShareProps) => {

  return (
    <Stack sx={{ display: 'flex', width: '300px', position: 'absolute', }}>
      {/* <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5, color: theme.palette.text.primary }}>
        Share:
      </Typography> */}

      <Stack direction={flexDirection} alignItems="center" flexWrap="wrap">
        <FacebookShareButton
          url={shareURL}
          quote={'Apoteka DAR'}
          hashtag={'#apotekadar'}
        >
          <Button
            key={'fb'}
            variant="outlined"
            startIcon={<Iconify icon={'carbon:logo-facebook'} />}
            sx={{
              color: Colors.primary.main,
              borderColor: Colors.primary.main,
              '&:hover': {
                borderColor: Colors.primary.main,
                bgcolor: alpha(Colors.primary.main, 0.08),
              },
            }}
          />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareURL}
          title={'Apoteka DAR'}
        >
          <Button
            key={'tw'}
            size="small"
            variant="outlined"
            startIcon={<Iconify icon={'carbon:logo-twitter'} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              color: Colors.primary.main,
              borderColor: Colors.primary.main,
              '&:hover': {
                borderColor: Colors.primary.main,
                bgcolor: alpha(Colors.primary.main, 0.08),
              },
            }}
          />
        </TwitterShareButton>
        <LinkedinShareButton url={shareURL}>
          <Button
            key={'li'}
            size="small"
            variant="outlined"
            startIcon={<Iconify icon={'carbon:logo-linkedin'} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              color: Colors.primary.main,
              borderColor: Colors.primary.main,
              '&:hover': {
                borderColor: Colors.primary.main,
                bgcolor: alpha(Colors.primary.main, 0.08),
              },
            }}
          />
        </LinkedinShareButton>
        <ViberShareButton
          url={shareURL}
          title={'Apoteka DAR'}
        >
          <Button
            key={'vb'}
            size="small"
            variant="outlined"
            startIcon={<FaViber />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              color: Colors.primary.main,
              borderColor: Colors.primary.main,
              '&:hover': {
                borderColor: Colors.primary.main,
                bgcolor: alpha(Colors.primary.main, 0.08),
              },
            }}
          />

        </ViberShareButton>
        <EmailShareButton
          url={shareURL}
          subject={'Apoteka DAR'}
        >
          <Button
            key={'em'}
            size="small"
            variant="outlined"
            startIcon={<AlternateEmailIcon />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              color: Colors.primary.main,
              borderColor: Colors.primary.main,
              '&:hover': {
                borderColor: Colors.primary.main,
                bgcolor: alpha(Colors.primary.main, 0.08),
              },
            }}
          />
        </EmailShareButton>
      </Stack>
    </Stack>
  );
}
