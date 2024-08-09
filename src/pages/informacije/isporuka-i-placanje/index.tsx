import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import ContactForm from "@/components/contact/contact-form";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import { ContactBox, ContactFormBox, ContactInfoBox, ContactStrongText, ContactSubTitle, ContactText, ContactTitle } from "@/styles/contact/contact";
import theme from "@/styles/theme";
import { Box, Container, Stack } from "@mui/material";
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";

const DeliveryAndPaymentPage = () => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     return (
          <DynamicThemeProvider theme={theme}>
               <Head>
                    <title>Apoteka DAR - Isporuka i plaćanje</title>
                    <meta name="description" content="Apoteka Dar Kragujevac" />
                    <meta name="keywords" content="apoteka, dar, kragujevac" />
                    <meta property="og:title" content="Apoteka DAR" />
                    <meta property="og:description" content="Apoteka Dar Kragujevac" />
                    <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta property="og:url" content="https://www.apoteka-dar.rs" />
                    <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta name="twitter:title" content="Apoteka DAR" />
                    <meta name="twitter:description" content="Apoteka DAR - Isporuka i plaćanje" />
                    <meta name="twitter:image" content="/public/images/home-page/apotekaDar.jpg" />
               </Head>
               <Container
                    disableGutters
                    maxWidth="lg"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <ContactBox theme={theme}>
                                   <ContactInfoBox theme={theme}>
                                        <ContactTitle>
                                             Isporuka i plaćanje
                                        </ContactTitle>

                                        <ContactSubTitle>
                                             Isporuka
                                        </ContactSubTitle>
                                        <ContactText theme={theme}>
                                             Planirano vreme isporuke od trenutka kreiranja porudžbine je{" "}
                                             <ContactStrongText theme={theme}>
                                                  1-5 radnih dana,{" "}
                                             </ContactStrongText>
                                             ne računajući vikend, na teritoriji Republike Srbije, putem kurirske službe Post Express.
                                             Isporuka se ne vrši tokom državnih praznika koji su definisani kao neradni dani, kao ni na adrese u inostranstvu.
                                        </ContactText>
                                        <ContactText theme={theme}>
                                             Dostavu/isporuku za porudžbine do{" "}
                                             <ContactStrongText theme={theme}>
                                                  3000 dinara{" "}
                                             </ContactStrongText>
                                             plaća kupac i ona iznosi{" "}
                                             <ContactStrongText theme={theme}>
                                                  291 dinar{" "}
                                             </ContactStrongText>
                                             ukoliko je kupac platio karticom,
                                             odnosno{" "}
                                             <ContactStrongText theme={theme}>
                                                  341 dinar{" "}
                                             </ContactStrongText>
                                             ukoliko kupac plaća pouzećem. Naplata otkupnih iznosa vrši se po ceni od 50 dinara u slučaju
                                             plaćanja dostave pouzećem i odatle razlika u ceni u odnosu na plaćanje karticom. Cena dostave/isporuke je do{" "}
                                             <ContactStrongText theme={theme}>
                                                  341 dinara za pakete do 5 kg,{" "}
                                             </ContactStrongText>
                                             za pakete mase preko 5 kg svaki dodatni kilogram se naplaćuje 28,13 dinara po kilogramu.
                                        </ContactText>
                                        <ContactText theme={theme}>
                                             Za sve porudžbine preko{" "}
                                             <ContactStrongText theme={theme}>
                                                  8000 dinara isporuka je besplatna.
                                             </ContactStrongText>
                                        </ContactText>

                                        {/* <ContactText theme={theme}>
                                        UBACITI TEKST ZA PARCEL SHOP
                                             Nudimo i mogućnost preuzimanja pošiljki na Parcel Shop-ovima,
                                             ukoliko ne želite isporuku na kućnu adresu ili Vam vreme u kojem se isporuka vrši ne odgovara.
                                             Cena dostave/isporuke je ista kao i prilikom dostave na kućnu adresu.
                                             Mesta na kojima možete preuzeti pošiljku putem Parcel Shop opcije možete pogledati ovde.
                                             Za više informacija, molimo Vas da nas kontaktirate putem besplatnog poziva na broj 0800 111113 ili putem e-mail-a na online@benu.rs
                                        </ContactText> */}

                                        <ContactSubTitle>
                                             Plaćanje
                                        </ContactSubTitle>

                                        <ContactText theme={theme}>
                                             U mogućnosti ste da odaberete:
                                        </ContactText>
                                        <ContactStrongText theme={theme}>
                                             1. Plaćanje pouzećem gotovinski, u trenutku isporuke
                                        </ContactStrongText>
                                        <ContactText theme={theme}>
                                             Ukoliko ste se odlučili za plaćanje pouzećem prilikom poslednjeg koraka pre potvrde kupovine,
                                             u obavezi ste da paket koji Vam bude dostavljen na adresu platite kuriru na licu mesta.
                                             Imajte u vidu da kurir možda neće imati sitnog novca da Vam vrati kusur,
                                             te se potrudite da imate tačnu sumu za plaćanje koja je navedena u potvrdi porudžbine koji ste dobili.
                                        </ContactText>
                                        <ContactStrongText theme={theme}>
                                             2. Plaćanje platnim karticama tokom procesa kupovine na sajtu
                                        </ContactStrongText>
                                        <ContactText theme={theme}>
                                             Ukoliko ste se odlučili za plaćanje Vašom platnom karticom (Dina, Visa, Master i Maestro) online,
                                             prilikom poslednjeg koraka pre potvrde kupovine, sistem će Vas preusmeriti na sigurnosni link
                                             OTP banke Srbija AD gde unosite podatke o svojoj platnoj kartici. Ukupna suma i broj pošiljke su
                                             automatski uneti i ne mogu se menjati.
                                        </ContactText>
                                        <ContactText theme={theme}>
                                             Prilikom unošenja podataka o platnoj kartici, poverljive informacija se prenose u zaštićenoj (kriptovanoj) formi.
                                             Sigurnost podataka prilikom kupovine, garantuje prihvatilac platnih kartica, OTP banke Srbija AD, pa se tako
                                             kompletni proces naplate obavlja na stranicama banke. Niti jednog trenutka podaci o platnoj kartici nisu dostupni našem sistemu.
                                        </ContactText>
                                        <ContactText theme={theme}>
                                             AU BENU je zabranjeno prodavanje, naručivanje, obezbeđivanje illi razmena podataka potrošača ili informacija o
                                             platnoj kartici u bilo kojoj formi trećoj strani, sem ako to nije Banka ili nadležni državni organi. Lični i adresni podaci
                                             potrošača koji se predočavaju AU BENU prilikom procesa kupovine smatraju se poslovnom tajnom.
                                        </ContactText>
                                   </ContactInfoBox>
                              </ContactBox>
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider >
     )
}

export default DeliveryAndPaymentPage;