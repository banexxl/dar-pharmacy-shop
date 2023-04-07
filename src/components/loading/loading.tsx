import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { Colors } from '@/styles/theme';
import ILoading from '@/interfaces/loading/loading.interface';

export default function LoadingWheel(props: ILoading) {


          return (
                    <Backdrop
                              sx={{ color: 'red', zIndex: '1000', opacity: '.5' }}
                              open={props.isLoading}
                    >
                              <CircularProgress
                                        size={32}
                                        sx={{
                                                  color: Colors.primary[500],
                                                  position: 'absolute',
                                        }} />
                    </Backdrop>

          );
}
