'use client';

import {
     createContext,
     useCallback,
     useEffect,
     useMemo,
     useState,
     type ReactNode,
} from 'react';
import type {
     AuthChangeEvent,
     Session,
     User,
} from '@supabase/supabase-js';

import { createClient } from '@/lib/supabase/browser';
import { Database } from '@/lib/supabase/types';

export type Customer =
     Database['public']['Tables']['customers']['Row'];

export type CustomerUpdate =
     Database['public']['Tables']['customers']['Update'];

export type EditableCustomerFields = Omit<
     CustomerUpdate,
     'id' | 'user_id' | 'created_at' | 'updated_at'
>;

type OperationResult = {
     success: boolean;
     error?: string;
};

type AuthContextValue = {
     session: Session | null;
     user: User | null;
     customer: Customer | null;
     loading: boolean;
     isAuthenticated: boolean;
     refreshCustomer: () => Promise<void>;
     updateCustomer: (
          values: EditableCustomerFields
     ) => Promise<OperationResult>;
     signOut: () => Promise<OperationResult>;
};

export const AuthContext = createContext<
     AuthContextValue | undefined
>(undefined);

type AuthProviderProps = {
     children: ReactNode;
};

export function AuthProvider({
     children,
}: AuthProviderProps) {
     const supabase = useMemo(() => createClient(), []);

     const [session, setSession] =
          useState<Session | null>(null);

     const [customer, setCustomer] =
          useState<Customer | null>(null);

     const [loading, setLoading] = useState(true);

     const user = session?.user ?? null;
     const isAuthenticated = Boolean(user);

     const getCustomer = useCallback(
          async (
               userId: string
          ): Promise<Customer | null> => {
               const { data, error } = await supabase
                    .from('customers')
                    .select('*')
                    .eq('user_id', userId)
                    .maybeSingle();

               if (error) {
                    console.error(
                         'Failed to fetch customer:',
                         error
                    );

                    return null;
               }

               return data;
          },
          [supabase]
     );

     const refreshCustomer = useCallback(async () => {
          if (!user?.id) {
               setCustomer(null);
               return;
          }

          const customerData = await getCustomer(user.id);

          setCustomer(customerData);
     }, [getCustomer, user?.id]);

     const updateCustomer = useCallback(
          async (
               values: EditableCustomerFields
          ): Promise<OperationResult> => {
               if (!user?.id) {
                    return {
                         success: false,
                         error: 'Korisnik nije prijavljen.',
                    };
               }

               const updatePayload: CustomerUpdate = {
                    ...values,
                    updated_at: new Date().toISOString(),
               };

               const { data, error } = await supabase
                    .from('customers')
                    .update(updatePayload)
                    .eq('user_id', user.id)
                    .select('*')
                    .single();

               if (error) {
                    console.error(
                         'Failed to update customer:',
                         error
                    );

                    return {
                         success: false,
                         error: error.message,
                    };
               }

               setCustomer(data);

               return {
                    success: true,
               };
          },
          [supabase, user?.id]
     );

     const signOut =
          useCallback(async (): Promise<OperationResult> => {
               setLoading(true);

               const { error } =
                    await supabase.auth.signOut();

               if (error) {
                    console.error(
                         'Failed to sign out:',
                         error
                    );

                    setLoading(false);

                    return {
                         success: false,
                         error: error.message,
                    };
               }

               setSession(null);
               setCustomer(null);
               setLoading(false);

               return {
                    success: true,
               };
          }, [supabase]);

     useEffect(() => {
          let active = true;

          const loadInitialSession = async () => {
               setLoading(true);

               const {
                    data: { session: currentSession },
                    error,
               } = await supabase.auth.getSession();

               if (!active) {
                    return;
               }

               if (error) {
                    console.error(
                         'Failed to get Supabase session:',
                         error
                    );

                    setSession(null);
                    setCustomer(null);
                    setLoading(false);

                    return;
               }

               setSession(currentSession);

               if (!currentSession?.user.id) {
                    setCustomer(null);
                    setLoading(false);
                    return;
               }

               const customerData = await getCustomer(
                    currentSession.user.id
               );

               if (!active) {
                    return;
               }

               setCustomer(customerData);
               setLoading(false);
          };

          void loadInitialSession();

          const {
               data: { subscription },
          } = supabase.auth.onAuthStateChange(
               (
                    _event: AuthChangeEvent,
                    nextSession: Session | null
               ) => {
                    if (!active) {
                         return;
                    }

                    setSession(nextSession);

                    if (!nextSession?.user.id) {
                         setCustomer(null);
                         setLoading(false);
                         return;
                    }

                    setLoading(true);

                    // Run the database request outside of the auth callback.
                    window.setTimeout(() => {
                         void getCustomer(
                              nextSession.user.id
                         ).then((customerData) => {
                              if (!active) {
                                   return;
                              }

                              setCustomer(customerData);
                              setLoading(false);
                         });
                    }, 0);
               }
          );

          return () => {
               active = false;
               subscription.unsubscribe();
          };
     }, [getCustomer, supabase]);

     const value = useMemo<AuthContextValue>(
          () => ({
               session,
               user,
               customer,
               loading,
               isAuthenticated,
               refreshCustomer,
               updateCustomer,
               signOut,
          }),
          [
               session,
               user,
               customer,
               loading,
               isAuthenticated,
               refreshCustomer,
               updateCustomer,
               signOut,
          ]
     );

     return (
          <AuthContext.Provider value={value}>
               {children}
          </AuthContext.Provider>
     );
}