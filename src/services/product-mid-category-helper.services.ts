import productsServices from "@/services/product.services"

export const getAllMidCategoriesFromApoteka = async () => {

          const productsByMainCategoryApotekaAlergije: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'alergije')
          const productsByMainCategoryApotekaAnemije: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'anemija')
          const productsByMainCategoryApotekaBol: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'bol')
          const productsByMainCategoryApotekaHemoroidi: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'hemoroidi')
          // const productsByMainCategoryApotekaHolesterol: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'holesterol-i-trigliceridi')
          // const productsByMainCategoryApotekaImunitet: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'imunitet-prehlada')
          const productsByMainCategoryApotekaKosa: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'kosa-koza-i-nokti')
          // const productsByMainCategoryApotekaKosti: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'kosti-i-zglobovi')
          // const productsByMainCategoryApotekaMrsavljenje: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'mrsavljenje-celulit')
          // const productsByMainCategoryApotekaPosebnaIshrana: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'posebna-ishrana')
          // const productsByMainCategoryApotekaStomacneTegobe: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'stomacne-tekobe')
          // const productsByMainCategoryApotekaSrceCirkulacija: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'zdravo-srce-i-cirkulacija')
          // const productsByMainCategoryApotekaVitaminiMinerali: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'vitamini-i-minerali')
          // const productsByMainCategoryApotekaPreparatiZaKozu: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'preparati-za-primenu-na-kozi')
          // const productsByMainCategoryApotekaOciUsi: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'oci-i-usi')
          // const productsByMainCategoryApotekaPrvaPomoc: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'prva-pomoc')
          const productsByMainCategoryApotekaEnergijaUmor: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'energija-i-umor')
          const productsByMainCategoryApotekaSokovi: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'sokovi')
          const productsByMainCategoryApotekaAntioksidanti: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'antioksidansi-detoksikacija')
          // const productsByMainCategoryApotekaBiljneKapiUlja: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'biljne-kapi-biljna-i-etericna-ulja')
          const productsByMainCategoryApotekaBubrezi: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'bubrezi-i-mokracni-putevi')
          // const productsByMainCategoryApotekaCajevi: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'cajevi')
          // const productsByMainCategoryApotekaDijabetes: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'dijabetes-i-insulinska-resistencija')
          // const productsByMainCategoryApotekaJetraZuc: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'jetra-i-zuc')
          // const productsByMainCategoryApotekaKasalj: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'kasalj')
          // const productsByMainCategoryApotekaPMS: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'pms')
          // const productsByMainCategoryApotekaMenopauza: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'menopauza')
          // const productsByMainCategoryApotekaOdvikavanjeAlkohol: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'odvikavanje-od-alkohola')
          // const productsByMainCategoryApotekaPamcenje: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'pamcenje-i-koncentracija')
          // const productsByMainCategoryApotekaFertilitet: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'poremecaj-fertiliteta')
          // const productsByMainCategoryApotekaProstata: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'prostata-i-potencija')
          // const productsByMainCategoryApotekaStres: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'stres-depresija-nesanica')
          // const productsByMainCategoryApotekaDozatori: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'dozatori-i-sekaci-za-lekove')

          return [
                    ...productsByMainCategoryApotekaAlergije,
                    ...productsByMainCategoryApotekaAnemije,
                    ...productsByMainCategoryApotekaBol,
                    ...productsByMainCategoryApotekaHemoroidi,
                    // ...productsByMainCategoryApotekaHolesterol,
                    // ...productsByMainCategoryApotekaImunitet,
                    ...productsByMainCategoryApotekaKosa,
                    // ...productsByMainCategoryApotekaKosti,
                    // ...productsByMainCategoryApotekaMrsavljenje,
                    // ...productsByMainCategoryApotekaPosebnaIshrana,
                    // ...productsByMainCategoryApotekaStomacneTegobe,
                    // ...productsByMainCategoryApotekaSrceCirkulacija,
                    // ...productsByMainCategoryApotekaVitaminiMinerali,
                    // ...productsByMainCategoryApotekaPreparatiZaKozu,
                    // ...productsByMainCategoryApotekaOciUsi,
                    // ...productsByMainCategoryApotekaPrvaPomoc,
                    ...productsByMainCategoryApotekaEnergijaUmor,
                    ...productsByMainCategoryApotekaSokovi,
                    ...productsByMainCategoryApotekaAntioksidanti,
                    // ...productsByMainCategoryApotekaBiljneKapiUlja,
                    // ...productsByMainCategoryApotekaBubrezi,
                    // ...productsByMainCategoryApotekaCajevi,
                    // ...productsByMainCategoryApotekaDijabetes,
                    // ...productsByMainCategoryApotekaJetraZuc,
                    // ...productsByMainCategoryApotekaKasalj,
                    // ...productsByMainCategoryApotekaPMS,
                    // ...productsByMainCategoryApotekaMenopauza,
                    // ...productsByMainCategoryApotekaOdvikavanjeAlkohol,
                    // ...productsByMainCategoryApotekaPamcenje,
                    // ...productsByMainCategoryApotekaFertilitet,
                    // ...productsByMainCategoryApotekaProstata,
                    // ...productsByMainCategoryApotekaStres,
                    // ...productsByMainCategoryApotekaDozatori,
          ]
}

