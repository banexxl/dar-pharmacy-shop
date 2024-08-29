import { Order } from "@/schemas/order"
import { MongoClient } from "mongodb"
import { ObjectId } from "mongodb"

export const OrdersServices = () => {

     const getAllOrders = async () => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('ORDERS_DB')
               let data: Order[] = await db.collection('Orders').find({}).toArray()
               return data
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getOrderById = async (_id: any) => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('ORDERS_DB')
               let order: Order = await db.collection('Orders').findOne({ _id: new ObjectId(_id) })
               return order
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getOrdersByUserId = async (userId: string) => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('ORDERS_DB')
               let orders: Order[] = await db.collection('Orders').find({ 'customer._id': userId }).toArray()
               return orders
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getOrdersByUserEmail = async (email: string) => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('ORDERS_DB')
               let orders: Order[] = await db.collection('Orders')
                    .find({ 'customer.email': email })
                    .sort({ createdAt: -1 })
                    .toArray()
               return orders
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const createNewOrder = async (order: Order) => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('ORDERS_DB')
               await db.collection('Orders').insertOne(order)
               return { message: 'Order successfully created!' }
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     return {
          getOrdersByUserEmail,
          getAllOrders,
          getOrderById,
          getOrdersByUserId,
          createNewOrder
     }
}