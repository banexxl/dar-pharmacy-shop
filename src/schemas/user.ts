export interface ICustomer {
     id?: string;
     user_id?: string;
     full_name: string;
     phone_number: string;
     street_address: string;
     city: string;
     province_state?: string;
     country: string;
     zip_postal_code: string;
     email: string;
     is_banned?: boolean;
     banned_until?: string | null;
}
