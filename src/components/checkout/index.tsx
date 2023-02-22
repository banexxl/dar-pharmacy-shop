import { CheckBox } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react'

const CheckoutForm = () => {

          return (
                    <Box
                              component="form"
                              sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                    >
                    </Box>
          );
}

export default CheckoutForm