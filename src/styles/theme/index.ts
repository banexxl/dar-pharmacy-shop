import { createTheme, Theme } from "@mui/material/styles";
import { darken, lighten } from "polished";
import { color, keyframes } from '@mui/system'

export const DrawerWidth = 250;
const shineKeyframe = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const expandKeyframe = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const wiggleKeyframe = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-1deg);
  }
  75% {
    transform: rotate(1deg);
  }
`;

export const Colors = {
     primary: {
          main: "#EF4444",
          dark: "#DC2626",
          darker: "#B91C1C",
          light: "#F87171",
          lighter: "#FEE2E2",
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D"
     },
     secondary: {
          main: "#059669", // Professional emerald green for pharmacy feel
          dark: "#047857",
          darker: "#065F46",
          light: "#10B981",
          lighter: "#D1FAE5",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669", // Secondary main
          700: "#047857",
          800: "#065F46",
          900: "#064E3B"
     },
     accent: {
          main: "#7C3AED", // Modern purple accent
          light: "#8B5CF6",
          dark: "#6D28D9",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95"
     },
     neutral: {
          50: "#FAFAFA", // Softer grays for professional look
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827"
     },
     success: {
          main: "#059669", // Matches secondary for consistency
          light: "#10B981",
          dark: "#047857",
          bg: "#ECFDF5"
     },
     warning: {
          main: "#D97706", // More professional orange
          light: "#F59E0B",
          dark: "#B45309",
          bg: "#FFFBEB"
     },
     error: {
          main: "#DC2626", // More professional red
          light: "#EF4444",
          dark: "#B91C1C",
          bg: "#FEF2F2"
     },
     info: {
          main: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
          bg: "#EFF6FF"
     },
     // Legacy support (keeping old names for backward compatibility)
     danger: "#EF4444",
     dark: "#1F2937",
     muted: "#6B7280",
     border: "#E5E7EB",
     inverse: "#111827",
     shaft: "#374151",
     link: '#3B82F6',
     ///////////////
     // Grays (updated)
     ///////////////
     dim_grey: "#6B7280",
     dove_gray: "#D1D5DB",
     body_bg: "#F9FAFB",
     light_gray: "#F3F4F6",
     ///////////////
     // Solid Color
     ///////////////
     white: "#FFFFFF",
     black: "#000000",
};

const theme: Theme = createTheme({
     palette: {
          primary: {
               main: Colors.primary.main,
               light: Colors.primary.light,
               dark: Colors.primary.dark,
          },
          secondary: {
               main: Colors.secondary.main,
               light: Colors.secondary.light,
               dark: Colors.secondary.dark,
          },
          error: {
               main: Colors.error.main,
               light: Colors.error.light,
               dark: Colors.error.dark,
          },
          warning: {
               main: Colors.warning.main,
               light: Colors.warning.light,
               dark: Colors.warning.dark,
          },
          info: {
               main: Colors.info.main,
               light: Colors.info.light,
               dark: Colors.info.dark,
          },
          success: {
               main: Colors.success.main,
               light: Colors.success.light,
               dark: Colors.success.dark,
          },
          grey: {
               50: Colors.neutral[50],
               100: Colors.neutral[100],
               200: Colors.neutral[200],
               300: Colors.neutral[300],
               400: Colors.neutral[400],
               500: Colors.neutral[500],
               600: Colors.neutral[600],
               700: Colors.neutral[700],
               800: Colors.neutral[800],
               900: Colors.neutral[900],
          },
          background: {
               default: Colors.neutral[50],
               paper: Colors.white,
          },
          text: {
               primary: Colors.neutral[900],
               secondary: Colors.neutral[600],
          },
     },
     typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
               fontSize: '2.5rem',
               fontWeight: 700,
               lineHeight: 1.2,
               letterSpacing: '-0.02em',
               color: Colors.neutral[900],
          },
          h2: {
               fontSize: '2rem',
               fontWeight: 600,
               lineHeight: 1.3,
               letterSpacing: '-0.01em',
               color: Colors.neutral[900],
          },
          h3: {
               fontSize: '1.75rem',
               fontWeight: 600,
               lineHeight: 1.3,
               color: Colors.neutral[900],
          },
          h4: {
               fontSize: '1.5rem',
               fontWeight: 600,
               lineHeight: 1.4,
               color: Colors.neutral[900],
          },
          h5: {
               fontSize: '1.25rem',
               fontWeight: 600,
               lineHeight: 1.4,
               color: Colors.neutral[900],
          },
          h6: {
               fontSize: '1.125rem',
               fontWeight: 600,
               lineHeight: 1.4,
               color: Colors.neutral[900],
          },
          body1: {
               fontSize: '1rem',
               lineHeight: 1.6,
               color: Colors.neutral[700],
          },
          body2: {
               fontSize: '0.875rem',
               lineHeight: 1.5,
               color: Colors.neutral[600],
          },
          button: {
               fontSize: '0.875rem',
               fontWeight: 600,
               textTransform: 'none' as const,
               letterSpacing: '0.02em',
          },
     },
     shape: {
          borderRadius: 12,
     },
     spacing: 8,

     components: {
          // ========================================
          // CUSTOM STYLED COMPONENT OVERRIDES
          // ========================================

          // AppBar Components (from styles/appbar)
          MuiAppBar: {
               styleOverrides: {
                    root: {
                         '&.AppbarContainer': {
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                              alignItems: 'center',
                              padding: '0 10% 0',
                              position: 'fixed',
                              left: '0px',
                              top: '0px',
                              backgroundColor: Colors.primary.lighter,
                              opacity: '0.8',
                              width: '80%',
                              zIndex: 1000,
                         },
                         '&.AppbarContainerMobile': {
                              width: '90%',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              position: 'fixed',
                              zIndex: '1000',
                         },
                    },
               },
          },

          MuiTextField: {
               styleOverrides: {
                    root: {
                         '&.SearchField': {
                              '& .MuiInputLabel-root': {
                                   color: Colors.primary.lighter,
                              },
                              '& .MuiInput-root': {
                                   fontSize: '1rem',
                                   '@media (min-width: 900px)': {
                                        fontSize: '2rem',
                                   },
                                   color: Colors.primary.lighter,
                              },
                              '& .MuiInput-root::before': {
                                   borderBottom: `1px solid ${Colors.secondary[50]}`,
                              },
                              padding: "0 0 0 40px",
                         },
                         // Subscribe TextField
                         '&.SubscribeTf': {
                              '& .MuiOutlinedInput-root': {
                                   backgroundColor: Colors.white,
                                   '& fieldset': {
                                        borderColor: Colors.primary.lighter,
                                   },
                                   '&:hover fieldset': {
                                        borderColor: Colors.primary.main,
                                   },
                                   '&.Mui-focused fieldset': {
                                        borderColor: Colors.primary.main,
                                   },
                              },
                         },
                    },
               },
          },

          // Box Components for Layouts (using MuiContainer for styled boxes)
          MuiContainer: {
               styleOverrides: {
                    root: {
                         // Banner Container
                         '&.BannerContainer': {
                              width: "100%",
                              height: "100%",
                              background: Colors.secondary[50],
                         },
                         // Banner Text Content
                         '&.BannerTextContent': {
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              padding: '25px',
                         },
                         // Product Container
                         '&.Product': {
                              display: 'flex',
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "column",
                              '@media (min-width: 900px)': {
                                   position: "relative",
                              },
                         },
                         // Product Dropdown
                         '&.ProductDropdown': {
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '5px',
                              margin: '20px 0px',
                              opacity: 0,
                              transform: 'translateY(100%)',
                              transition: 'all 0.3s ease',
                              '&.isVisible': {
                                   opacity: 1,
                                   transform: 'translateY(0)',
                              },
                         },
                         // Cart Wrapper
                         '&.CartWrapper': {
                              display: "flex",
                              padding: '8px',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '20px'
                         },
                         // Cart Product
                         '&.CartProduct': {
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                         },
                         // Icon Box
                         '&.IconBox': {
                              display: 'flex',
                              flexDirection: 'row',
                              gap: '2px',
                         },
                         // Search Box Container
                         '&.SearchBoxContainer': {
                              position: 'relative',
                              width: '100%',
                              maxWidth: '500px',
                              margin: '0 auto',
                         },
                         // Search Results Box
                         '&.SearchResultsBox': {
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              right: 0,
                              background: Colors.white,
                              border: `1px solid ${Colors.neutral[300]}`,
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                              zIndex: 1000,
                              maxHeight: '400px',
                              overflowY: 'auto',
                         },
                         // NavBar action containers
                         '&.ActionIconsContainerDesktop': {
                              display: 'flex',
                              alignItems: 'center',
                              gap: '16px',
                         },
                         '&.ActionIconsContainerMobile': {
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                         },
                         // Cart Counter
                         '&.CartCounter': {
                              position: 'relative',
                              color: Colors.white,
                              cursor: 'pointer',
                              '&::after': {
                                   content: 'attr(data-count)',
                                   position: 'absolute',
                                   top: '-8px',
                                   right: '-8px',
                                   background: Colors.error.main,
                                   color: Colors.white,
                                   borderRadius: '50%',
                                   width: '18px',
                                   height: '18px',
                                   display: 'flex',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                                   fontSize: '11px',
                                   fontWeight: 'bold',
                              },
                         },
                         // Wishlist Wrapper
                         '&.WishListWrapper': {
                              display: "flex",
                              padding: '32px',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '20px'
                         },
                         // Wishlist Product
                         '&.WishlistProduct': {
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                         },
                         // Blog Card
                         '&.BlogCardContainer': {
                              display: 'flex',
                              flexDirection: 'column',
                              padding: '16px',
                              border: `1px solid ${Colors.neutral[300]}`,
                              borderRadius: '12px',
                              backgroundColor: Colors.white,
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                   transform: 'translateY(-4px)',
                                   boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                              },
                         },
                         '&.BlogCardImageContainer': {
                              width: '100%',
                              height: '200px',
                              borderRadius: '8px',
                              backgroundColor: Colors.neutral[100],
                              marginBottom: '12px',
                              overflow: 'hidden',
                         },
                         // Carousel Styles
                         '&.StyledCarouselLogoBox': {
                              padding: '20px 0',
                              backgroundColor: Colors.white,
                         },
                         '&.StyledCarouselBox': {
                              padding: '20px',
                              backgroundColor: Colors.neutral[50],
                              margin: '20px 0',
                              '& .react-multi-carousel-list': {
                                   padding: '10px 0',
                              },
                         },
                         '&.CarouselImgBox': {
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '10px',
                         },
                         '&.CarouselLogoImgBox': {
                              width: '100%',
                              height: '100px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              objectFit: 'contain',
                         },
                         '&.CarouselOnlyImgBox': {
                              width: '100%',
                              height: '200px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              overflow: 'hidden',
                              borderRadius: '8px',
                         },
                         // Products Filter
                         '&.ProductsFilterContainer': {
                              display: 'flex',
                              gap: '20px',
                              padding: '20px',
                              '@media (max-width: 900px)': {
                                   flexDirection: 'column',
                              },
                         },
                         '&.ProductsFilters': {
                              flex: '0 0 250px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '16px',
                              '@media (max-width: 900px)': {
                                   flex: 'none',
                              },
                         },
                         '&.FilteredProducts': {
                              flex: '1',
                              display: 'flex',
                              flexDirection: 'column',
                         },
                         '&.FilterTitleBox': {
                              padding: '16px',
                              backgroundColor: Colors.primary.lighter,
                              borderRadius: '8px',
                              marginBottom: '16px',
                         },
                         '&.FilterCategoryAccordionBox': {
                              backgroundColor: Colors.white,
                              border: `1px solid ${Colors.neutral[300]}`,
                              borderRadius: '8px',
                              overflow: 'hidden',
                         },
                         '&.PriceRangeBox': {
                              padding: '16px',
                              backgroundColor: Colors.white,
                              border: `1px solid ${Colors.neutral[300]}`,
                              borderRadius: '8px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '12px',
                         },
                         // Footer Container
                         '&.FooterContainer': {
                              backgroundColor: Colors.primary.lighter,
                              // color: Colors.primary.lighter,
                              padding: '40px 20px',
                              marginTop: 'auto',
                         },
                         // Footer Info Account
                         '&.FooterInfoAccount': {
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              gap: '20px',
                              marginBottom: '30px',
                              '@media (max-width: 768px)': {
                                   flexDirection: 'column',
                              },
                         },
                         // Footer Subscribe
                         '&.FooterSubscribe': {
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '15px',
                              marginBottom: '20px',
                         },
                         // Footer Social
                         '&.FooterSocial': {
                              display: 'flex',
                              justifyContent: 'center',
                              marginBottom: '20px',
                         },
                         // Banner Left Image Content
                         '&.BannerLeftImageContent': {
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              textAlign: 'center',
                              gap: '20px',
                              padding: '40px',
                         },
                         // Banner Right Image Content
                         '&.BannerRightImageContent': {
                              // This is a placeholder for image content
                         },
                    },
               },
          },

          // Typography Components
          MuiTypography: {
               styleOverrides: {
                    root: {
                         fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                         // AppBar Title as h3
                         '&.AppbarTitle': {
                              '@media (max-width: 900px)': {
                                   maxWidth: '250px',
                              },
                              paddingLeft: '4px',
                              fontSize: '1.2rem', // h3 font size
                              color: Colors.primary.main,
                              cursor: 'pointer',
                              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                              fontWeight: 600,
                              lineHeight: 1.3,
                         },
                         // Banner Title
                         '&.BannerTitle': {
                              lineHeight: 1.5,
                              fontSize: '6rem',
                              '@media (max-width: 1200px)': {
                                   fontSize: '4rem',
                              },
                              '@media (max-width: 900px)': {
                                   fontSize: '3rem',
                              },
                              marginBottom: '20px',
                              textAlign: 'center',
                              color: Colors.primary.main,
                              fontWeight: 'bold',
                         },
                         // Banner Description  
                         '&.BannerDescription': {
                              lineHeight: 1.25,
                              letterSpacing: 1.25,
                              marginBottom: '3rem',
                              textAlign: 'center',
                              maxWidth: '600px',
                              '@media (max-width: 900px)': {
                                   lineHeight: 1.15,
                                   letterSpacing: 1.15,
                                   marginBottom: '1.5rem',
                              },
                              color: Colors.neutral[700],
                         },
                         // Blog Card Title
                         '&.BlogCardTitle': {
                              fontSize: '1.25rem',
                              fontWeight: '600',
                              color: Colors.primary.main,
                              marginBottom: '8px',
                              lineHeight: 1.4,
                         },
                         // Blog Card Description
                         '&.BlogCardDescription': {
                              fontSize: '0.875rem',
                              color: Colors.neutral[600],
                              lineHeight: 1.5,
                              marginBottom: '16px',
                         },
                         // Carousel Title
                         '&.CarouselTitle': {
                              fontSize: '1.5rem',
                              fontWeight: '600',
                              color: Colors.primary.main,
                              textAlign: 'center',
                              marginBottom: '20px',
                         },
                         // Carousel Manufacturer
                         '&.CarouselManufacturer': {
                              fontSize: '0.875rem',
                              color: Colors.neutral[600],
                              textAlign: 'center',
                              marginBottom: '8px',
                         },
                         // Products Filter Typography
                         '&.FilteredProductsTitle': {
                              fontSize: '1.5rem',
                              fontWeight: '600',
                              color: Colors.primary.main,
                              marginBottom: '20px',
                         },
                         // Footer Title
                         '&.FooterTitle': {
                              color: Colors.white,
                              fontWeight: 'bold',
                              marginBottom: '15px',
                              fontSize: '1.1rem',
                         },
                         // Footer Item
                         '&.FooterItem': {
                              color: Colors.primary.lighter,
                              lineHeight: 2,
                              cursor: 'pointer',
                              '&:hover': {
                                   color: Colors.white,
                              },
                         },
                         // Copyright
                         '&.Copyright': {
                              color: Colors.primary.lighter,
                              textAlign: 'center',
                              fontSize: '0.9rem',
                              marginTop: '20px',
                         },
                         // Banner Quota Text
                         '&.BannerQuotaText': {
                              color: Colors.primary.main,
                              fontSize: '1.2rem',
                              lineHeight: 1.6,
                              margin: '10px 0',
                              '@media (max-width: 768px)': {
                                   fontSize: '1rem',
                              },
                         },
                    }
               }
          },

          // Paper Component for Image Containers
          MuiPaper: {
               styleOverrides: {
                    root: {
                         // Product Image Container
                         '&.ProductImageContainer': {
                              width: "auto",
                              height: '150px',
                              background: Colors.light_gray,
                              padding: '10px',
                              cursor: 'pointer',
                              transition: 'transform 0.4s',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              '&:hover': {
                                   transform: 'scale(1.1) rotate(0.01deg)'
                              },
                              '& img': {
                                   maxWidth: '100%',
                                   maxHeight: '100%',
                                   objectFit: 'contain',
                              },
                         },
                         // Cart Product Image Container
                         '&.CartProductImageContainer': {
                              borderRadius: '20px',
                              overflow: 'hidden',
                              '@media (min-width: 1536px)': {
                                   width: '100px',
                                   height: '100px',
                              },
                              '@media (min-width: 1200px)': {
                                   width: '200px',
                                   height: '200px',
                              },
                              '@media (min-width: 600px)': {
                                   width: '100px',
                                   height: '100px',
                              },
                              '@media (min-width: 0px)': {
                                   width: '80px',
                                   height: '80px',
                              },
                              '& img': {
                                   width: '100%',
                                   height: '100%',
                                   objectFit: 'cover',
                              },
                         },
                    },
               },
          },

          // Enhanced Button Styles
          MuiButton: {
               styleOverrides: {
                    root: {
                         borderRadius: 8, // More professional rounded corners
                         textTransform: 'none',
                         fontWeight: 600,
                         padding: '12px 24px',
                         fontSize: '0.875rem',
                         boxShadow: 'none',
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                         },
                         '&:active': {
                              transform: 'translateY(0)',
                         },
                         // Banner Shop Button - More professional hero CTA
                         '&.BannerShopButton': {
                              padding: '16px 32px',
                              color: Colors.white,
                              fontWeight: 'bold',
                              fontSize: '1.1rem',
                              borderRadius: 12,
                              background: `linear-gradient(135deg, ${Colors.primary.main} 0%, ${Colors.primary[600]} 100%)`,
                              boxShadow: `0 4px 20px ${Colors.primary.main}30`,
                              '&:hover': {
                                   background: `linear-gradient(135deg, ${Colors.primary[700]} 0%, ${Colors.primary.main} 100%)`,
                                   transform: 'translateY(-3px)',
                                   boxShadow: `0 12px 30px ${Colors.primary.main}40`,
                              },
                         },
                         // Product Action Button - Modern card style
                         '&.ProductAddToCart': {
                              textAlign: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              background: Colors.primary.main,
                              borderRadius: '8px',
                              color: Colors.white,
                              fontWeight: 600,
                              padding: '10px 20px',
                              '&:hover': {
                                   background: Colors.primary.dark,
                                   transform: 'translateY(-2px)',
                                   boxShadow: `0 8px 20px ${Colors.primary.main}30`,
                              },
                         },
                         // Popular Product Add To Cart Button
                         '&.PopularProductAddToCart': {
                              padding: '8px 16px',
                              fontSize: '0.875rem',
                              background: Colors.primary.main,
                              color: Colors.white,
                              borderRadius: '4px',
                              '&:hover': {
                                   background: Colors.primary.dark,
                              },
                              '&:disabled': {
                                   backgroundColor: Colors.dim_grey,
                                   color: Colors.white,
                              },
                         },
                         // Blog Card Button
                         '&.BlogCardButton': {
                              padding: '8px 16px',
                              fontSize: '0.875rem',
                              background: Colors.primary.main,
                              color: Colors.white,
                              '&:hover': {
                                   background: Colors.primary.dark,
                              },
                         },
                         // Price Range Filter Button
                         '&.PriceRangeFilterButton': {
                              width: '100%',
                              padding: '10px',
                              background: Colors.primary.main,
                              color: Colors.white,
                              '&:hover': {
                                   background: Colors.primary.dark,
                              },
                         },
                    },
                    containedPrimary: {
                         background: `linear-gradient(135deg, ${Colors.primary.main} 0%, ${Colors.primary.light} 100%)`,
                         color: Colors.white,
                         '&:hover': {
                              background: `linear-gradient(135deg, ${Colors.primary.dark} 0%, ${Colors.primary.main} 100%)`,
                              boxShadow: `0 6px 20px ${Colors.primary.main}40`,
                         },
                    },
                    containedSecondary: {
                         background: `linear-gradient(135deg, ${Colors.secondary.main} 0%, ${Colors.secondary.light} 100%)`,
                         color: Colors.white,
                         '&:hover': {
                              background: `linear-gradient(135deg, ${Colors.secondary.dark} 0%, ${Colors.secondary.main} 100%)`,
                              boxShadow: `0 6px 20px ${Colors.secondary.main}40`,
                         },
                    },
                    outlined: {
                         borderWidth: '2px',
                         borderColor: Colors.primary.main,
                         color: Colors.primary.main,
                         '&:hover': {
                              borderColor: Colors.primary.dark,
                              backgroundColor: Colors.primary[50],
                              borderWidth: '2px',
                         },
                    },
                    text: {
                         color: Colors.primary.main,
                         '&:hover': {
                              backgroundColor: Colors.primary[50],
                         },
                    },
                    sizeLarge: {
                         padding: '12px 32px',
                         fontSize: '1rem',
                    },
                    sizeSmall: {
                         padding: '6px 16px',
                         fontSize: '0.75rem',
                    },
               },
          },

          // Enhanced IconButton Styles
          MuiIconButton: {
               styleOverrides: {
                    root: {
                         // Product Favorite Button
                         '&.ProductFavButton': {
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              background: Colors.white,
                              border: `1px solid ${Colors.primary.main}`,
                              borderRadius: '5px',
                              color: Colors.primary.main,
                              '&:hover': {
                                   background: Colors.primary.main,
                                   color: Colors.white,
                                   transform: 'scale(1.05)',
                              },
                              transition: 'all 0.2s ease',
                         },
                    },
               },
          },

          // Enhanced Card Components
          MuiCard: {
               styleOverrides: {
                    root: {
                         borderRadius: 12,
                         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                         border: `1px solid ${Colors.neutral[200]}`,
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         overflow: 'hidden',
                         '&:hover': {
                              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
                              transform: 'translateY(-4px)',
                              borderColor: Colors.neutral[300],
                         },
                         // Product Card specific styling
                         '&.product-card': {
                              background: Colors.white,
                              '&:hover': {
                                   boxShadow: `0 12px 35px ${Colors.primary.main}15`,
                                   borderColor: Colors.primary[200],
                              },
                         },
                    },
               },
          },

          // Enhanced Chip Components
          MuiChip: {
               styleOverrides: {
                    root: {
                         borderRadius: 8,
                         fontWeight: 600,
                         fontSize: '0.75rem',
                    },
                    colorPrimary: {
                         backgroundColor: Colors.primary[100],
                         color: Colors.primary[800],
                         '&:hover': {
                              backgroundColor: Colors.primary[200],
                         },
                    },
                    colorSecondary: {
                         backgroundColor: Colors.secondary[100],
                         color: Colors.secondary[800],
                    },
               },
          },

          // Table Components (Cart and Wishlist)
          MuiTable: {
               styleOverrides: {
                    root: {
                         '&.CartTable': {
                              borderCollapse: 'separate',
                              borderSpacing: '0 8px',
                         },
                         '&.WishlistTable': {
                              borderCollapse: 'separate',
                              borderSpacing: '0 8px',
                         },
                    },
               },
          },

          MuiTableHead: {
               styleOverrides: {
                    root: {
                         '&.WishlistHeader': {
                              backgroundColor: Colors.primary[100],
                         },
                    },
               },
          },

          MuiTableBody: {
               styleOverrides: {
                    root: {
                         '&.WishlistTableBody': {
                              '& tr:nth-of-type(even)': {
                                   backgroundColor: Colors.neutral[50],
                              },
                         },
                    },
               },
          },

          MuiTableCell: {
               styleOverrides: {
                    root: {
                         '&.CartTableCell': {
                              borderBottom: 'none',
                              padding: '12px 16px',
                              backgroundColor: Colors.neutral[50],
                              color: Colors.primary.main,
                              '&:first-of-type': {
                                   borderRadius: '12px 0 0 12px',
                              },
                              '&:last-of-type': {
                                   borderRadius: '0 12px 12px 0',
                              },
                         },
                         '&.WishlistHeaderCell': {
                              background: Colors.primary.main,
                              color: Colors.white,
                              fontWeight: '600',
                              fontSize: '0.875rem',
                              textAlign: 'center',
                              padding: '12px 8px',
                         },
                         '&.WishListProductDetails': {
                              padding: '8px',
                              textAlign: 'center',
                              fontSize: '0.875rem',
                              color: Colors.neutral[700],
                         },
                         '&.WishlistProductName': {
                              fontWeight: '600',
                              color: Colors.primary.main,
                              fontSize: '1rem',
                              padding: '8px',
                         },
                         '&.WishlistProductCell': {
                              padding: '8px',
                              textAlign: 'center',
                         },
                         // Cart Product Cell
                         '&.StyledProductCell': {
                              padding: '16px 8px',
                              border: 'none',
                         },
                         // Cart Product Name
                         '&.StyledProductName': {
                              fontWeight: '600',
                              color: Colors.primary.main,
                              fontSize: '1rem',
                              lineHeight: 1.4,
                         },
                    },
               },
          },

          // ========================================
          // REMAINING MUI COMPONENT OVERRIDES
          // ========================================
          MuiListItemButton: {
               styleOverrides: {
                    root: {
                         transition: 'background-color 0.3s ease, transform 0.2s ease',
                         '&:hover': {
                              background: Colors.primary.lighter,
                              transform: 'translateX(5px)',
                         },
                    },
               },
          },
          MuiAccordion: {
               styleOverrides: {
                    root: {
                         backgroundColor: Colors.primary.main,
                         position: 'relative',
                         overflow: 'hidden',
                         transition: 'box-shadow 0.3s ease',
                    },
               },
          },
          MuiAccordionSummary: {
               styleOverrides: {
                    root: {
                         color: Colors.white,
                         fontWeight: 'bold',
                         transition: 'transform 0.3s ease',
                    },
               },
          },
          MuiAccordionDetails: {
               styleOverrides: {
                    root: {
                         color: Colors.primary.lighter,
                         padding: '16px',
                         borderTop: `1px solid ${lighten(0.2, Colors.primary.main)}`,
                         animation: `${expandKeyframe} 0.3s ease-out`,
                         transformOrigin: 'top',
                         '& > *': {
                              opacity: 0,
                              animation: 'fadeIn 0.5s ease-out forwards',
                         },
                         '@keyframes fadeIn': {
                              '0%': {
                                   opacity: 0,
                                   transform: 'translateY(10px)',
                              },
                              '100%': {
                                   opacity: 1,
                                   transform: 'translateY(0)',
                              },
                         },
                    },
               },
          },
          MuiStepper: {
               styleOverrides: {
                    root: {
                         marginBottom: '20px',
                         '& .MuiStepIcon-root': {
                              transition: 'transform 0.3s ease',
                              '&.Mui-active': {
                                   transform: 'scale(1.2)',
                              },
                         },
                    },
               },
          },
          MuiSvgIcon: {
               styleOverrides: {
                    root: {
                         color: Colors.primary.dark,
                         '&:hover': {
                              color: Colors.primary.main,
                              //zoomin
                              transform: 'scale(1.2)',
                         }
                    }
               }
          },
          MuiTabs: {
               styleOverrides: {
                    root: {
                         display: 'flex',
                         alignItems: 'center',
                         flexWrap: 'nowrap',
                         pointerEvents: 'none', // Prevent clicking
                         userSelect: 'none',    // Prevent selection
                         // Ensure horizontal scrolling with side arrows
                         '& .MuiTabs-flexContainer': {
                              flexWrap: 'nowrap',
                         },
                         '& .MuiTabs-scrollButtons': {
                              order: 0,
                              alignSelf: 'center',
                         },
                    }
               },
          },
          MuiTooltip: {
               defaultProps: {
                    arrow: true,
               },
               styleOverrides: {
                    tooltip: {
                         background: Colors.primary.main,
                    },
                    arrow: {
                         color: Colors.primary.main,
                    },
               },
          },
          MuiDrawer: {
               styleOverrides: {
                    paper: {
                         width: DrawerWidth,
                         background: Colors.primary.main,
                         borderRadius: '0px 100px 0px 0px',
                         borderRight: `1px solid ${Colors.primary.main}`
                    },
               }
          },
          MuiDivider: {
               styleOverrides: {
                    root: {
                         borderColor: lighten(0.2, Colors.primary.main),
                         '&::before, &::after': {
                              borderColor: lighten(0.2, Colors.primary.dark),
                         },
                         // Cart Product Image
                         '&.CartProductImage': {
                              width: '80px',
                              height: '80px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              border: `1px solid ${Colors.neutral[300]}`,
                         },
                    },
               },
          },
          // Cart Components
          MuiTableRow: {
               styleOverrides: {
                    root: {
                         // Cart Product Row
                         '&.StyledProductRow': {
                              borderBottom: `1px solid ${Colors.neutral[300]}`,
                              '&:hover': {
                                   backgroundColor: Colors.neutral[50],
                              },
                         },
                    },
               },
          },
          // Navbar Components  
          MuiList: {
               styleOverrides: {
                    root: {
                         // Navbar List
                         '&.MyList': {
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: '8px',
                         },
                    },
               },
          },
          MuiCheckbox: {
               styleOverrides: {
                    root: {
                         // Privacy Policy Checkbox
                         '&.PrivacyPolicyCheckBox': {
                              color: Colors.primary.lighter,
                              '&.Mui-checked': {
                                   color: Colors.white,
                              },
                         },
                    },
               },
          },
          MuiTouchRipple: {
               styleOverrides: {
                    root: {
                         padding: '10px'
                    }
               }
          },
     },

     breakpoints: {
          values: {
               xs: 0,
               sm: 600,
               md: 900,
               lg: 1200,
               xl: 1536,
          }
     },
});

export default theme;
