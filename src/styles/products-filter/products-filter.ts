import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const ProductsFilterContainer = styled(Box)(({ theme }) => ({
          marginTop: '100px',
          minHeight: '100vh',
          gap: '10px',
          width: '99%',
          [theme.breakpoints.up("md")]: {
                    padding: "5px 5px",
                    borderRadius: '10px'
          },
          display: "flex",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: Colors.secondary,
}));

export const ProductsFilters = styled(Box)(({ theme }) => ({
          height: '100%',
          width: '40%',
          [theme.breakpoints.down("md")]: {
                    display: 'none'
          },
          [theme.breakpoints.up("md")]: {
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '10px',
          },
          justifyContent: 'flex-start',
          flexDirection: 'column',
          overflow: "hidden",
          background: Colors.white,
}));

export const FilterTitleBox = styled(Box)(({ theme }) => ({
          height: '10%',
          width: '100%',
          borderRadius: '10px',
          paddingTop: '20px',
          marginBottom: '20px',
          [theme.breakpoints.down("md")]: {
                    display: 'none'
          },
          [theme.breakpoints.up("md")]: {
                    display: 'flex',

          },
          justifyContent: "center",
          alignItems: "center",
}));

export const FilterCategoryAccordionBox = styled(Box)(({ theme }) => ({
          height: '40%',
          width: '100%',
          [theme.breakpoints.down("md")]: {
                    display: 'none'
          },
          [theme.breakpoints.up("md")]: {
                    display: 'flex',
          },
          justifyContent: "center",
          alignItems: "center",
          background: Colors.dove_gray,
}));

export const FilteredProducts = styled(Box)(({ theme }) => ({
          height: '100%',
          [theme.breakpoints.down("md")]: {
                    padding: "20px",
                    width: '1000%',
                    borderRadius: '20px'
          },
          [theme.breakpoints.up("md")]: {
                    padding: "20px",
                    width: '100%',
                    borderRadius: '20px'
          },
          display: "flex",
          flexDirection: 'column',
          justifyContent: "start",
          alignItems: "center",
          overflow: "hidden",
          background: Colors.light_gray,
}));

export const FilteredProductsTitle = styled(Box)(({ theme }) => ({
          height: '1%',
          [theme.breakpoints.down("md")]: {
                    padding: "20px 20px",
                    width: '100%',
                    borderRadius: '20px'
          },
          [theme.breakpoints.up("md")]: {
                    padding: "20px 20px",
                    width: '100%',
                    borderRadius: '20px'
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: Colors.light_gray,
}));

export const PriceRangeBox = styled(Box)(({ theme }) => ({
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          margin: '20px 0 20px 0'
}));
