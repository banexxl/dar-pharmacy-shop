import { MongoClient } from "mongodb";

export const SubscribeClientService = async (data: any) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
                    const db = client.db('DAR_DB')
                    const subscriptionExists = await db.collection('Subscriptions').findOne({ email: data.email })

                    return subscriptionExists === null ?
                              await db.collection('Subscriptions').insertOne(data)
                              :
                              'Email already exists!'
          } catch (error: any) {
                    return { message: error.message }
          }
          finally {
                    await client.close();
          }
}