export const getAllMidCategoriesFromPrirodnaKozmetika = async () => {

          const productsByMainCategoryPrirodnaKozmetikaLice: any = await productsServices().getProductsByMainCategoryMidCategory('prirodna-kozmetika', 'lice')
          const productsByMainCategoryPrirodnaKozmetikaTelo: any = await productsServices().getProductsByMainCategoryMidCategory('prirodna-kozmetika', 'telo')
          const productsByMainCategoryPrirodnaKozmetikaKosaKozaGlave: any = await productsServices().getProductsByMainCategoryMidCategory('prirodna-kozmetika', 'kosa-i-koza-glave')
          const productsByMainCategoryPrirodnaKozmetikaBebeDeca: any = await productsServices().getProductsByMainCategoryMidCategory('prirodna-kozmetika', 'bebe-i-deca')
          const productsByMainCategoryPrirodnaKozmetikaMuskarci: any = await productsServices().getProductsByMainCategoryMidCategory('prirodna-kozmetika', 'muskarci')
          const productsByMainCategoryPrirodnaKozmetikaZene: any = await productsServices().getProductsByMainCategoryMidCategory('prirodna-kozmetika', 'zene')

          return [
                    ...productsByMainCategoryPrirodnaKozmetikaLice,
                    ...productsByMainCategoryPrirodnaKozmetikaTelo,
                    ...productsByMainCategoryPrirodnaKozmetikaKosaKozaGlave,
                    ...productsByMainCategoryPrirodnaKozmetikaBebeDeca,
                    ...productsByMainCategoryPrirodnaKozmetikaMuskarci,
                    ...productsByMainCategoryPrirodnaKozmetikaZene
          ]
}

export const getAllMidCategoriesFromLepotaINega = async () => {
          const productsByMainCategoryLepotaNegaPriborZaNegu: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'pribor-za-negu')
          const productsByMainCategoryLepotaNegaLice: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'lice')
          const productsByMainCategoryLepotaNegaTelo: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'telo')
          const productsByMainCategoryLepotaNegaIntimnaNega: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'intimna-nega')
          const productsByMainCategoryLepotaNegaOralnaHigijena: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'oralna-higijena')
          const productsByMainCategoryLepotaNegaKosaKozaGlave: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'kosa-i-koza-glave')
          const productsByMainCategoryLepotaNegaRuke: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'ruke')
          const productsByMainCategoryLepotaNegaStopala: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'stopala')
          const productsByMainCategoryLepotaNegaZastitaOdSunca: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'zastita-od-sunca')
          const productsByMainCategoryLepotaNegaBebeDeca: any = await productsServices().getProductsByMainCategoryMidCategory('lepota-i-nega', 'bebe-i-deca')

          return [
                    ...productsByMainCategoryLepotaNegaPriborZaNegu,
                    ...productsByMainCategoryLepotaNegaLice,
                    ...productsByMainCategoryLepotaNegaTelo,
                    ...productsByMainCategoryLepotaNegaIntimnaNega,
                    ...productsByMainCategoryLepotaNegaOralnaHigijena,
                    ...productsByMainCategoryLepotaNegaKosaKozaGlave,
                    ...productsByMainCategoryLepotaNegaRuke,
                    ...productsByMainCategoryLepotaNegaStopala,
                    ...productsByMainCategoryLepotaNegaZastitaOdSunca,
                    ...productsByMainCategoryLepotaNegaBebeDeca,
          ]
}

