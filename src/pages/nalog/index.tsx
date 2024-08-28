import { useState, useEffect } from "react"
import { getSession, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { ReCaptchaProvider } from "next-recaptcha-v3"
import { Seo } from "@/components/seo"
import { Box, Container, Stack, Typography } from "@mui/material"
import { UIProvider } from "@/context/ui/ui.context"
import LoadingWheel from "@/components/loading/loading"
import theme from "@/styles/theme"
import dynamic from "next/dynamic"
import { ProfileBox } from "@/styles/profile"
import ErrorPage from "../autentifikacija/greska"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { AccountService } from "@/services/accounts.service"

export default function ProtectedPage(props: any) {
     console.log('ProtectedPage', props);

     const { data: session, status } = useSession()
     const router = useRouter()

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     // If no session exists, display access denied message
     if (!session) {
          return <ErrorPage error="ProtectedRoute" />
     }

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <DynamicThemeProvider theme={theme}>
                    <Seo title={'DAR Profil'} description={'DAR profil'} url={'https://www.apoteka-dar.rs/'} />
                    <Container
                         disableGutters
                         maxWidth="lg"
                         sx={{
                              background: "#fff",
                         }}
                    >
                         <Stack>
                              <UIProvider>
                                   <ProfileBox theme={theme}>
                                        <Typography variant="h1" component="h1">
                                             { }
                                        </Typography>
                                   </ProfileBox>
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider>
          </ReCaptchaProvider>
     )
}

export async function getServerSideProps(context: any) {

     const sta = await getSession(context);

     const userData = await AccountService().getUserByEmail(context.req.cookies['next-auth.session-token']);
     console.log('userData', userData);

     return {
          props: {

          },
     }
}