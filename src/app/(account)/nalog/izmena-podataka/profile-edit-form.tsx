'use client';

import { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import toast from 'react-hot-toast';
import { updateProfile, type ProfileUpdateData } from '@/lib/auth/profile-action';
import type { Customer } from '@/lib/supabase/types';

const profileSchema = object().shape({
  full_name: string()
    .required('Ovo polje je obavezno')
    .max(40, 'Ovo polje je predugačko, max 40'),
  phone_number: string()
    .required('Ovo polje je obavezno')
    .max(25, 'Ovo polje je predugačko, max 25'),
  street_address: string()
    .required('Ovo polje je obavezno')
    .max(100, 'Ovo polje je predugačko, max 100'),
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
});

interface ProfileEditFormProps {
  customer: Customer | null;
}

export function ProfileEditForm({ customer }: ProfileEditFormProps) {
  const [loading, setLoading] = useState(false);

  const initialValues: ProfileUpdateData = {
    full_name: customer?.full_name || '',
    phone_number: customer?.phone_number || '',
    street_address: customer?.street_address || '',
    city: customer?.city || '',
    province_state: customer?.province_state || '',
    country: customer?.country || '',
    zip_postal_code: customer?.zip_postal_code || '',
    gender: customer?.gender || 'male',
  };

  const handleSubmit = async (values: ProfileUpdateData) => {
    setLoading(true);
    try {
      const result = await updateProfile(values);
      if (result.success) {
        toast.success('Uspešna izmena podataka!', {
          duration: 3000,
          position: 'top-center',
        });
      } else {
        toast.error(result.error || 'Greška pri čuvanju.', {
          duration: 3000,
          position: 'top-center',
        });
      }
    } catch {
      toast.error('Greška pri izmeni! Pokušajte ponovo kasnije.', {
        duration: 3000,
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <Stack spacing={2} sx={{ maxWidth: 700, mx: 'auto' }}>
            <Field
              as={TextField}
              label="Ime i prezime"
              name="full_name"
              variant="outlined"
              fullWidth
              error={formik.touched.full_name && !!formik.errors.full_name}
              helperText={formik.touched.full_name && formik.errors.full_name}
            />
            <Field
              as={TextField}
              label="Telefon"
              name="phone_number"
              variant="outlined"
              fullWidth
              error={formik.touched.phone_number && !!formik.errors.phone_number}
              helperText={formik.touched.phone_number && formik.errors.phone_number}
            />
            <Field
              as={TextField}
              label="Adresa"
              name="street_address"
              variant="outlined"
              fullWidth
              error={formik.touched.street_address && !!formik.errors.street_address}
              helperText={formik.touched.street_address && formik.errors.street_address}
            />
            <Field
              as={TextField}
              label="Grad"
              name="city"
              variant="outlined"
              fullWidth
              error={formik.touched.city && !!formik.errors.city}
              helperText={formik.touched.city && formik.errors.city}
            />
            <Field
              as={TextField}
              label="Region"
              name="province_state"
              variant="outlined"
              fullWidth
              error={formik.touched.province_state && !!formik.errors.province_state}
              helperText={formik.touched.province_state && formik.errors.province_state}
            />
            <Field
              as={TextField}
              label="Država"
              name="country"
              variant="outlined"
              fullWidth
              error={formik.touched.country && !!formik.errors.country}
              helperText={formik.touched.country && formik.errors.country}
            />
            <Field
              as={TextField}
              label="Poštanski broj"
              name="zip_postal_code"
              variant="outlined"
              fullWidth
              error={formik.touched.zip_postal_code && !!formik.errors.zip_postal_code}
              helperText={formik.touched.zip_postal_code && formik.errors.zip_postal_code}
            />
            <TextField
              label="Email"
              value={customer?.email || ''}
              disabled
              fullWidth
            />
            <FormControl>
              <RadioGroup
                row
                name="gender"
                value={formik.values.gender || 'male'}
                onChange={formik.handleChange('gender')}
              >
                <FormControlLabel value="male" control={<Radio />} label="Muški" />
                <FormControlLabel value="female" control={<Radio />} label="Ženski" />
              </RadioGroup>
            </FormControl>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 2 }}>
              <Button
                type="reset"
                variant="outlined"
                onClick={() => formik.resetForm()}
                disabled={loading}
              >
                Obriši
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={!formik.isValid || formik.isSubmitting || loading}
              >
                Sačuvaj
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
