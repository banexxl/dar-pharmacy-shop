export default interface IProduct {
     _id: string;
     name: string;
     description: string;
     category: string;
     availableStock: number;
     ingredients: string;
     instructions: string;
     quantity: number;
     quantityUnit: string;
     warning: string;
     imageURL: string;
     mediaURLs: string[];
     price: number;
     manufacturer?: string;
     discount: boolean;
     discountAmount?: number;
     promotionText?: string;
     slug: string;
}

export type ProductQuantityType =
     'briketa' | 'flastera' |
     'g' | 'kapsula' |
     'kesica' | 'komad' |
     'komada' | 'kompresa' |
     'ledenih kocki' | 'mg' |
     'ml' | 'tableta'
