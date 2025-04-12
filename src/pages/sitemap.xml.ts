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
                    <loc>${`${process.env.BASE_URL}/proizvod/${product.slug}`}</loc>
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
<url>
<loc>https://apoteka-dar.rs/proizvodi/homeopatija</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/abela-pharm</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/alpen-pharma-doo</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/alpenkrauter</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/amer</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/aronica</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/azeta-bio</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/bach-flower-remedies</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/bajkal</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/beopanax-doo</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/bio-solutions</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/bioguard</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/catalysis-sl</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/colloid</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/cortex-labs</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/dmg</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/dimas</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/dr-werner-pharma</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/eco-boom</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/fantastik-fungi</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/farma-derma</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/farmas-mn</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/fitaky</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/galenika</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/gamarde</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/gana-kozmetika</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/gavez</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/gloria</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/granum</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/health-and-more</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/hedera-vita</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/herbalab</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/herbs-honey</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/himalaya</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/innventa-pharm</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/lama</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/lv-pharm</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/laboratorie-acm-france</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/lander</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/magni-food</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/majana</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/maxmedica</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/medical-plants</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/meli-plants</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/moj-caj</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/ntc-pharma</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/nemet-palic</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/now-foods</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/okp</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/olimp-sport</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/pharma-medica</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/pharma-development</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/pharmaceuticals</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/phyto</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/plantacare</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/priorda-na-dar</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/rabenhorst</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/rhinosan</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/rulek</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/ruska-biljna-apoteka-organic</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/salus</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/shulke</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/sofija</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/suplemania</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/todoxin</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/vitalgrana</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/viviscal</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/weleda</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/zao-prirodna-sminka</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://apoteka-dar.rs/proizvodi/zodeks-caj</loc>
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