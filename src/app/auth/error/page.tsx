import { AuthErrorClient } from './error-client';

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  return <AuthErrorClient reason={reason} />;
}
