import { createServiceRoleClient } from './supabase/service-role';

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
 * Fire-and-forget — never throws, never blocks the response.
 */
export async function logAction(params: LogActionParams): Promise<void> {
  try {
    await supabase.from('action_logs' as any).insert({
      action: params.action,
      success: params.success,
      customer_id: params.customer_id ?? null,
      user_id: params.user_id ?? null,
      email: params.email ?? null,
      ip_address: params.ip_address ?? null,
      method: params.method ?? null,
      path: params.path ?? null,
      error_message: params.error_message ?? null,
      metadata: params.metadata ?? null,
    });
  } catch (err) {
    // Silently fail — logging should never break the app
    console.error('[Logger] Failed to write log:', err);
  }
}
