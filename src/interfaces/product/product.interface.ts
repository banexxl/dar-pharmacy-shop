export default interface Product {
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
     // Joined field (not in DB, populated by queries)
     manufacturer?: string;
}

export type ProductQuantityType =
     | 'briketa'
     | 'flastera'
     | 'g'
     | 'kapsula'
     | 'kesica'
     | 'komad'
     | 'komada'
     | 'kompresa'
     | 'ledenih kocki'
     | 'mg'
     | 'ml'
     | 'tableta';
