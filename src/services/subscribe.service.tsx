import { MongoClient } from "mongodb";

export const SubscribeClientService = async (data: any) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
                    const db = client.db('DAR_DB')
                    await db.collection('Subscriptions').insertOne(data)
          } catch (error: any) {
                    return { message: error.message }
          }
          finally {
                    await client.close();
          }
}