import IProduct from "@/interfaces/product/product.interface"
import { MongoClient } from "mongodb"

const productsServices = () => {

          const getProductForHomePage = async () => {

                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

                    try {
                              const db = client.db('DAR_DB')
                              let data: IProduct[] = await db.collection('Products').find().toArray()
                              return data
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          const getProductById = async (_id: string) => {
                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

                    console.log('_id from services', _id);

                    try {
                              const db = client.db('DAR_DB')
                              let product: IProduct = await db.collection('Products').find({ _id: _id })
                              console.log(product);

                              return product
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          return {
                    getProductForHomePage,
                    getProductById
          }
}

export default productsServices