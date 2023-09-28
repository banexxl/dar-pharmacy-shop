import { MongoClient } from "mongodb";

export const SubscribeClientService = async (data: any) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
                    const db = client.db('DAR_DB');
                    const subscriptionExists = await db.collection('Subscriptions').findOne({ email: data.email });

                    if (subscriptionExists === null) {
                              return await db.collection('Subscriptions').insertOne(data);
                    } else {
                              const error = new Error('Email already subscribed!');
                              // Attach custom properties to the error object
                              (error as any).cause = { status: 409 };
                              throw error;
                    }
          } catch (error: any) {
                    return { message: error.message }
          }
          finally {
                    await client.close();
          }
}