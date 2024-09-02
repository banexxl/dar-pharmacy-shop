import IProduct from "@/interfaces/product/product.interface";
import { ProductsServices } from "@/services/product.services";

const revalidate = 60 * 60 * 1;// 1 hour

function generateSiteMap(products: IProduct[]) {
     return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     ${products
               .map((product: IProduct) => {
                    return `
                    <url>
                    <loc>${`${process.env.BASE_URL}/proizvod/${product._id}`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                    </url>
                    `;
               })
               .join('')
          }
   </urlset>
 `;
}

function SiteMap() {
     // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps(context: any) {
     // We make an API call to gather the URLs for our site
     const products = await ProductsServices().getAllProducts() as IProduct[];


     // We generate the XML sitemap with the posts data
     const sitemap = generateSiteMap(products);

     context.res.setHeader('Content-Type', 'text/xml');
     // we send the XML to the browser
     context.res.write(sitemap);
     context.res.end();

     return {
          props: {},
     };
}

export default SiteMap;