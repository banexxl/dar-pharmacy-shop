import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export const SubscribeClient = async (request: NextApiRequest, response: NextApiResponse) => {

          const { subscription }: any = request.body
          console.log(request);

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
                    const db = client.db('DAR_DB')
                    await db.collection('Subscriptions').insert(subscription.email)
          } catch (error: any) {
                    return { message: error.message }
          }
          finally {
                    await client.close();
          }
}