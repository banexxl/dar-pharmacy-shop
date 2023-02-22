import { CheckBox } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, TextField } from '@mui/material';
import React from 'react'
import UserInfo from './userinfo';

const CheckoutForm = () => {

          const [state, setState] = React.useState({
                    gilad: true,
                    jason: false,
                    antoine: false,
          });

          const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                    setState({
                              ...state,
                              [event.target.name]: event.target.checked,
                    });
          };

          const { gilad, jason, antoine } = state;
          const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


          return (
                    <Box
                              component="form"
                              sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                    >
                              <UserInfo />
                    </Box>
          );
}

export default CheckoutForm