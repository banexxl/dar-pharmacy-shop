export default interface IProduct {
          _id: string;
          name: string;
          description: string;
          category: string;
          availableStock: number;
          ingredients: string;
          instructions: string;
          quantity: string[];
          warning: string;
          imageURL: string;
          price: number[];
}

