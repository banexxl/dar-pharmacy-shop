import { Box, TextField } from '@mui/material';
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

                              <TextField
                                        error
                                        id="outlined-error"
                                        label="Error"
                                        defaultValue="Hello World"
                              />


                    </Box>
          );
}

export default CheckoutForm