import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Colors } from '@/styles/theme';
import { useUIContext } from '@/context/ui/ui.context';

export default function LoadingWheel(props: any) {

          return (
                    <Box sx={{ color: Colors.primary, zIndex: '1000' }}>
                              <CircularProgress
                                        sx={{
                                                  color: Colors.dim_grey,
                                                  position: 'absolute',
                                                  top: '50%',
                                                  left: '50%',
                                                  transform: 'translate(-50%, -50%)',
                                                  display: props.showLoadingWheel
                                        }} />
                    </Box>
          )
}




