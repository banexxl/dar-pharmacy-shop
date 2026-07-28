'use client';

import {
     Backdrop,
     CircularProgress,
     Stack,
     Typography,
} from '@mui/material';

export default function Loading() {
     return (
          <Backdrop
               open
               sx={(theme) => ({
                    position: 'fixed',
                    inset: 0,
                    zIndex: theme.zIndex.modal + 1,
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(4px)',
               })}
          >
               <Stack
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
               >
                    <CircularProgress
                         color="inherit"
                         size={52}
                         thickness={4}
                    />

                    <Typography
                         variant="body1"
                         color="text.primary"
                         fontWeight={600}
                    >
                         Učitavanje...
                    </Typography>
               </Stack>
          </Backdrop>
     );
}