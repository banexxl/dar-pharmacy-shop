import { createTheme, Theme } from "@mui/material/styles";
import { darken, lighten } from "polished";
import NorthEastIcon from '@mui/icons-material/NorthEast';

export const DrawerWidth = 250;

export const Colors = {
     primary: {
          main: "#B93035",
          dark: "#970D12",
          darker: "#7A0A0E",
          light: "#ef5350",
          lighter: "#FFCDD2",
     },
     secondary: {
          main: "#3C73BA",
          dark: "#2A4E7E",
          darker: "#1E3A5C",
          light: "#5C8DDA",
          lighter: "#BBDEFB",
          custom: "#ECF4FF"
     },
     success: "#4CAF50",
     info: "#00a2ff",
     danger: "#FF5722",
     warning: "#FFC107",
     dark: "#b71c1c",
     muted: "#abafb3",
     border: "#DDDFE1",
     inverse: "#2F3D4A",
     shaft: "#333",
     link: '#1e88e5',
     ///////////////
     // Grays
     ///////////////
     dim_grey: "#696969",
     dove_gray: "#d5d5d5",
     body_bg: "#f3f6f9",
     light_gray: "rgb(230,230,230)",
     ///////////////
     // Solid Color
     ///////////////
     white: "#fff",
     black: "#000",
};

const theme: Theme = createTheme({
     palette: {
          primary: {
               main: Colors.primary.main,
          },
          secondary: {
               main: Colors.primary.light,
          },
     },

     components: {
          MuiTypography: {
               styleOverrides: {
                    root: {
                         fontFamily: 'monserrat',
                         color: Colors.primary.lighter,
                         textAlign: 'center',
                         fontSize: '1.2rem',
                    }
               }
          },
          // MuiContainer: {
          //           styleOverrides: {
          //                     root: {
          //                               boxShadow: `4px 4px 4px 4px ${Colors.primary}`,
          //                               padding: '10px 10px 5px 10px',
          //                               borderRadius: '5px'
          //                     }
          //           }
          // },
          MuiStepper: {
               styleOverrides: {
                    root: {
                         marginBottom: '20px'
                    }
               }
          },
          MuiTabs: {
               styleOverrides: {
                    root: {
                         display: 'inline',
                         flexWrap: 'wrap',
                    }
               },
          },
          MuiButton: {
               defaultProps: {
                    disableRipple: true,
                    disableElevation: true,
               },
               styleOverrides: {
                    root: {
                         background: Colors.primary.main,
                         '&:hover': {
                              background: Colors.primary.main
                         },
                         cursor: 'pointer',
                         // borderRadius: '30px',
                         // buttonIcon: NorthEastIcon
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
                         borderColor: lighten(0.2, Colors.primary.main)
                    }
               }
          },
          MuiTouchRipple: {
               styleOverrides: {
                    root: {
                         padding: '10px'
                    }
               }
          }
     },
     breakpoints: {
          values: {
               xs: 0,
               sm: 600,
               md: 900,
               lg: 1200,
               xl: 1536,
          }
     }
})
export default theme;
