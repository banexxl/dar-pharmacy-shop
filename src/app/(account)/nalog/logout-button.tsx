'use client';

import { Button } from '@mui/material';
import { createClient } from '@/lib/supabase/browser';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleLogout}
      sx={{ mt: 2 }}
    >
      Odjavi se
    </Button>
  );
}
