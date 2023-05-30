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

          const getProductsByManufacturer = async (manufacturer: string) => {
                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
                    try {
                              const db = client.db('DAR_DB')
                              let products: IProduct[] = await db.collection('Products').find({ "manufacturer": `${manufacturer}` }).toArray()
                              return products
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          const getProductsByCategory = async (category: string) => {
                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
                    try {
                              const db = client.db('DAR_DB')
                              let products: IProduct[] = await db.collection('Products').find({ "category": `${category}` }).toArray()
                              return products
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          const getProductsByName = async (name: string) => {
                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
                    try {
                              const db = client.db('DAR_DB')
                              let products: IProduct[] = await db.collection('Products').find({ "name": `${name}` }).toArray()
                              return products
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          const getProductsByDiscount = async (discount: boolean) => {
                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
                    try {
                              const db = client.db('DAR_DB')
                              let products: IProduct[] = await db.collection('Products').find({ "discount": `${discount}` }).toArray()
                              return products
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          return {
                    getProductsForHomePage,
                    getProductById,
                    getProductsByManufacturer,
                    getProductsByCategory,
                    getProductsByDiscount
          }
}

export default productsServices