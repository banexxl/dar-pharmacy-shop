import { MongoClient } from "mongodb"
import { DB } from '../interfaces/db'

const productsServices = () => {

          const getProducts = async () => {

                    const client: any = await MongoClient.connect(process.env.REACT_APP_DB_CONNECT!)

                    try {
                              const db = client.db('DAR_DB')
                              let data: [] = await db.collection('Products').find().toArray()
                              return data
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              console.log("finallize");
                              await client.close();
                    }
          }

          return {
                    getProducts,
          }
}

export default productsServices