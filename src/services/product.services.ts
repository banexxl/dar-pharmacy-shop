import IProduct from "@/interfaces/product/product.interface"
import { MongoClient } from "mongodb"
import { ObjectId } from "mongodb"

const productsServices = () => {

          const getProductsForHomePage = async () => {

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

          const getProductById = async (_id: any) => {
                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
                    try {
                              const db = client.db('DAR_DB')
                              let product: IProduct = await db.collection('Products').findOne({ _id: new ObjectId(_id) });


                              return product
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          return {
                    getProductsForHomePage,
                    getProductById
          }
}

export default productsServices