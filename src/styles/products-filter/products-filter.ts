import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const ProductsFilterContainer = styled(Box)(({ theme }) => ({
     marginTop: '100px',
     minHeight: '100vh',
     gap: '10px',
     width: '99%',
     // borderRadius: '10px',
     [theme.breakpoints.up("md")]: {
          padding: "5px 5px",
     },
     display: "flex",
     justifyContent: "flex-start",
     overflow: "hidden",
     background: Colors.primary.lighter,
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
     padding: "20px",
     width: '100%',
     borderRadius: '20px',
     display: "flex",
     flexDirection: 'column',
     justifyContent: "start",
     alignItems: "center",
     overflow: "hidden",
     background: Colors.light_gray,
}));

export const FilteredProductsTitle = styled(Box)(({ theme }) => ({
     textAlign: 'center',
     display: "flex",
     justifyContent: "center",
     height: '20%',
     [theme.breakpoints.down("md")]: {
          width: '350px'
     },
     [theme.breakpoints.up("md")]: {
          width: '600px',
     },
     // padding: "20px 20px",
     // [theme.breakpoints.up("md")]: {
     //           padding: "20px 20px",
     //           borderRadius: '20px'
     // },
     // transform: 'translateX(50%)',
     marginBottom: '20px',
     color: Colors.primary.main
}));

export const PriceRangeBox = styled(Box)(({ theme }) => ({
     display: "flex",
     flexDirection: 'column',
     justifyContent: "center",
     alignItems: "center",
     margin: '20px 0 20px 0'
}));

export const PriceRangeFilterButton = styled(Box)(({ theme }) => ({
     display: "flex",
     borderRadius: '10px',
     flexDirection: 'column',
     justifyContent: "center",
     alignItems: "center",
     margin: '20px 0 20px 0',
     background: Colors.primary.lighter,
     ":hover": {
          cursor: 'pointer',
          background: Colors.primary.light,
     }
}));   
