import { Container, Grid } from "@mui/material";
import ProductCard from "@/components/product-card/product-card";


export default function Products(props: any) {
  const renderProducts = props.data?.map((product: any) => (
    <Grid key={product.id} size={{ xs: 6, sm: 6, md: 4 }} display="flex" flexDirection={'column'} alignItems="center">
      <ProductCard product={product} compact />
    </Grid>
  ));
  return (
    <Container sx={{ paddingBottom: '100px' }}>
      <Grid
        container
        spacing={{ xs: 1.5, sm: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