export const getAllMidCategoriesFromBebiProgram = async () => {

          const productsByMainCategoryBebiProgramPriborZaKupanje: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'pribor-za-kupanje')
          const productsByMainCategoryBebiProgramBebiCajevi: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'bebi-cajevi')
          const productsByMainCategoryBebiProgramBebiApoteka: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'bebi-apoteka')
          const productsByMainCategoryBebiProgramBebiKozmetika: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'bebi-kozmetika')
          const productsByMainCategoryBebiProgramFlasiceCucleGlodalice: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'flasice-cucle-glodalice-zvecke')
          const productsByMainCategoryBebiProgramPelene: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'pelene')
          const productsByMainCategoryBebiProgramHranaZaBebe: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'hrana-za-bebe')
          const productsByMainCategoryBebiProgramTrudniceDojilje: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'trudnice-i-dojilje')
          const productsByMainCategoryBebiProgramAparati: any = await productsServices().getProductsByMainCategoryMidCategory('bebi-program', 'bebi-program-aparati')

          return [
                    ...productsByMainCategoryBebiProgramPriborZaKupanje,
                    ...productsByMainCategoryBebiProgramBebiCajevi,
                    ...productsByMainCategoryBebiProgramBebiApoteka,
                    ...productsByMainCategoryBebiProgramBebiKozmetika,
                    ...productsByMainCategoryBebiProgramFlasiceCucleGlodalice,
                    ...productsByMainCategoryBebiProgramPelene,
                    ...productsByMainCategoryBebiProgramHranaZaBebe,
                    ...productsByMainCategoryBebiProgramTrudniceDojilje,
                    ...productsByMainCategoryBebiProgramAparati
          ]
}

export const getAllMidCategoriesFromMedicinskiAparatiOprema = async () => {

          const productsByMainCategoryMedicinskiAparatiZaAnalizuSna: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'aparati-za-analizu-sna')
          const productsByMainCategoryMedicinskiAparatiPreciscivaciVazduha: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'preciscivaci-vazduha')
          const productsByMainCategoryMedicinskiAparatiPulsniOksimetri: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'pulsni-oksimetri')
          const productsByMainCategoryMedicinskiAparatiVage: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'vage')
          const productsByMainCategoryMedicinskiAparatiAspiratori: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'aspiratori')
          const productsByMainCategoryMedicinskiAparatiInhalatori: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'inhalatori')
          const productsByMainCategoryMedicinskiAparatiMerenjePritiska: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'merenje-pritiska')
          const productsByMainCategoryMedicinskiAparatiToplomeri: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'toplomeri')
          const productsByMainCategoryMedicinskiAparatiStetoskopi: any = await productsServices().getProductsByMainCategoryMidCategory('medicinski-aparati-oprema', 'stetoskopi')

          return [
                    ...productsByMainCategoryMedicinskiAparatiZaAnalizuSna,
                    ...productsByMainCategoryMedicinskiAparatiPreciscivaciVazduha,
                    ...productsByMainCategoryMedicinskiAparatiPulsniOksimetri,
                    ...productsByMainCategoryMedicinskiAparatiVage,
                    ...productsByMainCategoryMedicinskiAparatiAspiratori,
                    ...productsByMainCategoryMedicinskiAparatiInhalatori,
                    ...productsByMainCategoryMedicinskiAparatiMerenjePritiska,
                    ...productsByMainCategoryMedicinskiAparatiToplomeri,
                    ...productsByMainCategoryMedicinskiAparatiStetoskopi
          ]
}

