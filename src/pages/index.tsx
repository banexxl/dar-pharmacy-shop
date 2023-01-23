import { Inter } from '@next/font/google'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Navbar from "../components/navbar";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Banner from "../components/banner";
import Products from "../components/products";
import { UIProvider } from "../context/ui";
import Footer from "../components/footer";
import AppDrawer from "../components/navbar/drawer";
import Promotions from "../components/promotions";
import SearchBox from "../components/search"

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
