import AddressForm from '@/components/checkout/address/address-form'
import { CreditCard } from '@/components/checkout/credit-card/credit-card'
import Delivery from '@/components/checkout/delivery/delivery'
import { UIProvider } from '@/context/ui'
import { CreditCardFormValues } from '@/interfaces/checkout/credit-card-form-values.interface'
import { CheckoutNextPrevButton, ShouldCreateAccountCheckBox } from '@/styles/checkout'
import theme, { Colors } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Box, Container, FormControlLabel, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Head from 'next/head'
import React from 'react'


const cardValues: CreditCardFormValues = {
          cardNumber: '1111-1111-1111-1111',
          expiryDate: '12/23',
          securityCode: '233'
}

interface TabPanelProps {
          children?: React.ReactNode;
          index: number;
          value: number;
}

function TabPanel(props: TabPanelProps) {
          const { children, value, index, ...other } = props;

          return (
                    <div
                              role="tabpanel"
                              hidden={value !== index}
                              id={`simple-tabpanel-${index}`}
                              aria-labelledby={`simple-tab-${index}`}
                              {...other}
                    >
                              {value === index && (
                                        <Box sx={{ p: 3 }}>
                                                  <Typography>{children}</Typography>
                                        </Box>
                              )}
                    </div>
          );
}

function a11yProps(index: number) {
          return {
                    id: `simple-tab-${index}`,
                    'aria-controls': `simple-tabpanel-${index}`,
          };
}

const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const [value, setValue] = React.useState(0);

          const handleChange = (event: React.SyntheticEvent, newValue: number) => {
                    setValue(newValue);
          };

          return (
                    <ThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('checkout.title')}</title>
                              </Head>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <Box sx={{ borderBottom: 3, borderColor: Colors.secondary }}>
                                                                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                                                <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                      </Tabs>
                                                            </Box>
                                                            <TabPanel value={value} index={0}>
                                                                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                                                                                <AddressForm formName={'addressform'} />
                                                                                <Box>
                                                                                          <FormControlLabel control={<ShouldCreateAccountCheckBox defaultChecked />}
                                                                                                    label={<Typography sx={{
                                                                                                              fontFamily: 'inherit', color: Colors.secondary
                                                                                                    }}>{t('checkout.shouldcreateaccount')}</Typography>} />
                                                                                          <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />} onClick={() => console.log("kliknuo sam")}>
                                                                                                    {t('checkout.nextbutton')}
                                                                                          </CheckoutNextPrevButton>
                                                                                </Box>
                                                                      </Box>
                                                            </TabPanel>
                                                            <TabPanel value={value} index={1}>
                                                                      <Delivery />
                                                            </TabPanel>
                                                            <TabPanel value={value} index={2}>
                                                                      <CreditCard values={cardValues} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                                                                throw new Error('Function not implemented.')
                                                                      }} />
                                                            </TabPanel>

                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider >
          )
}


export async function getStaticProps({ locale }: any) {
          return {
                    props: {
                              ...(await serverSideTranslations(locale, [
                                        'common',
                              ])),
                              // Will be passed to the page component as props
                    },
          }
}

export default Checkout