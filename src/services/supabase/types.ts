/**
 * Supabase database types.
 *
 * TODO: Replace this placeholder with generated types from:
 *   npx supabase gen types typescript --project-id <project-id> > src/lib/supabase/types.ts
 *
 * For now we define the known table shapes manually so the rest of the
 * application can reference them with type safety.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string;
          user_id: string;
          full_name: string;
          phone_number: string;
          street_address: string;
          city: string;
          province_state: string | null;
          country: string;
          zip_postal_code: string;
          email: string;
          avatar: string | null;
          is_banned: boolean;
          banned_until: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          full_name: string;
          phone_number: string;
          street_address: string;
          city: string;
          province_state?: string | null;
          country: string;
          zip_postal_code: string;
          email: string;
          avatar?: string | null;
          is_banned?: boolean;
          banned_until?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          full_name?: string;
          phone_number?: string;
          street_address?: string;
          city?: string;
          province_state?: string | null;
          country?: string;
          zip_postal_code?: string;
          email?: string;
          avatar?: string | null;
          is_banned?: boolean;
          banned_until?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          main_category: string;
          mid_category: string | null;
          sub_category: string | null;
          available_stock: number;
          ingredients: string | null;
          instructions: string | null;
          warning: string | null;
          quantity: number;
          quantity_unit: string;
          manufacturer_id: string | null;
          image_url: string;
          media_urls: string[] | null;
          price: number;
          new_arrival: boolean;
          best_seller: boolean;
          discount: boolean;
          discount_amount: number | null;
          is_active: boolean;
          promoting: boolean;
          promotion_text: string | null;
          display_on_home: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description: string;
          main_category: string;
          mid_category?: string | null;
          sub_category?: string | null;
          available_stock?: number;
          ingredients?: string | null;
          instructions?: string | null;
          warning?: string | null;
          quantity?: number;
          quantity_unit?: string;
          manufacturer_id?: string | null;
          image_url: string;
          media_urls?: string[] | null;
          price: number;
          new_arrival?: boolean;
          best_seller?: boolean;
          discount?: boolean;
          discount_amount?: number | null;
          is_active?: boolean;
          promoting?: boolean;
          promotion_text?: string | null;
          display_on_home?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string;
          main_category?: string;
          mid_category?: string | null;
          sub_category?: string | null;
          available_stock?: number;
          ingredients?: string | null;
          instructions?: string | null;
          warning?: string | null;
          quantity?: number;
          quantity_unit?: string;
          manufacturer_id?: string | null;
          image_url?: string;
          media_urls?: string[] | null;
          price?: number;
          new_arrival?: boolean;
          best_seller?: boolean;
          discount?: boolean;
          discount_amount?: number | null;
          is_active?: boolean;
          promoting?: boolean;
          promotion_text?: string | null;
          display_on_home?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'products_manufacturer_id_fkey';
            columns: ['manufacturer_id'];
            referencedRelation: 'manufacturers';
            referencedColumns: ['id'];
          }
        ];
      };
      manufacturers: {
        Row: {
          id: string;
          name: string;
          value: string;
          url: string;
        };
        Insert: {
          id?: string;
          name: string;
          value: string;
          url: string;
        };
        Update: {
          id?: string;
          name?: string;
          value?: string;
          url?: string;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          id: string;
          order_number: string;
          customer_id: string | null;
          payment_method: string;
          payment_status: string;
          order_status: string;
          transaction_number: string | null;
          total: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          order_number: string;
          customer_id?: string | null;
          payment_method: string;
          payment_status?: string;
          order_status?: string;
          transaction_number?: string | null;
          total: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          order_number?: string;
          customer_id?: string | null;
          payment_method?: string;
          payment_status?: string;
          order_status?: string;
          transaction_number?: string | null;
          total?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'orders_customer_id_fkey';
            columns: ['customer_id'];
            referencedRelation: 'customers';
            referencedColumns: ['id'];
          }
        ];
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string | null;
          name: string;
          description: string | null;
          main_category: string | null;
          mid_category: string | null;
          sub_category: string | null;
          ingredients: string | null;
          instructions: string | null;
          warning: string | null;
          quantity: number | null;
          quantity_unit: string | null;
          manufacturer: string | null;
          manufacturer_value: string | null;
          image_url: string | null;
          media_urls: string[] | null;
          unit_price: number;
          count: number;
          discount: boolean;
          discount_amount: number | null;
          final_unit_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id?: string | null;
          name: string;
          description?: string | null;
          main_category?: string | null;
          mid_category?: string | null;
          sub_category?: string | null;
          ingredients?: string | null;
          instructions?: string | null;
          warning?: string | null;
          quantity?: number | null;
          quantity_unit?: string | null;
          manufacturer?: string | null;
          manufacturer_value?: string | null;
          image_url?: string | null;
          media_urls?: string[] | null;
          unit_price: number;
          count: number;
          discount?: boolean;
          discount_amount?: number | null;
          final_unit_price: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string | null;
          name?: string;
          description?: string | null;
          main_category?: string | null;
          mid_category?: string | null;
          sub_category?: string | null;
          ingredients?: string | null;
          instructions?: string | null;
          warning?: string | null;
          quantity?: number | null;
          quantity_unit?: string | null;
          manufacturer?: string | null;
          manufacturer_value?: string | null;
          image_url?: string | null;
          media_urls?: string[] | null;
          unit_price?: number;
          count?: number;
          discount?: boolean;
          discount_amount?: number | null;
          final_unit_price?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'order_items_order_id_fkey';
            columns: ['order_id'];
            referencedRelation: 'orders';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'order_items_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'products';
            referencedColumns: ['id'];
          }
        ];
      };
      main_categories: {
        Row: {
          id: string;
          label: string;
          value: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          label: string;
          value: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          label?: string;
          value?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      mid_categories: {
        Row: {
          id: string;
          label: string;
          value: string;
          main_category_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          label: string;
          value: string;
          main_category_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          label?: string;
          value?: string;
          main_category_id?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'mid_categories_main_category_id_fkey';
            columns: ['main_category_id'];
            referencedRelation: 'main_categories';
            referencedColumns: ['id'];
          }
        ];
      };
      sub_categories: {
        Row: {
          id: string;
          label: string;
          value: string;
          mid_category_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          label: string;
          value: string;
          mid_category_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          label?: string;
          value?: string;
          mid_category_id?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'sub_categories_mid_category_id_fkey';
            columns: ['mid_category_id'];
            referencedRelation: 'mid_categories';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

// Convenience type aliases
export type Customer = Database['public']['Tables']['customers']['Row'];
export type CustomerInsert = Database['public']['Tables']['customers']['Insert'];
export type CustomerUpdate = Database['public']['Tables']['customers']['Update'];

export type Product = Database['public']['Tables']['products']['Row'];
export type ProductInsert = Database['public']['Tables']['products']['Insert'];

export type Manufacturer = Database['public']['Tables']['manufacturers']['Row'];

export type Order = Database['public']['Tables']['orders']['Row'];
export type OrderInsert = Database['public']['Tables']['orders']['Insert'];

export type OrderItem = Database['public']['Tables']['order_items']['Row'];
export type OrderItemInsert = Database['public']['Tables']['order_items']['Insert'];

export type MainCategory = Database['public']['Tables']['main_categories']['Row'];
export type MidCategory = Database['public']['Tables']['mid_categories']['Row'];
export type SubCategory = Database['public']['Tables']['sub_categories']['Row'];
