import { createTheme } from "@mui/material/styles";
import { darken, lighten } from "polished";

export const DrawerWidth = 250;

export const Colors = {
          primary: "#c62828",
          secondary: "#ef9a9a",
          success: "#4CAF50",
          info: "#00a2ff",
          danger: "#FF5722",
          warning: "#FFC107",
          dark: "#b71c1c",
          light: "#ef5350",
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

const theme = createTheme({
          palette: {
                    primary: {
                              main: Colors.primary,
                    },
                    secondary: {
                              main: Colors.secondary,
                    },
          },

          components: {
                    MuiButton: {
                              defaultProps: {
                                        disableRipple: true,
                                        disableElevation: true,
                              },
                    },
                    MuiTooltip: {
                              defaultProps: {
                                        arrow: true,
                              },
                              styleOverrides: {
                                        tooltip: {
                                                  background: Colors.primary,
                                        },
                                        arrow: {
                                                  color: Colors.primary,
                                        },
                              },
                    },
                    MuiDrawer: {
                              styleOverrides: {
                                        paper: {
                                                  width: DrawerWidth,
                                                  background: Colors.primary,
                                                  color: Colors.secondary,
                                                  borderRadius: '0px 100px 0px 0px',
                                                  borderRight: `1px solid ${Colors.primary}`
                                        }
                              }
                    },
                    MuiDivider: {
                              styleOverrides: {
                                        root: {
                                                  borderColor: lighten(0.2, Colors.primary)
                                        }
                              }
                    },
                    MuiButtonBase: {
                              styleOverrides: {
                                        root: {
                                                  color: Colors.white,
                                                  background: `${Colors.primary}`,
                                                  "&:hover": {
                                                            background: lighten(0.05, Colors.secondary),
                                                  },
                                        },
                              },
                    },
          },
});

export default theme;
