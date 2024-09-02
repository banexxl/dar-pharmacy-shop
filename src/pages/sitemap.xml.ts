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
           <url>
<loc>https://www.apoteka-dar.rs</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/autentifikacija/greska</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/autentifikacija/prijava</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/autentifikacija/verifikacija-zahteva</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/dar-savetnik</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/isporuka-i-placanje</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/o-nama</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/odustanak</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/politika-kolacica</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/politika-privatnosti</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/reklamacije</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/informacije/uslovi-koriscenja</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/kontakt</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/placanje</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://www.apoteka-dar.rs/registracija</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
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