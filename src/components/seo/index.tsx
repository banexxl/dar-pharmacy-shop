import Head from 'next/head';
import PropTypes from 'prop-types';

type SeoProps = {
     title: string;
     description: string;
     keywords: string;
     image?: string;
     url: string;
}

export const Seo = (props: SeoProps) => {
     const { title, description, keywords, image, url } = props;

     const fullTitle = title ? `${title} | Apoteka DAR` : 'Apoteka DAR';
     const fullDescription = description || 'Apoteka DAR Kragujevac offers a wide range of natural products.';
     const fullKeywords = keywords ? `${keywords}, apoteka, dar, kragujevac` : 'apoteka, dar, kragujevac, natural products, health';
     const fullImage = image || '/public/images/home-page/apotekaDar.jpg';
     const fullUrl = url || 'https://www.apoteka-dar.rs';

     return (
          <Head>
               <title>{fullTitle}</title>
               <meta name="description" content={fullDescription} />
               <meta name="keywords" content={fullKeywords} />
               <meta property="og:title" content={fullTitle} />
               <meta property="og:description" content={fullDescription} />
               <meta property="og:image" content={fullImage} />
               <meta property="og:url" content={fullUrl} />
               <meta name="twitter:card" content="summary_large_image" />
               <meta name="twitter:title" content={fullTitle} />
               <meta name="twitter:description" content={fullDescription} />
               <meta name="twitter:image" content={fullImage} />
               <meta name="robots" content="index, follow" />
               <link rel="canonical" href={fullUrl} />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
     );
};

Seo.propTypes = {
     title: PropTypes.string,
     description: PropTypes.string,
     keywords: PropTypes.string,
     image: PropTypes.string,
     url: PropTypes.string,
};
