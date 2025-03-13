import IProduct from "@/interfaces/product/product.interface"
import { MongoClient } from "mongodb"
import { ObjectId } from "mongodb"

export const ProductsServices = () => {

     const getAllProducts = async () => {


          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('DAR_DB')
               let data: IProduct[] = await db.collection('Products').find({ isActive: true }).toArray()
               return data
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getRandomApotekaProducts = async () => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')
               // Get one random document from the mycoll collection.
               //db.mycoll.aggregate([{ $sample: { size: 1 } }])
               // Get one random document matching {a: 10} from the mycoll collection.
               // db.mycoll.aggregate([
               //      { $match: { a: 10 } },
               //      { $sample: { size: 1 } }
               // ])
               let data: IProduct[] = await db.collection('Products')
                    .aggregate([
                         // { $match: { mainCategory: 'apoteka' } },
                         { $match: { isActive: true } },
                         { $sample: { size: 10 } }])
                    .toArray()
               return data
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getRandomProductsFromManufacturerURL = async (manufacturerURL: string) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')
               // Get one random document from the mycoll collection.
               //db.mycoll.aggregate([{ $sample: { size: 1 } }])
               // Get one random document matching {a: 10} from the mycoll collection.
               // db.mycoll.aggregate([
               //      { $match: { a: 10 } },
               //      { $sample: { size: 1 } }
               // ])
               let data: IProduct[] = await db.collection('Products')
                    .find({ manufacturerURL: manufacturerURL, isActive: true })
                    .limit(10)
                    .toArray()
               return data
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getAllMainCategories = async () => {

          const client = new MongoClient(process.env.MONGODB_URI!);

          try {
               await client.connect();
               const db = client.db('DAR_DB');
               const mainCategories = await db.collection('Products').distinct('mainCategory')
               return mainCategories;
          } catch (error: any) {
               console.error('Error fetching main categories:', error);
               return { message: error.message };
          } finally {
               await client.close();
          }
     }

     const getAllLogos = async () => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')
               let data: IProduct[] = await db.collection('LogoURLs').find().toArray()
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
               let product: IProduct = await db.collection('Products').findOne({ _id: new ObjectId(_id), isActive: true })
               return product
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getProductsByManufacturer = async (manufacturerURL: string) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products')
                    .find({ manufacturerURL: { $regex: `${manufacturerURL}` }, isActive: true }).toArray()
               //.skip(10 * (loadedParts - 1)) // Adjust the skip based on loadedParts
               //                 .limit(10)
               //              .toArray()

               return products
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getProductsByNameAndOrManufacturer = async (searchTerm: any) => {

          const searchTermArray = searchTerm.split(" ")

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products')
                    .find({
                         $or: [
                              { "name": { $regex: `${searchTermArray[0]}`, $options: 'i' } },
                              { "manufacturer": { $regex: `${searchTermArray[0]}`, $options: 'i' } },
                              { "name": { $regex: `${searchTermArray[1]}`, $options: 'i' } },
                              { "manufacturer": { $regex: `${searchTermArray[1]}`, $options: 'i' } }
                         ],
                         $and: [{ isActive: true }]
                    }
                    ).toArray()

               return products
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getProductsByDiscount = async () => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products')
                    .find({ discount: true, isActive: true })
                    .toArray()

               return products
          } catch (error: any) {
               return { message: error.message }
          } finally {
               await client.close();
          }
     }

     const getLimitedProductsByMainCategory = async (mainCategory: string) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products')
                    .find({ mainCategory: `${mainCategory}`, isActive: true }).toArray()
               //.skip(10 * (loadedParts - 1)) // Adjust the skip based on loadedParts
               //                 .limit(10)
               //              .toArray()
               return products
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getProductsByMainCategoryMidCategory = async (mainCategory: string, midCategory: string) => {

          const client: any = (await MongoClient.connect(process.env.MONGODB_URI!))
          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products').
                    find({ mainCategory: mainCategory, midCategory: midCategory, isActive: true }).toArray()
               //.skip(10 * (loadedParts - 1)) // Adjust the skip based on loadedParts
               //                 .limit(10)
               //              .toArray()
               return products
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getProductsByMainCategoryAndManufacturer = async (mainCategory: string, manufacturerURL: string) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')

               let products: IProduct[] = await db.collection('Products').
                    find({
                         mainCategory: { $regex: new RegExp(`^${mainCategory}$`, 'i') },
                         manufacturerURL: { $regex: new RegExp(`^${manufacturerURL}$`, 'i') },
                         isActive: true
                    }).toArray()
               //.skip(10 * (loadedParts - 1)) // Adjust the skip based on loadedParts
               //                 .limit(10)
               //              .toArray()

               return products
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getProductsByMainCategoryMidCategorySubCategory = async (mainCategory: string, midCategory: string, subCategory: string) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products')
                    .find({ mainCategory: mainCategory, midCategory: midCategory, subCategory: subCategory, isActive: true }).toArray()
               //.skip(10 * (loadedParts - 1)) // Adjust the skip based on loadedParts
               //                 .limit(10)
               //              .toArray()
               return products
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getAllManufacturers = async (): Promise<string[]> => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               await client.connect();
               const db = client.db('DAR_DB');
               const productsCollection = db.collection('Products');

               const manufacturers: string[] = await new Promise((resolve, reject) => {
                    productsCollection.distinct("manufacturer", (error: any, manufacturers: string[]) => {
                         if (error) {
                              reject(error);
                         } else {
                              resolve(manufacturers);
                         }
                    });
               });
               return manufacturers;
          } catch (error) {
               return [];
          } finally {
               client.close();
          }
     }

     const getNewProducts = async () => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products')
                    .find({ newArrival: true, isActive: true })
                    // .limit(10)
                    .toArray()

               return products
          } catch (error: any) {
               return { message: error.message }
          } finally {
               await client.close();
          }
     }

     const getAllProductsOnPromotion = async () => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('DAR_DB')
               let products: IProduct[] = await db.collection('Products')
                    .find({ promoting: true, promotionText: { $ne: '' }, isActive: true })
                    .toArray()
               return products
          } catch (error: any) {
               return { message: error.message }
          } finally {
               await client.close();
          }
     }

     const getAllPathsForMainCategoryAndManufacturer = async (): Promise<{ params: { mainCategory: string, manufacturerURL: string } }[]> => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!); // Connect to the MongoDB database
          try {
               const db = client.db('DAR_DB'); // Connect to the DAR_DB database
               const productsCollection = db.collection('Products'); // Connect to the Products collection

               const paths = await new Promise<any[]>((resolve, reject) => {
                    productsCollection.aggregate([
                         {
                              $group: {
                                   _id: { mainCategory: "$mainCategory", manufacturerURL: "$manufacturerURL" }
                              }
                         }
                    ]).toArray((error: any, result: any[]) => {
                         if (error) {
                              reject(error);
                         } else {
                              resolve(result);
                         }
                    });
               });

               // Map the results into the structure required for getStaticPaths
               return paths.map((path) => ({
                    params: JSON.parse(JSON.stringify({
                         'mainCategory': path._id.mainCategory.toString(),
                         'manufacturerURL': path._id.manufacturerURL.toString(),
                    }))
               }));
          }
          catch (error: any) {
               console.error(error.message);
               return [];  // Return an empty array in case of error
          }
          finally {
               await client.close();
          }
     }


     return {
          getAllProductsOnPromotion,
          getAllProducts,
          getNewProducts,
          getAllMainCategories,
          getProductById,
          getProductsByNameAndOrManufacturer,
          getProductsByManufacturer,
          getProductsByDiscount,
          getLimitedProductsByMainCategory,
          getProductsByMainCategoryMidCategory,
          getProductsByMainCategoryAndManufacturer,
          getProductsByMainCategoryMidCategorySubCategory,
          getAllLogos,
          getAllManufacturers,
          getRandomProductsFromManufacturerURL,
          getRandomApotekaProducts,
          getAllPathsForMainCategoryAndManufacturer
     }
}