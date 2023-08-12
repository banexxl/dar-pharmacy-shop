import { MongoClient } from "mongodb";

export const SubscribeClientService = async (data: any) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
                    const db = client.db('DAR_DB')
                    const subExists = await db.collection('Subscriptions').findOne({ email: data.email })

                    return subExists === null ?
                              await db.collection('Subscriptions').insertOne(data)
                              :
                              'Email već postoji'
          } catch (error: any) {
                    return { message: error.message }
          }
          finally {
                    await client.close();
          }
}