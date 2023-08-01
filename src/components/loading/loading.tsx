import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Colors } from '@/styles/theme';

export default function CircularIndeterminate() {
          return (
                    <Box sx={{ color: Colors.primary, zIndex: '1000' }}>
                              <CircularProgress
                                        sx={{
                                                  color: Colors.primary,
                                                  position: 'absolute',
                                                  top: '50%',
                                                  left: '50%',
                                                  transform: 'translate(-50%, -50%)'
                                        }} />
                    </Box>
          );
}




