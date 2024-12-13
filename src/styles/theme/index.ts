import { createTheme, Theme } from "@mui/material/styles";
import { darken, lighten } from "polished";
import { keyframes } from '@mui/system'

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
                         color: Colors.primary.main,
                         textAlign: 'center',
                         fontSize: '1.2rem',
                         '&:hover': {
                              color: Colors.primary.light,
                         },
                    }
               }
          },
          MuiListItemText: {
               styleOverrides: {
                    root: {
                         '& .MuiTypography-root': {
                              color: Colors.primary.main,
                         },
                    }
               }
          },
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
                         backgroundColor: Colors.primary.lighter,
                         position: 'relative',
                         overflow: 'hidden',
                         transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                         '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: '-50%',
                              left: '-50%',
                              width: '200%',
                              height: '200%',
                              background: `linear-gradient(to right, ${lighten(0.1, Colors.primary.lighter)} 0%, ${lighten(0.3, Colors.primary.lighter)} 30%, ${lighten(0.1, Colors.primary.lighter)} 50%, ${lighten(0.3, Colors.primary.lighter)} 70%, ${lighten(0.1, Colors.primary.lighter)} 100%)`,
                              opacity: 0,
                              transition: 'opacity 0.3s ease',
                              pointerEvents: 'none',
                         },
                         '&:hover': {
                              backgroundColor: lighten(0.05, Colors.primary.lighter),
                              boxShadow: `0 4px 8px ${lighten(0.2, Colors.primary.main)}`,
                              '&::before': {
                                   opacity: 1,
                                   animation: `${shineKeyframe} 1.5s infinite linear`,
                              },
                         },
                         '&.Mui-expanded': {
                              margin: '16px 0',
                              '&:first-of-type': {
                                   marginTop: 0,
                              },
                              '&:last-of-type': {
                                   marginBottom: 0,
                              },
                         },
                    },
               },
          },
          MuiAccordionSummary: {
               styleOverrides: {
                    root: {
                         color: Colors.primary.main,
                         fontWeight: 'bold',
                         transition: 'color 0.3s ease, transform 0.3s ease',
                         '&:hover': {
                              color: Colors.primary.light,
                         },
                         '&.Mui-expanded': {
                              transform: 'scale(1.05)',
                         },
                         '& .MuiAccordionSummary-expandIconWrapper': {
                              transition: 'transform 0.5s ease',
                         },
                         '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                              transform: 'rotate(180deg)',
                         },
                         '&:hover .MuiAccordionSummary-expandIconWrapper': {
                              animation: `${wiggleKeyframe} 0.5s ease infinite`,
                         },
                    },
               },
          },
          MuiAccordionDetails: {
               styleOverrides: {
                    root: {
                         color: Colors.primary.main,
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
                         color: Colors.primary.lighter,
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
                         position: 'relative',
                         overflow: 'hidden',
                         background: Colors.primary.lighter,
                         cursor: 'pointer',
                         transition: 'background-color 0.3s ease, transform 0.2s ease',
                         '&:hover': {
                              background: Colors.secondary.custom,
                              // transform: 'translateY(-2px)',
                              '&::before': {
                                   content: '""',
                                   position: 'absolute',
                                   top: 0,
                                   left: '-100%',
                                   width: '100%',
                                   height: '100%',
                                   background: 'linear-gradient(to right, rgba(255, 80, 80, 0) 0%, rgba(226, 22, 22, 0.3) 50%, rgba(255,255,255,0) 100%)',
                                   transform: 'skewX(-25deg)',
                                   animation: 'shine 1.5s infinite',
                              },
                         },
                         '&:focus': {
                              outline: `2px solid ${Colors.primary.main}`,
                              outlineOffset: '2px',
                         },
                         '@keyframes shine': {
                              '100%': {
                                   left: '150%',
                              },
                         },
                    },
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
     }
})
export default theme;
