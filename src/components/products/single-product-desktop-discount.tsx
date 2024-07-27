import { Suspense, useEffect, useState } from "react"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductDiscountSticker, ProductFavButton, ProductImage } from "../../styles/product/single-product";
import { Alert, Card, CardContent, Grow, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta";
import {
     Unstable_Popup as BasePopup,
     PopupChildrenProps,
} from '@mui/base/Unstable_Popup';
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { useTranslation } from "next-i18next";
import { PopupBody } from "@/styles/product/share-product";

export default function SingleProductDesktop({ product, isScreenToMedium }: any) {

     const { t } = useTranslation();
     const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails)
     const [addedToCartAlert, setAddedToCartAlert] = useState(false)
     const [showOptions, setShowOptions] = useState(false);
     let buttonLoading: boolean = false
     const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
     const [open, setOpen] = useState(false);
     const dispatch = useDispatch();
     console.log('isScreenToMedium', isScreenToMedium);
     console.log('showOptions', showOptions);


     const handleMouseEnter = () => {
          setShowOptions(true);
     };
     const handleMouseLeave = () => {
          setShowOptions(false);
     };

     const callAlert = () => {
          setAddedToCartAlert(true)
          const timeId = setTimeout(() => {
               // After X seconds set the show value to false
               buttonLoading = true
               setAddedToCartAlert(false)
          }, 500)

          return () => {
               buttonLoading = false
               clearTimeout(timeId)
          }
     }

     return (
          <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <ProductDiscountSticker>
                    <ProductImage src={product.imageURL} />
               </ProductDiscountSticker>
               <ProductFavButton isfav={0}>
                    <Tooltip placement="left" title={"Dodaj u listu želja"}>
                         <FavoriteIcon />
                    </Tooltip>
               </ProductFavButton>
               {(showOptions || isScreenToMedium) && (
                    <ProductAddToCart show={showOptions.toString()} loading={buttonLoading} onClick={() => {
                         callAlert()
                         dispatch(addToCart(product))
                    }}
                    >
                         Dodaj u korpu
                    </ProductAddToCart>
               )}

               <ProductActionsWrapper show={showOptions.toString() || isScreenToMedium}>
                    <Stack direction={isScreenToMedium ? "row" : "column"}>
                         <ProductActionButton>
                              <Tooltip placement="left" title={"Podeli proizvod"} ref={setAnchor} onClick={() => setOpen((o) => !o)} >
                                   <BasePopup anchor={anchor} open={open} withTransition>
                                        <Grow
                                             in={open}
                                             style={{ transformOrigin: '0 0 0' }}
                                             {...(open ? { timeout: 1000 } : {})}
                                        >
                                             <Card>
                                                  <CardContent>
                                                       <FacebookIcon />
                                                       <InstagramIcon />
                                                       <TwitterIcon />
                                                       <LinkedInIcon />
                                                  </CardContent>
                                             </Card>
                                        </Grow>
                                   </BasePopup>
                              </Tooltip>
                         </ProductActionButton>
                         <ProductActionButton onClick={() => showProductDetailDialog()}>
                              <Tooltip placement="left" title={"Detalji"}>
                                   <FitScreenIcon color="primary" />
                              </Tooltip>
                         </ProductActionButton>
                    </Stack>
               </ProductActionsWrapper>
               <ProductMeta product={product} />
               <ProductDetailDialog product={product} />
               {addedToCartAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'fixed', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                         Proizvod dodat u korpu
                    </Alert>
               )}
          </Product>
     );
}
