import { createServiceRoleClient } from './supabase/service-role';
import { headers } from 'next/headers';

const supabase = createServiceRoleClient();

export interface LogActionParams {
  action: string;
  success: boolean;
  customer_id?: string | null;
  user_id?: string | null;
  email?: string | null;
  ip_address?: string | null;
  method?: string | null;
  path?: string | null;
  error_message?: string | null;
  metadata?: Record<string, any> | null;
}

/**
 * Logs a server-side action to the `action_logs` table.
 * Auto-resolves IP address from request headers.
 * Auto-resolves user_id, email, and customer_id from auth session when not provided.
 * Fire-and-forget — never throws, never blocks the response.
 */
export async function logAction(params: LogActionParams): Promise<void> {
  try {
    // Auto-resolve IP from headers
    let ip = params.ip_address ?? null;
    if (!ip) {
      try {
        const hdrs = await headers();
        ip = hdrs.get('x-forwarded-for')?.split(',')[0]?.trim()
          || hdrs.get('x-real-ip')
          || null;
      } catch { }
    }

    // Auto-resolve user_id, email, customer_id from auth if not provided
    let userId = params.user_id ?? null;
    let email = params.email ?? null;
    let customerId = params.customer_id ?? null;

    if (!userId || !email || !customerId) {
      try {
        const { createClient } = await import('./supabase/server');
        const authClient = await createClient();
        const { data: { user } } = await authClient.auth.getUser();

        if (user) {
          if (!userId) userId = user.id;
          if (!email) email = user.email ?? null;

          if (!customerId && userId) {
            const { data: customer } = await supabase
              .from('customers')
              .select('id')
              .eq('user_id', userId)
              .single();
            if (customer) customerId = customer.id;
          }
        }
      } catch { }
    }

    await supabase.from('action_logs' as any).insert({
      action: params.action,
      success: params.success,
      customer_id: customerId,
      user_id: userId,
      email: email,
      ip_address: ip,
      method: params.method ?? null,
      path: params.path ?? null,
      error_message: params.error_message ?? null,
      metadata: params.metadata ?? null,
    });
  } catch (err) {
    console.error('[Logger] Failed to write log:', err);
  }
}
