'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { updatePassword } from '@/lib/auth/actions';

const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, 'Lozinka mora imati najmanje 6 karaktera')
    .required('Nova lozinka je obavezna'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Lozinke se ne poklapaju')
    .required('Potvrdite lozinku'),
});

export function ResetPasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const formik = useFormik({
    initialValues: { password: '', confirmPassword: '' },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const result = await updatePassword(values.password);

      if (result.error) {
        toast.error(result.error);
        setLoading(false);
      } else {
        toast.success('Lozinka je uspešno promenjena!');
        router.push('/');
        router.refresh();
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        mx: 'auto',
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
        Unesite novu lozinku za Vaš nalog.
      </Typography>

      <TextField
        fullWidth
        name="password"
        label="Nova lozinka"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && !!formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
        disabled={loading}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((s) => !s)}
                  edge="end"
                  size="small"
                  aria-label={showPassword ? 'Sakrij lozinku' : 'Prikaži lozinku'}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <TextField
        fullWidth
        name="confirmPassword"
        label="Potvrdite lozinku"
        type={showConfirm ? 'text' : 'password'}
        variant="outlined"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        disabled={loading}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirm((s) => !s)}
                  edge="end"
                  size="small"
                  aria-label={showConfirm ? 'Sakrij lozinku' : 'Prikaži lozinku'}
                >
                  {showConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ height: 44 }}
      >
        {loading ? (
          <CircularProgress size={22} color="inherit" />
        ) : (
          'Sačuvaj novu lozinku'
        )}
      </Button>
    </Box>
  );
}
