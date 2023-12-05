// pages/api/search.js
import productsServices from '../../../services/product.services'; // Import your MongoDB connection setup
import IProduct from '../../../interfaces/product/product.interface'
import { NextApiRequest, NextApiResponse } from 'next';

const ProductSearchApi = async (request: NextApiRequest, response: NextApiResponse) => {

     if (request.method === 'POST') {
          try {
               const searchedProducts: any = await productsServices().getProductsByNameAndOrManufacturer(request.body);
               if (searchedProducts.length > 0) {
                    return response.status(200).json({ message: 'Products found!', data: searchedProducts })
               } else {
                    return response.status(404).json({ error: 'Searched products not found!' });
               }
          } catch (error) {
               return response.status(500).json({ error: 'Internal server error!' });
          }
     } else {
          console.log(response);

          return response.status(405).json({ error: 'Method not allowed!' });
     }
};

export default ProductSearchApi