import Head from 'next/head';
import PropTypes from 'prop-types';

const BASE_URL = process.env.BASE_URL || 'https://apoteka-dar.rs';

type SeoProps = {
     title?: string;
     description?: string;
     keywords?: string;
     image?: string;
     url?: string;
     structuredData?: object | object[];
     noindex?: boolean;
     type?: 'website' | 'product' | 'article';
}

export const Seo = (props: SeoProps) => {
     const { title, description, keywords, image, url, structuredData, noindex, type = 'website' } = props;

     const fullTitle = title ? (title.includes('|') ? title : `${title} | Apoteka DAR Kragujevac`) : 'Apoteka DAR Kragujevac';
     const fullDescription = description || 'Apoteka DAR Kragujevac nudimo prirodne proizvode za zdravlje i lepotu. Posetite nas i uverite se u kvalitet naših proizvoda.';
     const fullKeywords = keywords ?
          `${keywords}, apoteka, DAR, Kragujevac, prirodni proizvodi, zdravlje, nega, lek, rak, tumor, cancer, prirodna kozmetika, kozmetika, bebi kozmetika, bebi prirodna kozmetika, bebi nega, bebi, nega, zdravlje, zdrava hrana, zdrava ishrana, zdrav zivot, zdrav zivotni stil`
          : 'apoteka, DAR, Kragujevac, prirodni proizvodi, zdravlje, nega, lek, rak, tumor, cancer, prirodna kozmetika, kozmetika, bebi kozmetika, bebi prirodna kozmetika, bebi nega, bebi, nega, zdravlje, zdrava hrana, zdrava ishrana, zdrav zivot, zdrav zivotni stil';

     const fullImage = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : `${BASE_URL}/images/home-page/apotekaDar.jpg`;
     const fullUrl = url ? (url.startsWith('http') ? url : `${BASE_URL}${url}`) : BASE_URL;

     // Prepare structured data
     const structuredDataArray = structuredData
          ? (Array.isArray(structuredData) ? structuredData : [structuredData])
          : [];

     return (
          <Head>
               <title>{fullTitle}</title>
               <meta name="description" content={fullDescription} />
               <meta name="keywords" content={fullKeywords} />
               <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
               <link rel="canonical" href={fullUrl} />

               {/* Open Graph / Facebook */}
               <meta property="og:type" content={type} />
               <meta property="og:title" content={fullTitle} />
               <meta property="og:description" content={fullDescription} />
               <meta property="og:image" content={fullImage} />
               <meta property="og:url" content={fullUrl} />
               <meta property="og:site_name" content="Apoteka DAR Kragujevac" />
               <meta property="og:locale" content="sr_RS" />

               {/* Twitter */}
               <meta name="twitter:card" content="summary_large_image" />
               <meta name="twitter:title" content={fullTitle} />
               <meta name="twitter:description" content={fullDescription} />
               <meta name="twitter:image" content={fullImage} />

               {/* Structured Data (JSON-LD) */}
               {structuredDataArray.map((data, index) => (
                    <script
                         key={index}
                         type="application/ld+json"
                         dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
                    />
               ))}
          </Head>
     );
};

Seo.propTypes = {
     title: PropTypes.string,
     description: PropTypes.string,
     keywords: PropTypes.string,
     image: PropTypes.string,
     url: PropTypes.string,
     structuredData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
     noindex: PropTypes.bool,
     type: PropTypes.oneOf(['website', 'product', 'article']),
};
