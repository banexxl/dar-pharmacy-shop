'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  ButtonGroup,
  InputAdornment,
  IconButton,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  signInWithEmail,
  signInWithGoogle,
  signInWithPassword,
  resetPassword,
} from '@/lib/auth/actions';

// ─── Validation Schemas ────────────────────────────────────────────────────────

const emailPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Unesite validnu email adresu')
    .required('Email je obavezan'),
  password: yup
    .string()
    .min(6, 'Lozinka mora imati najmanje 6 karaktera')
    .required('Lozinka je obavezna'),
});

const emailSchema = yup.object({
  email: yup
    .string()
    .email('Unesite validnu email adresu')
    .required('Email je obavezan'),
});

const resetSchema = yup.object({
  email: yup
    .string()
    .email('Unesite validnu email adresu')
    .required('Email je obavezan'),
});

// ─── Email & Password Form ─────────────────────────────────────────────────────

function EmailPasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: emailPasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const result = await signInWithPassword(values.email, values.password);

      if (result.error) {
        toast.error(result.error);
        setLoading(false);
      } else {
        toast.success('Uspešno ste se prijavili!');
        router.push('/');
        router.refresh();
      }
    },
  });

  const resetFormik = useFormik({
    initialValues: { email: '' },
    validationSchema: resetSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const result = await resetPassword(values.email);

      if (result.error) {
        toast.error(result.error);
        setLoading(false);
      } else {
        router.push('/autentifikacija/reset-lozinke/zahtev-poslat');
      }
    },
  });

  if (showReset) {
    return (
      <Box
        component="form"
        onSubmit={resetFormik.handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
          Unesite email adresu i poslaćemo Vam link za reset lozinke.
        </Typography>
        <TextField
          fullWidth
          name="email"
          label="Email adresa"
          variant="outlined"
          value={resetFormik.values.email}
          onChange={resetFormik.handleChange}
          onBlur={resetFormik.handleBlur}
          error={resetFormik.touched.email && !!resetFormik.errors.email}
          helperText={resetFormik.touched.email && resetFormik.errors.email}
          disabled={loading}
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
            'Pošalji link za reset'
          )}
        </Button>
        <Button
          variant="text"
          size="small"
          onClick={() => setShowReset(false)}
          disabled={loading}
        >
          Nazad na prijavu
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      <TextField
        fullWidth
        name="email"
        label="Email adresa"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
        disabled={loading}
      />
      <TextField
        fullWidth
        name="password"
        label="Lozinka"
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
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ height: 44 }}
      >
        {loading ? <CircularProgress size={22} color="inherit" /> : 'Prijava'}
      </Button>
      <Button
        variant="text"
        size="small"
        onClick={() => setShowReset(true)}
        sx={{ alignSelf: 'flex-end' }}
      >
        Zaboravili ste lozinku?
      </Button>
    </Box>
  );
}

// ─── Google Sign In Form ───────────────────────────────────────────────────────

function GoogleSignInForm() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);

    const result = await signInWithGoogle();

    if (result?.error) {
      toast.error(result.error);
      setLoading(false);
    }
    // If successful, user is redirected
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
        Prijavite se koristeći Vaš Google nalog.
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        disabled={loading}
        sx={{ height: 44 }}
      >
        {loading ? (
          <CircularProgress size={22} color="inherit" />
        ) : (
          'Prijava sa Google nalogom'
        )}
      </Button>
    </Box>
  );
}

// ─── Email Magic Link Form ─────────────────────────────────────────────────────

function EmailMagicLinkForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const result = await signInWithEmail(values.email);

      if (result.error) {
        toast.error(result.error);
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    },
  });

  if (success) {
    return (
      <Box sx={{ textAlign: 'center', py: 2 }}>
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
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
        Poslaćemo Vam link za prijavu na email. Bez lozinke.
      </Typography>
      <TextField
        fullWidth
        name="email"
        label="Email adresa"
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
        disabled={loading}
        sx={{ height: 44 }}
      >
        {loading ? (
          <CircularProgress size={22} color="inherit" />
        ) : (
          'Pošalji link za prijavu'
        )}
      </Button>
    </Box>
  );
}

// ─── Main Login Form ───────────────────────────────────────────────────────────

export function LoginForm() {
  const [tab, setTab] = useState<'password' | 'google' | 'magic'>('password');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        maxWidth: 420,
        mx: 'auto',
        width: '100%',
      }}
    >
      {/* Tab Switcher */}
      <ButtonGroup variant="outlined" fullWidth sx={{ mb: 3 }}>
        <Button
          variant={tab === 'password' ? 'contained' : 'outlined'}
          onClick={() => setTab('password')}
        >
          Kredencijali
        </Button>
        <Button
          variant={tab === 'google' ? 'contained' : 'outlined'}
          onClick={() => setTab('google')}
        >
          Google
        </Button>
        <Button
          variant={tab === 'magic' ? 'contained' : 'outlined'}
          onClick={() => setTab('magic')}
        >
          Email link
        </Button>
      </ButtonGroup>

      {/* Tab Content */}
      {tab === 'password' && <EmailPasswordForm />}
      {tab === 'google' && <GoogleSignInForm />}
      {tab === 'magic' && <EmailMagicLinkForm />}

      {/* Registration link */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
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
