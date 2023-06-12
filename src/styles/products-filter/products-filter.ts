import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const ProductsFilterContainer = styled(Box)(({ theme }) => ({
          marginTop: '100px',
          height: '100vh',
          width: '100%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background: Colors.secondary,
}));

export const ProductsFilters = styled(Box)(({ theme }) => ({
          height: '100%',
          width: '20%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          display: "flex",
          flexDirection: 'column',
          justifyContent: "start",
          alignItems: "center",
          overflow: "hidden",
          background: Colors.white,
}));

export const FilterTitleBox = styled(Box)(({ theme }) => ({
          height: '10%',
          width: '100%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: Colors.primary,
}));

export const FilterPriceAccordionBox = styled(Box)(({ theme }) => ({
          height: '10%',
          width: '100%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: Colors.secondary,
}));

export const FilterCategoryAccordionBox = styled(Box)(({ theme }) => ({
          height: '40%',
          width: '100%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: Colors.dove_gray,
}));

export const FilteredProducts = styled(Box)(({ theme }) => ({
          height: '100%',
          width: '80%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          display: "flex",
          flexDirection: 'column',
          justifyContent: "start",
          alignItems: "center",
          overflow: "hidden",
          background: Colors.light_gray,
}));

export const FilteredProductsTitle = styled(Box)(({ theme }) => ({
          height: '10%',
          width: '100%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: Colors.secondary,
}));
