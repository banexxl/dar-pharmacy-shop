import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ILoading from '@/interfaces/loading/loading.interface';
import { Colors } from '@/styles/theme';

export default function LoadingWheel(props: ILoading) {


          return (
                    <Backdrop
                              sx={{ color: Colors.primary, zIndex: '1000', opacity: '.5' }}
                              open={props.isLoading}
                    >
                              <CircularProgress
                                        size={32}
                                        sx={{
                                                  color: Colors.primary,
                                                  position: 'absolute',
                                        }} />
                    </Backdrop>

          );
}
