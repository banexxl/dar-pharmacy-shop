'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  CircularProgress,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
import { signInWithEmail, signInWithGoogle } from '@/lib/auth/actions';
import { useFormik } from 'formik';
import * as yup from 'yup';

const emailSchema = yup.object({
  email: yup
    .string()
    .email('Unesite validnu email adresu')
    .required('Email je obavezan'),
});

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      const result = await signInWithEmail(values.email);

      if (result.error) {
        setError(result.error);
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    },
  });

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError(null);

    const result = await signInWithGoogle();

    if (result?.error) {
      setError(result.error);
      setGoogleLoading(false);
    }
    // If successful, user is redirected — no need to reset state
  };

  if (success) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
          Proverite Vaš email!
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Poslali smo Vam link za prijavu na{' '}
          <strong>{formik.values.email}</strong>. Kliknite na link u email-u da
          biste se prijavili.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        maxWidth: 400,
        mx: 'auto',
      }}
    >
      {/* Email OTP form */}
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '100%',
        }}
      >
        <TextField
          fullWidth
          name="email"
          label="Unesite vaš email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading || googleLoading}
          sx={{ height: 44 }}
        >
          {loading ? <CircularProgress size={22} color="inherit" /> : 'Prijava'}
        </Button>
      </Box>

      {/* Divider */}
      <Divider sx={{ width: '100%' }}>ili</Divider>

      {/* Google OAuth */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        disabled={loading || googleLoading}
        sx={{ height: 44 }}
      >
        {googleLoading ? (
          <CircularProgress size={22} color="inherit" />
        ) : (
          'Prijava sa Google nalogom'
        )}
      </Button>

      {/* Error display */}
      {error && (
        <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
          {error}
        </Typography>
      )}

      {/* Registration link */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Nemate nalog?
        </Typography>
        <Button component={Link} href="/registracija" size="small">
          Registrujte se
        </Button>
      </Box>
    </Box>
  );
}
