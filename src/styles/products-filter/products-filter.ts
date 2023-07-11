import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const ProductsFilterContainer = styled(Box)(({ theme }) => ({
          marginTop: '100px',
          height: '100vh',
          width: '90%',
          [theme.breakpoints.up("md")]: {
                    padding: "20px 20px",
                    borderRadius: '20px'
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
          backgroundColor: Colors.secondary,
          borderRadius: '10px',
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
                    padding: "20px 20px",
                    width: '1000%',
                    borderRadius: '20px'
          },
          [theme.breakpoints.up("md")]: {
                    padding: "0px 20px",
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
          background: Colors.secondary,
}));
