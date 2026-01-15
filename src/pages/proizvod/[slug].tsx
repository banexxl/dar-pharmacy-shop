import AppDrawer from '@/components/navbar/drawer/drawer'
import ProductDetails from '@/components/product-details/product-details'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import IProduct from '@/interfaces/product/product.interface'
import { ProductsServices } from '@/services/product.services'
import theme from '@/styles/theme'
import { Container, Stack, ThemeProvider } from '@mui/material'
import { _id } from '@next-auth/mongodb-adapter'
import React from 'react'
import { Seo } from '@/components/seo'
import { generateProductStructuredData, generateBreadcrumbStructuredData, buildCanonicalUrl } from '@/utils/seo-utils'

type SingleProductProps = {
     product: IProduct
}

const SingleProduct = (props: SingleProductProps) => {
     const { product } = props;
     
     const productUrl = buildCanonicalUrl('proizvod', product.slug);
     const productImage = product.imageURL || '/images/home-page/apotekaDar.jpg';
     
     // Generate breadcrumbs
     const breadcrumbs = [
          { name: 'Početna', url: buildCanonicalUrl() },
          { name: 'Proizvodi', url: buildCanonicalUrl('proizvodi') },
     ];
     
     if (product.category) {
          breadcrumbs.push({ 
               name: product.category, 
               url: buildCanonicalUrl('proizvodi', product.category.toLowerCase().replace(/\s+/g, '-')) 
          });
     }
     
     breadcrumbs.push({ name: product.name, url: productUrl });
     
     // Generate structured data (use original imageURL, function will handle URL conversion)
     const productStructuredData = generateProductStructuredData({
          name: product.name,
          description: product.description,
          imageURL: product.imageURL || '/images/home-page/apotekaDar.jpg',
          price: product.price,
          slug: product.slug,
          manufacturer: product.manufacturer,
          availableStock: product.availableStock,
          category: product.category
     });
     
     const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
     
     // Generate SEO description
     const seoDescription = product.description 
          ? (product.description.length > 160 
               ? product.description.substring(0, 157) + '...' 
               : product.description)
          : `Kupite ${product.name} u Apoteci DAR Kragujevac. ${product.manufacturer ? `Proizvođač: ${product.manufacturer}. ` : ''}Prirodni proizvodi za zdravlje i lepotu.`;

     return (
          <ThemeProvider theme={theme}>
               <Seo
                    title={product.name}
                    description={seoDescription}
                    image={productImage}
                    url={productUrl}
                    keywords={`${product.name}${product.manufacturer ? `, ${product.manufacturer}` : ''}${product.category ? `, ${product.category}` : ''}`}
                    type="product"
                    structuredData={[productStructuredData, breadcrumbStructuredData]}
               />
               <Container

                    maxWidth="xl"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <ProductDetails discount={props.product.discount} _id={props.product._id} availableStock={props.product.availableStock} category={props.product.category} description={props.product.description}
                                   imageURL={props.product.imageURL} ingredients={props.product.ingredients} instructions={props.product.instructions} name={props.product.name}
                                   price={props.product.price} quantity={props.product.quantity} warning={props.product.warning}
                                   manufacturer={props.product.manufacturer} quantityUnit={props.product.quantityUnit}
                                   mediaURLs={props.product.mediaURLs} discountAmount={props.product.discountAmount}
                                   slug={props.product.slug} promotionText={props.product.promotionText} />

                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>
          </ThemeProvider>
     )

}

export default SingleProduct

export async function getServerSideProps(context: any) {
     const { slug } = context.params;
     const { product, error } = await ProductsServices().getProductBySlug(slug);

     if (!product || error) {
          return { notFound: true }; // ✅ proper 404 for non-indexable products
     }

     if (!product) {
          return { notFound: true };
     }

     return {
          props: {
               product: JSON.parse(JSON.stringify(product)),
          },
     };
}
