'use client';

import { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {
  registerCustomer,
  checkEmailAvailability,
  type RegisterFormData,
} from '@/services/auth/register-action';

const registrationSchema = object().shape({
  full_name: string()
    .required('Ovo polje je obavezno')
    .max(40, 'Ovo polje je predugačko, max 40'),
  street_address: string()
    .required('Ovo polje je obavezno')
    .max(100, 'Ovo polje je predugačko, max 100'),
  phone_number: string()
    .required('Ovo polje je obavezno')
    .max(25, 'Ovo polje je predugačko, max 25'),
  city: string()
    .required('Ovo polje je obavezno')
    .max(25, 'Ovo polje je predugačko, max 25'),
  province_state: string()
    .notRequired()
    .max(25, 'Ovo polje je predugačko, max 25'),
  country: string()
    .required('Ovo polje je obavezno')
    .max(25, 'Ovo polje je predugačko, max 25'),
  zip_postal_code: string()
    .required('Ovo polje je obavezno')
    .min(1, 'Ovo polje je prekratko, min 1')
    .max(10, 'Ovo polje je predugačko, max 10'),
  email: string()
    .email('Ovo polje mora biti email!')
    .required('Ovo polje je obavezno!')
    .test('checkUnique', 'Ovaj email je već registrovan!', async (value) => {
      if (!value) return true;
      try {
        const result = await checkEmailAvailability(value);
        return result.available;
      } catch {
        return true;
      }
    }),
  password: string()
    .required('Ovo polje je obavezno')
    .min(6, 'Ovo polje je prekratko, min 6 karaktera')
    .max(25, 'Ovo polje je predugačko, max 25 karaktera')
    .matches(/[A-Z]/, 'Lozinka mora sadržati najmanje jedno veliko slovo')
    .matches(/[a-z]/, 'Lozinka mora sadržati najmanje jedno malo slovo')
    .matches(/[0-9]/, 'Lozinka mora sadržati najmanje jedan broj')
    .matches(
      /[^A-Za-z0-9]/,
      'Lozinka mora sadržati najmanje jedan specijalni karakter'
    )
});

const initialValues: RegisterFormData = {
  full_name: '',
  street_address: '',
  phone_number: '',
  city: '',
  province_state: '',
  country: '',
  zip_postal_code: '',
  email: '',
  password: ''
};

export function RegistrationForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: RegisterFormData) => {
    setSubmitting(true);
    try {
      const result = await registerCustomer(values);
      if (result.status === 'exists') {
        toast('Korisnik već postoji!', { icon: '⚠️', duration: 3000, position: 'top-center' });
        router.push('/registracija/rezultat?status=exists');
      } else if (result.status === 'success') {
        toast.success('Uspešna registracija!', { duration: 3000, position: 'top-center' });
        router.push('/registracija/rezultat?status=success');
      } else {
        toast.error('Došlo je do greške! Proverite podatke i pokušajte ponovo.', { duration: 3000, position: 'top-center' });
        router.push('/registracija/rezultat?status=fail');
      }
    } catch {
      toast.error('Greška pri registraciji! Pokušajte ponovo kasnije.', { duration: 3000, position: 'top-center' });
      router.push('/registracija/rezultat?status=fail');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={registrationSchema} onSubmit={handleSubmit}>
      {(formik) => (
        <Form>
          <Grid container spacing={2} sx={{ maxWidth: 900, mx: 'auto' }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Ime i prezime" name="full_name" fullWidth variant="outlined"
                error={formik.touched.full_name && !!formik.errors.full_name}
                helperText={formik.touched.full_name && formik.errors.full_name} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Telefon" name="phone_number" fullWidth variant="outlined"
                error={formik.touched.phone_number && !!formik.errors.phone_number}
                helperText={formik.touched.phone_number && formik.errors.phone_number} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Adresa" name="street_address" fullWidth variant="outlined"
                error={formik.touched.street_address && !!formik.errors.street_address}
                helperText={formik.touched.street_address && formik.errors.street_address} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Grad" name="city" fullWidth variant="outlined"
                error={formik.touched.city && !!formik.errors.city}
                helperText={formik.touched.city && formik.errors.city} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Region" name="province_state" fullWidth variant="outlined"
                error={formik.touched.province_state && !!formik.errors.province_state}
                helperText={formik.touched.province_state && formik.errors.province_state} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Država" name="country" fullWidth variant="outlined"
                error={formik.touched.country && !!formik.errors.country}
                helperText={formik.touched.country && formik.errors.country} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Poštanski broj" name="zip_postal_code" fullWidth variant="outlined"
                error={formik.touched.zip_postal_code && !!formik.errors.zip_postal_code}
                helperText={formik.touched.zip_postal_code && formik.errors.zip_postal_code} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field as={TextField} label="Email" name="email" fullWidth variant="outlined"
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Field as={TextField} label="Lozinka" name="password" type="password" fullWidth variant="outlined"
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password} />
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
              <Button type="reset" variant="outlined" sx={{ mr: 2 }} onClick={() => formik.resetForm()}>
                Obriši
              </Button>
              <Button type="submit" variant="contained" disabled={!formik.isValid || formik.isSubmitting || submitting}>
                Registruj se
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
