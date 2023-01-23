import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Navbar from "../pages/navbar";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Banner from "../pages/banner";
import Products from "../pages/products";
import { UIProvider } from "../context/ui";
import Footer from "../pages/footer";
import AppDrawer from "../pages/navbar/drawer";
import Promotions from "../pages/promotions";
import SearchBox from "../pages/search"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
          return (
                    <ThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <Navbar />
                                                            <Banner />
                                                            <Promotions />
                                                            <SearchBox />
                                                            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                                                      <Typography variant="h4">Naši proizvodi</Typography>
                                                            </Box>
                                                            <Products />
                                                            <Footer />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider>
          )
}
