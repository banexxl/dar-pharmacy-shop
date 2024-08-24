export interface ICustomer {
     _id?: string; // Assuming this is the ObjectId in string format
     emailVerified: Date;
     city: string;
     country: string;
     email: string;
     name: string;
     phoneNumber: string;
     provinceState?: string;
     shouldCreateAccount?: boolean;
     streetAddress: string;
     zipPostalCode: string;
}
