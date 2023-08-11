import { MongoClient } from "mongodb";

export const SubscribeClient = async (data: any) => {

          console.log('data u servisu', data);

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
                    const db = client.db('DAR_DB')
                    await db.collection('Subscriptions').insert(data)
          } catch (error: any) {
                    return { message: error.message }
          }
          finally {
                    await client.close();
          }
}