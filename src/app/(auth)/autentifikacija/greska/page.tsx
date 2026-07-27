import { ErrorPageClient } from "./error-client";

export default async function AuthErrorPageLegacy({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return <ErrorPageClient error={error} />;
}