export const getAllMidCategoriesFromOrtopedijaPomagala = async () => {

          const productsByMainCategoryOrtopedijaPomagalaAntidekubitalnaPomagala: any = await productsServices().getProductsByMainCategoryMidCategory('ortopedija-i-pomagala', 'antidekubitalna-pomagala')
          const productsByMainCategoryOrtopedijaPomagalaStake: any = await productsServices().getProductsByMainCategoryMidCategory('ortopedija-i-pomagala', 'stake')
          const productsByMainCategoryOrtopedijaPomagalaStapovi: any = await productsServices().getProductsByMainCategoryMidCategory('ortopedija-i-pomagala', 'stapovi')
          const productsByMainCategoryOrtopedijaPomagalaOrtoze: any = await productsServices().getProductsByMainCategoryMidCategory('ortopedija-i-pomagala', 'ortoze')
          const productsByMainCategoryOrtopedijaPomagalaKineziTrake: any = await productsServices().getProductsByMainCategoryMidCategory('ortopedija-i-pomagala', 'kinezi-trake')
          const productsByMainCategoryOrtopedijaPomagalaHodalice: any = await productsServices().getProductsByMainCategoryMidCategory('ortopedija-i-pomagala', 'hodalice')
          const productsByMainCategoryOrtopedijaPomagalaPostoljniPodmetaci: any = await productsServices().getProductsByMainCategoryMidCategory('ortopedija-i-pomagala', 'postoljni-podmetaci')

          return [
                    ...productsByMainCategoryOrtopedijaPomagalaAntidekubitalnaPomagala,
                    ...productsByMainCategoryOrtopedijaPomagalaStake,
                    ...productsByMainCategoryOrtopedijaPomagalaStapovi,
                    ...productsByMainCategoryOrtopedijaPomagalaOrtoze,
                    ...productsByMainCategoryOrtopedijaPomagalaKineziTrake,
                    ...productsByMainCategoryOrtopedijaPomagalaHodalice,
                    ...productsByMainCategoryOrtopedijaPomagalaPostoljniPodmetaci,
          ]
}

export const getAllMidCategoriesFromDezinfekcijaDezinsekcijaMaske = async () => {

          const productsByMainCategoryDezinfekcijaDezinsekcijaMaskeDezinfekcija: any = await productsServices().getProductsByMainCategoryMidCategory('dezinfekcija-dezinsekcija-maske', 'sredstva-za-dezinfekciju')
          const productsByMainCategoryDezinfekcijaDezinsekcijaMaskeRepelenti: any = await productsServices().getProductsByMainCategoryMidCategory('dezinfekcija-dezinsekcija-maske', 'repelenti')
          const productsByMainCategoryDezinfekcijaDezinsekcijaMaskeZaLice: any = await productsServices().getProductsByMainCategoryMidCategory('dezinfekcija-dezinsekcija-maske', 'maske-za-lice')

          return [
                    ...productsByMainCategoryDezinfekcijaDezinsekcijaMaskeDezinfekcija,
                    ...productsByMainCategoryDezinfekcijaDezinsekcijaMaskeRepelenti,
                    ...productsByMainCategoryDezinfekcijaDezinsekcijaMaskeZaLice,
          ]
}

export const getAllMidCategoriesFromObucaCarapeUlosci = async () => {

          const productsByMainCategoryObucaCarapeUlosciBebe: any = await productsServices().getProductsByMainCategoryMidCategory('obuca-carape-ulosci', 'bebe')
          const productsByMainCategoryObucaCarapeUlosciDeca: any = await productsServices().getProductsByMainCategoryMidCategory('obuca-carape-ulosci', 'deca')
          const productsByMainCategoryObucaCarapeUlosciOdrasli: any = await productsServices().getProductsByMainCategoryMidCategory('obuca-carape-ulosci', 'odrasli')
          const productsByMainCategoryObucaCarapeUlosciCarapeZaVene: any = await productsServices().getProductsByMainCategoryMidCategory('obuca-carape-ulosci', 'carape-za-vene')
          const productsByMainCategoryObucaCarapeUlosciZaStopala: any = await productsServices().getProductsByMainCategoryMidCategory('obuca-carape-ulosci', 'ulosci-za-stopala')
          const productsByMainCategoryObucaCarapeUlosciStitniciSeparatori: any = await productsServices().getProductsByMainCategoryMidCategory('obuca-carape-ulosci', 'stitnici-i-separatori')

          return [
                    ...productsByMainCategoryObucaCarapeUlosciBebe,
                    ...productsByMainCategoryObucaCarapeUlosciDeca,
                    ...productsByMainCategoryObucaCarapeUlosciOdrasli,
                    ...productsByMainCategoryObucaCarapeUlosciCarapeZaVene,
                    ...productsByMainCategoryObucaCarapeUlosciZaStopala,
                    ...productsByMainCategoryObucaCarapeUlosciStitniciSeparatori,
          ]
}

export const getAllDiscountProducts = async () => {

          const productsOnDiscount: any = await productsServices().getProductsByDiscount()

          return [
                    ...productsOnDiscount,
          ]
}