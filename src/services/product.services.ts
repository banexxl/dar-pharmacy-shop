import { MongoClient } from "mongodb"

const productsServices = () => {

          const getProductForHomePage = async () => {

                    const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

                    try {
                              const db = client.db('DAR_DB')
                              let data: [] = await db.collection('Products').find().toArray()
                              return data
                    } catch (error: any) {
                              return { message: error.message }
                    }
                    finally {
                              await client.close();
                    }
          }

          return {
                    getProductForHomePage,
          }
}

export default productsServices