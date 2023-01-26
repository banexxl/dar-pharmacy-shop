
import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";

export default function ProductMeta({ product, isScreenToMedium }: any) {
          return (
                    <ProductMetaWrapper>
                              <Typography variant={isScreenToMedium ? "h6" : "h5"} lineHeight={2}>
                                        {product.name}
                              </Typography>
                              <Typography variant={isScreenToMedium ? "caption" : "body1"}>
                                        RSD: {product.price}
                              </Typography>
                    </ProductMetaWrapper>
          );
}