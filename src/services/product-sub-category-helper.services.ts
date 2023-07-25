import productsServices from "@/services/product.services"

export const getAllSubCategoriesFromApotekaAlergije = async () => {

          let productsBySubCategoryApotekaAlergijeKapsuleTablete: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'kapsule-i-tablete')
          // const productsBySubCategoryApotekaAlergijeSprejeviZaNos: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'sprejevi-za-nos')
          // const productsBySubCategoryApotekaAlergijeMastiIGelovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'masti-gelovi')
          //const productsBySubCategoryApotekaAlergijeIrigacioniSet: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'irigacioni-set')

          return [
                    ...productsBySubCategoryApotekaAlergijeKapsuleTablete,
                    // ...productsBySubCategoryApotekaAlergijeSprejeviZaNos,
                    // ...productsBySubCategoryApotekaAlergijeMastiIGelovi,
                    //productsBySubCategoryApotekaAlergijeIrigacioniSet
          ]
}

export const getAllSubCategoriesFromApotekaAnemije = async () => {

          //const productsBySubCategoryApotekaAnemijeFolanaKiselina: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'anemija', 'folna-kiselina-i-vitamini')
          const productsBySubCategoryApotekaAnemijeBiljniPreparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'anemija', 'biljni-preparati')
          //const productsBySubCategoryApotekaAnemijePreparatiGvozdja: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'anemija', 'preparati-gvozda')

          return [
                    //...productsBySubCategoryApotekaAnemijeFolanaKiselina,
                    ...productsBySubCategoryApotekaAnemijeBiljniPreparati,
                    // ...productsBySubCategoryApotekaAnemijePreparatiGvozdja,
          ]
}

export const getAllSubCategoriesFromApotekaBol = async () => {

          //const productsBySubCategoryApotekaBolUGrlu: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'bol', 'bol-u-grlu')
          // const productsBySubCategoryApotekaBolMenstrualni: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'bol', 'menstrualni-bolovi')
          const productsBySubCategoryApotekaBolZglobMisici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'bol', 'bolovi-u-zglobovima-i-misicima')

          return [
                    // ...productsBySubCategoryApotekaBolUGrlu,
                    // ...productsBySubCategoryApotekaBolMenstrualni,
                    ...productsBySubCategoryApotekaBolZglobMisici,
          ]
}

export const getAllSubCategoriesFromApotekaHemoroidi = async () => {

          const productsBySubCategoryApotekaHemoroidiKapsuleTablete: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'hemoroidi', 'oralni-preparati')
          const productsBySubCategoryApotekaHemoroidiSprejeviZaNos: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'hemoroidi', 'lokalna-primena')

          return [
                    ...productsBySubCategoryApotekaHemoroidiKapsuleTablete,
                    ...productsBySubCategoryApotekaHemoroidiSprejeviZaNos,
          ]
}

export const getAllSubCategoriesFromApotekaHolesterol = async () => {

          const productsBySubCategoryApotekaHolesterolTrigliceridiOmegaMasneKiseline: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'holesterol-i-trigliceridi', 'omega-masne-kiseline')
          const productsBySubCategoryApotekaHolesterolTrigliceridiOstalo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'holesterol-i-trigliceridi', 'ostalo')

          return [
                    ...productsBySubCategoryApotekaHolesterolTrigliceridiOmegaMasneKiseline,
                    ...productsBySubCategoryApotekaHolesterolTrigliceridiOstalo,
          ]
}

export const getAllSubCategoriesFromApotekaImunitet = async () => {

          // const productsBySubCategoryApotekaImunitetDeca: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'deca')
          // const productsBySubCategoryApotekaImunitetVitaminiMinerali: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'vitamini-i-minerali')
          // const productsBySubCategoryApotekaImunitetSprejeviNos: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'sprejevi-za-nos')
          // const productsBySubCategoryApotekaImunitetSprejeviGrlo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'sprejevi-za-grlo')
          const productsBySubCategoryApotekaImunitetIrigacioniSet: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'irigacioni-set')
          // const productsBySubCategoryApotekaImunitetMastiGelovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'masti-gelovi')
          // const productsBySubCategoryApotekaImunitetBiljneKapi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'biljne-kapi')
          // const productsBySubCategoryApotekaImunitetMedMlecPropolis: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'med-maticni-mlec-i-propolis')
          // const productsBySubCategoryApotekaImunitetPastileZaGrlo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'pastile-za-grlo')
          // const productsBySubCategoryApotekaImunitetAlojaNoniAronija: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'aloja-ehinacea-noni-aronija')
          // const productsBySubCategoryApotekaImunitetProbiotici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'probiotici')
          // const productsBySubCategoryApotekaImunitetOmegaMasneKiseline: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'omega-masne-kiseline')
          // const productsBySubCategoryApotekaImunitetOstalo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'imunitet-prehlada', 'ostalo')
          return [
                    // productsBySubCategoryApotekaImunitetDeca,
                    // productsBySubCategoryApotekaImunitetVitaminiMinerali,
                    // productsBySubCategoryApotekaImunitetSprejeviNos,
                    // productsBySubCategoryApotekaImunitetSprejeviGrlo,
                    ...productsBySubCategoryApotekaImunitetIrigacioniSet,
                    // productsBySubCategoryApotekaImunitetMastiGelovi,
                    // productsBySubCategoryApotekaImunitetBiljneKapi,
                    // productsBySubCategoryApotekaImunitetMedMlecPropolis,
                    // productsBySubCategoryApotekaImunitetPastileZaGrlo,
                    // productsBySubCategoryApotekaImunitetAlojaNoniAronija,
                    // productsBySubCategoryApotekaImunitetProbiotici,
                    // productsBySubCategoryApotekaImunitetOmegaMasneKiseline,
                    // productsBySubCategoryApotekaImunitetOstalo,
          ]
}

export const getAllSubCategoriesFromApotekaKosaKozaNokti = async () => {

          const productsBySubCategoryApotekaKosaKozaNoktiOralniPreparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'kosa-koza-i-nokti', 'oralni-preparati')
          const productsBySubCategoryApotekaKosaKozaNoktiLokalnaPrimena: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'kosa-koza-i-nokti', 'lokalna-primena')

          return [
                    ...productsBySubCategoryApotekaKosaKozaNoktiOralniPreparati,
                    ...productsBySubCategoryApotekaKosaKozaNoktiLokalnaPrimena,
          ]
}

export const getAllSubCategoriesFromApotekaKostiZglobovi = async () => {

          const productsBySubCategoryApotekaKostiZgloboviOralniPreparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'kosti-i-zglobovi', 'oralni-preparati')
          const productsBySubCategoryApotekaKostiZgloboviLokalnaPrimena: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'kosti-i-zglobovi', 'primena-na-kozi')

          return [
                    ...productsBySubCategoryApotekaKostiZgloboviOralniPreparati,
                    ...productsBySubCategoryApotekaKostiZgloboviLokalnaPrimena,
          ]
}

export const getAllSubCategoriesFromApotekaMrsavljenjeCelulit = async () => {

          const productsBySubCategoryApotekaMrsavljenjeCelulitOralniPreparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'mrsavljenje-celulit', 'oralni-preparati')
          const productsBySubCategoryApotekaMrsavljenjeCelulitPrimenaNaKozi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'mrsavljenje-celulit', 'primena-na-kozi')

          return [
                    ...productsBySubCategoryApotekaMrsavljenjeCelulitOralniPreparati,
                    ...productsBySubCategoryApotekaMrsavljenjeCelulitPrimenaNaKozi,
          ]
}

export const getAllSubCategoriesFromApotekaPosebnaIshrana = async () => {

          const productsBySubCategoryApotekaPosebnaIshranaKase: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'posebna-ishrana', 'kase')
          const productsBySubCategoryApotekaPosebnaIshranaSejkovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'posebna-ishrana', 'sejkovi')
          const productsBySubCategoryApotekaPosebnaIshranaZasladjivaci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'posebna-ishrana', 'zasladjivaci')
          const productsBySubCategoryApotekaPosebnaIshranaSportisti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'posebna-ishrana', 'sportisti')
          const productsBySubCategoryApotekaPosebnaIshranaBombone: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'posebna-ishrana', 'bombone')


          return [
                    ...productsBySubCategoryApotekaPosebnaIshranaKase,
                    ...productsBySubCategoryApotekaPosebnaIshranaSejkovi,
                    ...productsBySubCategoryApotekaPosebnaIshranaZasladjivaci,
                    ...productsBySubCategoryApotekaPosebnaIshranaSportisti,
                    ...productsBySubCategoryApotekaPosebnaIshranaBombone
          ]
}

export const getAllSubCategoriesFromApotekaPutnaApoteka = async () => {

          const productsBySubCategoryApotekaPutnaApotekaDehidratacija: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'putna-apoteka', 'dehidratacija')
          const productsBySubCategoryApotekaPutnaApotekaDijareja: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'putna-apoteka', 'dijareja')
          const productsBySubCategoryApotekaPutnaApotekaMucnina: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'putna-apoteka', 'mucnina')
          const productsBySubCategoryApotekaPutnaApotekaAutoApoteka: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'putna-apoteka', 'auto-apoteka')


          return [
                    ...productsBySubCategoryApotekaPutnaApotekaDehidratacija,
                    ...productsBySubCategoryApotekaPutnaApotekaDijareja,
                    ...productsBySubCategoryApotekaPutnaApotekaMucnina,
                    ...productsBySubCategoryApotekaPutnaApotekaAutoApoteka,
          ]
}

export const getAllSubCategoriesFromApotekaStomacneTegobe = async () => {

          const productsBySubCategoryApotekaStomacneTegobeNadostGasovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'stomacne-tekobe', 'nadutost-i-gasovi')
          const productsBySubCategoryApotekaStomacneTegobeZatvor: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'stomacne-tekobe', 'zatvor')
          const productsBySubCategoryApotekaStomacneTegobeDijareja: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'stomacne-tekobe', 'dijareja')
          const productsBySubCategoryApotekaStomacneTegobeIritabilniKolon: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'stomacne-tekobe', 'iritabilni-kolon')
          const productsBySubCategoryApotekaStomacneTegobeOtezanoVarenjeGorusica: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'stomacne-tekobe', 'otezano-varenje-i-gorusica')

          return [
                    ...productsBySubCategoryApotekaStomacneTegobeNadostGasovi,
                    ...productsBySubCategoryApotekaStomacneTegobeZatvor,
                    ...productsBySubCategoryApotekaStomacneTegobeDijareja,
                    ...productsBySubCategoryApotekaStomacneTegobeIritabilniKolon,
                    ...productsBySubCategoryApotekaStomacneTegobeOtezanoVarenjeGorusica
          ]
}

export const getAllSubCategoriesFromApotekaZdravoSrceCirkulacija = async () => {

          const productsBySubCategoryApotekaZdravoSrceCirkulacijaOralniPreparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'zdravo-srce-i-cirkulacija', 'oralni-preparati')
          const productsBySubCategoryApotekaZdravoSrceCirkulacijaPrimenaNaKozi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'zdravo-srce-i-cirkulacija', 'primena-na-kozi')

          return [
                    ...productsBySubCategoryApotekaZdravoSrceCirkulacijaOralniPreparati,
                    ...productsBySubCategoryApotekaZdravoSrceCirkulacijaPrimenaNaKozi,
          ]
}

export const getAllSubCategoriesFromApotekaVitaminiMinerali = async () => {

          const productsBySubCategoryApotekaVitaminiMineraliA: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'vitamin-a')
          const productsBySubCategoryApotekaVitaminiMineraliB: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'vitamin-b')
          const productsBySubCategoryApotekaVitaminiMineraliC: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'vitamin-c')
          const productsBySubCategoryApotekaVitaminiMineraliD: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'vitamin-d')
          const productsBySubCategoryApotekaVitaminiMineraliK: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'vitamin-k')
          const productsBySubCategoryApotekaVitaminiMineraliCink: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'cink')
          const productsBySubCategoryApotekaVitaminiMineraliKalijum: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'kalijum')
          const productsBySubCategoryApotekaVitaminiMineraliKalcijum: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'kalcijum')
          const productsBySubCategoryApotekaVitaminiMineraliHrom: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'hrom')
          const productsBySubCategoryApotekaVitaminiMineraliMagnezijum: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'magnezijum')
          const productsBySubCategoryApotekaVitaminiMineraliSelen: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'selen')
          const productsBySubCategoryApotekaVitaminiMineraliGvozdje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'gvozdje')
          const productsBySubCategoryApotekaVitaminiMineraliBakar: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'bakar')
          const productsBySubCategoryApotekaVitaminiMineraliBor: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'bor')
          const productsBySubCategoryApotekaVitaminiMineraliFluor: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'fluor')
          const productsBySubCategoryApotekaVitaminiMineraliFosfor: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'fosfor')
          const productsBySubCategoryApotekaVitaminiMineraliKompleksiVitamina: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'kompleksi-vitamina-i-minerala')
          const productsBySubCategoryApotekaVitaminiMineraliRibljaUlja: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'riblja-ulja')
          const productsBySubCategoryApotekaVitaminiMineraliDeca: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'deca')
          const productsBySubCategoryApotekaVitaminiMineraliSportisti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'sportisti')
          const productsBySubCategoryApotekaVitaminiMineraliTrudnice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'trudnice')
          const productsBySubCategoryApotekaVitaminiMineraliStariji: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'vitamini-i-minerali', 'stariji')


          return [
                    ...productsBySubCategoryApotekaVitaminiMineraliA,
                    ...productsBySubCategoryApotekaVitaminiMineraliB,
                    ...productsBySubCategoryApotekaVitaminiMineraliC,
                    ...productsBySubCategoryApotekaVitaminiMineraliD,
                    ...productsBySubCategoryApotekaVitaminiMineraliK,
                    ...productsBySubCategoryApotekaVitaminiMineraliCink,
                    ...productsBySubCategoryApotekaVitaminiMineraliKalijum,
                    ...productsBySubCategoryApotekaVitaminiMineraliKalcijum,
                    ...productsBySubCategoryApotekaVitaminiMineraliHrom,
                    ...productsBySubCategoryApotekaVitaminiMineraliMagnezijum,
                    ...productsBySubCategoryApotekaVitaminiMineraliSelen,
                    ...productsBySubCategoryApotekaVitaminiMineraliGvozdje,
                    ...productsBySubCategoryApotekaVitaminiMineraliBakar,
                    ...productsBySubCategoryApotekaVitaminiMineraliBor,
                    ...productsBySubCategoryApotekaVitaminiMineraliFluor,
                    ...productsBySubCategoryApotekaVitaminiMineraliFosfor,
                    ...productsBySubCategoryApotekaVitaminiMineraliKompleksiVitamina,
                    ...productsBySubCategoryApotekaVitaminiMineraliRibljaUlja,
                    ...productsBySubCategoryApotekaVitaminiMineraliDeca,
                    ...productsBySubCategoryApotekaVitaminiMineraliSportisti,
                    ...productsBySubCategoryApotekaVitaminiMineraliTrudnice,
                    ...productsBySubCategoryApotekaVitaminiMineraliStariji
          ]
}

export const getAllSubCategoriesFromApotekaPreparatiZaKozu = async () => {

          const productsBySubCategoryApotekaPreparatiZaKozuIritacije: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'iritacije')
          const productsBySubCategoryApotekaPreparatiZaKozuOziljciStrije: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'oziljci-i-strije')
          const productsBySubCategoryApotekaPreparatiZaKozuHemoroidi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'hemoroidi')
          const productsBySubCategoryApotekaPreparatiZaKozuCirkulacija: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'problemi-sa-cirkulacijom')
          const productsBySubCategoryApotekaPreparatiZaKozuIntimnaNega: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'intimna-nega')
          const productsBySubCategoryApotekaPreparatiZaKozuOpekotine: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'opekotine')
          const productsBySubCategoryApotekaPreparatiZaKozuSportskePovrede: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'sportske-povrede')
          const productsBySubCategoryApotekaPreparatiZaKozuAntiseptici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'antiseptici')
          const productsBySubCategoryApotekaPreparatiZaKozuGljivice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'gljivice')
          const productsBySubCategoryApotekaPreparatiZaKozuRozacea: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'rozacea')
          const productsBySubCategoryApotekaPreparatiZaKozuVitligo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'vitligo')
          const productsBySubCategoryApotekaPreparatiZaKozuBoginje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'boginje')
          const productsBySubCategoryApotekaPreparatiZaKozuHerpes: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'herpes')
          const productsBySubCategoryApotekaPreparatiZaKozuDermatitis: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'seboreicni-dermatitis')
          const productsBySubCategoryApotekaPreparatiZaKozuZuljevi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'zuljevi-kurje-oci-bradavice')
          const productsBySubCategoryApotekaPreparatiZaKozuEkcem: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'ekcem-psorijaza')
          const productsBySubCategoryApotekaPreparatiZaKozuSuvaKoza: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'suva-atopijska-koza')
          const productsBySubCategoryApotekaPreparatiZaKozuAnestetici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'lokalni-anestetici')
          const productsBySubCategoryApotekaPreparatiZaKozuPovrsinskeRane: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'preparati-za-primenu-na-kozi', 'povrsinske-rane')

          return [
                    ...productsBySubCategoryApotekaPreparatiZaKozuIritacije,
                    ...productsBySubCategoryApotekaPreparatiZaKozuOziljciStrije,
                    ...productsBySubCategoryApotekaPreparatiZaKozuHemoroidi,
                    ...productsBySubCategoryApotekaPreparatiZaKozuCirkulacija,
                    ...productsBySubCategoryApotekaPreparatiZaKozuIntimnaNega,
                    ...productsBySubCategoryApotekaPreparatiZaKozuOpekotine,
                    ...productsBySubCategoryApotekaPreparatiZaKozuSportskePovrede,
                    ...productsBySubCategoryApotekaPreparatiZaKozuAntiseptici,
                    ...productsBySubCategoryApotekaPreparatiZaKozuGljivice,
                    ...productsBySubCategoryApotekaPreparatiZaKozuRozacea,
                    ...productsBySubCategoryApotekaPreparatiZaKozuVitligo,
                    ...productsBySubCategoryApotekaPreparatiZaKozuBoginje,
                    ...productsBySubCategoryApotekaPreparatiZaKozuHerpes,
                    ...productsBySubCategoryApotekaPreparatiZaKozuDermatitis,
                    ...productsBySubCategoryApotekaPreparatiZaKozuZuljevi,
                    ...productsBySubCategoryApotekaPreparatiZaKozuEkcem,
                    ...productsBySubCategoryApotekaPreparatiZaKozuSuvaKoza,
                    ...productsBySubCategoryApotekaPreparatiZaKozuAnestetici,
                    ...productsBySubCategoryApotekaPreparatiZaKozuPovrsinskeRane,
          ]
}

export const getAllSubCategoriesFromApotekaOciUsi = async () => {

          const productsBySubCategoryApotekaOciUsiTablete: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'tablete-kapsule-rastvori')
          // const productsBySubCategoryApotekaOciUsiHigijena: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'higijena-nega')
          // const productsBySubCategoryApotekaOciUsiKapi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'kapi')
          // const productsBySubCategoryApotekaOciUsiMasti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'masti')
          // const productsBySubCategoryApotekaOciUsiNaocare: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'naocare')
          // const productsBySubCategoryApotekaOciUsiTecnosti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'tecnosti-i-kutije-za-sociva')
          // const productsBySubCategoryApotekaOciUsiCepovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'cepovi-za-usi')
          // const productsBySubCategoryApotekaOciUsiSprejevi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'sprejevi')

          return [
                    ...productsBySubCategoryApotekaOciUsiTablete,
                    // ...productsBySubCategoryApotekaOciUsiHigijena,
                    // ...productsBySubCategoryApotekaOciUsiKapi,
                    // ...productsBySubCategoryApotekaOciUsiMasti,
                    // ...productsBySubCategoryApotekaOciUsiNaocare,
                    // ...productsBySubCategoryApotekaOciUsiTecnosti,
                    // ...productsBySubCategoryApotekaOciUsiCepovi,
                    // ...productsBySubCategoryApotekaOciUsiSprejevi
          ]
}

export const getAllSubCategoriesFromApotekaPrvaPomoc = async () => {

          const productsBySubCategoryApotekaPrvaPomocAntiseptici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'antiseptici')
          const productsBySubCategoryApotekaPrvaPomocFlasteri: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'flasteri')
          const productsBySubCategoryApotekaPrvaPomocZavoji: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'oci-i-usi', 'zavojni-materijal')

          return [
                    ...productsBySubCategoryApotekaPrvaPomocAntiseptici,
                    ...productsBySubCategoryApotekaPrvaPomocFlasteri,
                    ...productsBySubCategoryApotekaPrvaPomocZavoji,
          ]
}

export const getAllSubCategoriesFromPrirodnaKozmetikaLice = async () => {

          const productsBySubCategoryPrirodnaKozmetikaLiceHigijena: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'higijena-lica')
          const productsBySubCategoryPrirodnaKozmetikaLiceTrepavice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'trepavice-i-obrve')
          const productsBySubCategoryPrirodnaKozmetikaLiceHidratacija: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'hidratacija')

          return [
                    ...productsBySubCategoryPrirodnaKozmetikaLiceHigijena,
                    ...productsBySubCategoryPrirodnaKozmetikaLiceTrepavice,
                    ...productsBySubCategoryPrirodnaKozmetikaLiceHidratacija
          ]
}

export const getAllSubCategoriesFromPrirodnaKozmetikaTelo = async () => {

          const productsBySubCategoryPrirodnaKozmetikaTeloOstecenbaKoza: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'telo', 'ostecena-koza')
          const productsBySubCategoryPrirodnaKozmetikaTeloPilinzi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'telo', 'pilinzi')
          const productsBySubCategoryPrirodnaKozmetikaTeloHidratacijaCelulit: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'telo', 'celulit-i-strije')

          return [
                    ...productsBySubCategoryPrirodnaKozmetikaTeloOstecenbaKoza,
                    ...productsBySubCategoryPrirodnaKozmetikaTeloPilinzi,
                    ...productsBySubCategoryPrirodnaKozmetikaTeloHidratacijaCelulit
          ]
}

export const getAllSubCategoriesFromPrirodnaKozmetikaKosaKozaGlave = async () => {

          const productsBySubCategoryPrirodnaKozmetikaKosaKozaGlaveOpadanjeKose: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'kosa-i-koza-glave', 'opadanje-kose')
          const productsBySubCategoryPrirodnaKozmetikaKosaKozaGlaveNegaKoseNaSuncu: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'kosa-i-koza-glave', 'nega-kose-na-suncu')
          const productsBySubCategoryPrirodnaKozmetikaKosaKozaGlaveOsetljivaKozaGlave: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'kosa-i-koza-glave', 'osetljiva-koza-glave')

          return [
                    ...productsBySubCategoryPrirodnaKozmetikaKosaKozaGlaveOpadanjeKose,
                    ...productsBySubCategoryPrirodnaKozmetikaKosaKozaGlaveNegaKoseNaSuncu,
                    ...productsBySubCategoryPrirodnaKozmetikaKosaKozaGlaveOsetljivaKozaGlave
          ]
}

export const getAllSubCategoriesFromPrirodnaKozmetikaBebeDeca = async () => {

          const productsBySubCategoryPrirodnaKozmetikaBebeDecaPranje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'bebe-i-deca', 'pranje')
          const productsBySubCategoryPrirodnaKozmetikaBebeDecaNega: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'bebe-i-deca', 'nega')
          const productsBySubCategoryPrirodnaKozmetikaBebeDecaSuncanje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'bebe-i-deca', 'suncanje')

          return [
                    ...productsBySubCategoryPrirodnaKozmetikaBebeDecaPranje,
                    ...productsBySubCategoryPrirodnaKozmetikaBebeDecaNega,
                    ...productsBySubCategoryPrirodnaKozmetikaBebeDecaSuncanje
          ]
}

export const getAllSubCategoriesFromLepotaNegaPriborZaNegu = async () => {

          const productsBySubCategoryLepotaNegaPriborZaNeguCetkeCesljevi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'pribor-za-negu', 'cetke-i-cesljevi')
          const productsBySubCategoryLepotaNegaPriborZaNeguMakazice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'pribor-za-negu', 'makazice-gricklalice-turpije-i-pincete')
          const productsBySubCategoryLepotaNegaPriborZaNeguOgledala: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'pribor-za-negu', 'ogledala')

          return [
                    ...productsBySubCategoryLepotaNegaPriborZaNeguCetkeCesljevi,
                    ...productsBySubCategoryLepotaNegaPriborZaNeguMakazice,
                    ...productsBySubCategoryLepotaNegaPriborZaNeguOgledala
          ]
}

export const getAllSubCategoriesFromLepotaNegaLice = async () => {

          const productsBySubCategoryLepotaNegaLiceBlaznice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'blaznice-i-tuferi')
          const productsBySubCategoryLepotaNegaLiceCetkice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'cetkice-i-aplikatori-za-sminku')
          const productsBySubCategoryLepotaNegaLiceGelovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'gelovi-i-pene-za-lice')
          const productsBySubCategoryLepotaNegaLiceTrepavice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'vestacke-trepavice')
          const productsBySubCategoryLepotaNegaLiceSminka: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'sminka-za-lice')
          const productsBySubCategoryLepotaNegaLiceSminkaZaOci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('prirodna-kozmetika', 'lice', 'sminka-za-oci-i-obrve')

          return [
                    ...productsBySubCategoryLepotaNegaLiceBlaznice,
                    ...productsBySubCategoryLepotaNegaLiceCetkice,
                    ...productsBySubCategoryLepotaNegaLiceGelovi,
                    ...productsBySubCategoryLepotaNegaLiceTrepavice,
                    ...productsBySubCategoryLepotaNegaLiceSminka,
                    ...productsBySubCategoryLepotaNegaLiceSminkaZaOci

          ]
}

export const getAllSubCategoriesFromLepotaNegaTelo = async () => {

          const productsBySubCategoryLepotaNegaTeloGrudi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'telo', 'nega-grudi')
          const productsBySubCategoryLepotaNegaTeloPiling: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'telo', 'piling')
          const productsBySubCategoryLepotaNegaTeloGelovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'telo', 'gelovi-za-tusiranje-kupke-i-soli')
          const productsBySubCategoryLepotaNegaTeloPene: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'telo', 'pene-i-pilinzi-za-kupanje')
          const productsBySubCategoryLepotaNegaTeloMleka: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'telo', 'mleka-kreme-i-lozioni')
          const productsBySubCategoryLepotaNegaTeloUlja: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'telo', 'ulja-za-telo')

          return [
                    ...productsBySubCategoryLepotaNegaTeloGrudi,
                    ...productsBySubCategoryLepotaNegaTeloPiling,
                    ...productsBySubCategoryLepotaNegaTeloGelovi,
                    ...productsBySubCategoryLepotaNegaTeloPene,
                    ...productsBySubCategoryLepotaNegaTeloMleka,
                    ...productsBySubCategoryLepotaNegaTeloUlja,

          ]
}

export const getAllSubCategoriesFromLepotaNegaIntimnaNega = async () => {

          const productsBySubCategoryLepotaNegaIntimnaNegaHigijena: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'intimna-nega', 'higijena')
          const productsBySubCategoryLepotaNegaIntimnaNegaTamponi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'intimna-nega', 'tamponi')
          const productsBySubCategoryLepotaNegaIntimnaNegaUlosci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'intimna-nega', 'ulosci')
          const productsBySubCategoryLepotaNegaIntimnaNegaInkontinencija: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'intimna-nega', 'ulosci-za-inkontinenciju')
          const productsBySubCategoryLepotaNegaIntimnaNegaVaginalete: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'intimna-nega', 'vaginalete-kreme-gelovi')
          const productsBySubCategoryLepotaNegaIntimnaNegaLubrikanti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'intimna-nega', 'lubrikanti')


          return [
                    ...productsBySubCategoryLepotaNegaIntimnaNegaHigijena,
                    ...productsBySubCategoryLepotaNegaIntimnaNegaTamponi,
                    ...productsBySubCategoryLepotaNegaIntimnaNegaUlosci,
                    ...productsBySubCategoryLepotaNegaIntimnaNegaInkontinencija,
                    ...productsBySubCategoryLepotaNegaIntimnaNegaVaginalete,
                    ...productsBySubCategoryLepotaNegaIntimnaNegaLubrikanti
          ]
}

export const getAllSubCategoriesFromLepotaNegaOralnaHigijena = async () => {

          const productsBySubCategoryLepotaNegaOralnaHigijenaPastaZaZube: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'oralna-higijena', 'paste-za-zube')
          const productsBySubCategoryLepotaNegaOralnaHigijenaCetkice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'oralna-higijena', 'cetkice-i-konac-za-zube')
          const productsBySubCategoryLepotaNegaOralnaHigijenaProteze: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'oralna-higijena', 'proteze-i-kutije-za-zube')
          const productsBySubCategoryLepotaNegaOralnaHigijenaRastvori: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'oralna-higijena', 'rastvori-za-usta')
          const productsBySubCategoryLepotaNegaOralnaHigijenaAfte: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'oralna-higijena', 'afte')
          const productsBySubCategoryLepotaNegaOralnaHigijenaOstalo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'oralna-higijena', 'ostalo')

          return [
                    ...productsBySubCategoryLepotaNegaOralnaHigijenaPastaZaZube,
                    ...productsBySubCategoryLepotaNegaOralnaHigijenaCetkice,
                    ...productsBySubCategoryLepotaNegaOralnaHigijenaProteze,
                    ...productsBySubCategoryLepotaNegaOralnaHigijenaRastvori,
                    ...productsBySubCategoryLepotaNegaOralnaHigijenaAfte,
                    ...productsBySubCategoryLepotaNegaOralnaHigijenaOstalo
          ]
}

export const getAllSubCategoriesFromLepotaNegaKosaKozaGlave = async () => {

          const productsBySubCategoryLepotaNegaKosaKozaGlaveSprejevi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'kosa-i-koza-glave', 'sprejevi-za-suvo-pranje-kose')
          const productsBySubCategoryLepotaNegaKosaKozaGlaveSamponi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'kosa-i-koza-glave', 'samponi-za-kosu')
          const productsBySubCategoryLepotaNegaKosaKozaGlaveRegeneratori: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'kosa-i-koza-glave', 'regeneratori-i-pakovanja-za-kosu')
          const productsBySubCategoryLepotaNegaKosaKozaGlaveUlje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'kosa-i-koza-glave', 'ulje-za-kosu')
          const productsBySubCategoryLepotaNegaKosaKozaGlaveKapi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'kosa-i-koza-glave', 'kapi-i-ampule-za-kosu')

          return [
                    ...productsBySubCategoryLepotaNegaKosaKozaGlaveSprejevi,
                    ...productsBySubCategoryLepotaNegaKosaKozaGlaveSamponi,
                    ...productsBySubCategoryLepotaNegaKosaKozaGlaveRegeneratori,
                    ...productsBySubCategoryLepotaNegaKosaKozaGlaveUlje,
                    ...productsBySubCategoryLepotaNegaKosaKozaGlaveKapi
          ]
}

export const getAllSubCategoriesFromLepotaNegaRuke = async () => {

          const productsBySubCategoryLepotaNegaRukeKreme: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'ruke', 'kreme-za-ruke')
          const productsBySubCategoryLepotaNegaRukeLak: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'ruke', 'lak-za-nokte')
          const productsBySubCategoryLepotaNegaRukeNokti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'ruke', 'nega-noktiju')
          const productsBySubCategoryLepotaNegaRukeSkidaci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'ruke', 'skidaci-lakova-za-nokte')

          return [
                    ...productsBySubCategoryLepotaNegaRukeKreme,
                    ...productsBySubCategoryLepotaNegaRukeLak,
                    ...productsBySubCategoryLepotaNegaRukeNokti,
                    ...productsBySubCategoryLepotaNegaRukeSkidaci
          ]
}

export const getAllSubCategoriesFromLepotaNegaStopala = async () => {

          const productsBySubCategoryLepotaNegaStopalaNega: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'stopala', 'nega')
          const productsBySubCategoryLepotaNegaStopalaDezodoransi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'stopala', 'dezodoransi')
          const productsBySubCategoryLepotaNegaStopalaZuljevi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'stopala', 'zuljevi-kurije-oci-urastanje-noktiju')
          const productsBySubCategoryLepotaNegaStopalaSkidaci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'stopala', 'skidaci-lakova-za-nokte')

          return [
                    ...productsBySubCategoryLepotaNegaStopalaNega,
                    ...productsBySubCategoryLepotaNegaStopalaDezodoransi,
                    ...productsBySubCategoryLepotaNegaStopalaZuljevi,
                    ...productsBySubCategoryLepotaNegaStopalaSkidaci,
          ]
}

export const getAllSubCategoriesFromLepotaNegaBebe = async () => {

          const productsBySubCategoryLepotaNegaBebeHigijena: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'bebe-i-deca', 'higijena')
          const productsBySubCategoryLepotaNegaBebeNega: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'bebe-i-deca', 'nega')


          return [
                    ...productsBySubCategoryLepotaNegaBebeHigijena,
                    ...productsBySubCategoryLepotaNegaBebeNega,
          ]
}

export const getAllSubCategoriesFromLepotaNegaZastitaOdSunca = async () => {

          const productsBySubCategoryLepotaNegaZastitaOdSuncaOdrasli: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'zastita-od-sunca', 'odrasli')
          const productsBySubCategoryLepotaNegaZastitaOdSuncaBebeDeca: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('lepota-i-nega', 'zastita-od-sunca', 'bebe-i-deca')


          return [
                    ...productsBySubCategoryLepotaNegaZastitaOdSuncaOdrasli,
                    ...productsBySubCategoryLepotaNegaZastitaOdSuncaBebeDeca,
          ]
}

export const getAllSubCategoriesFromBebiProgramBebiApoteka = async () => {

          const productsBySubCategoryBebiProgramBebiApotekaBoginje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'boginje')
          const productsBySubCategoryBebiProgramBebiApotekaElektroliti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'elektroliti')
          const productsBySubCategoryBebiProgramBebiApotekaGrcevi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'grcevi')
          const productsBySubCategoryBebiProgramBebiApotekaNosic: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'higijena-nosica')
          const productsBySubCategoryBebiProgramBebiApotekaNokti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'grickanje-noktiju')
          const productsBySubCategoryBebiProgramBebiApotekaOci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'higijena-ociju')
          const productsBySubCategoryBebiProgramBebiApotekaImunitet: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'imunitet-i-apetit')
          const productsBySubCategoryBebiProgramBebiApotekaVitamini: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'vitamini')
          const productsBySubCategoryBebiProgramBebiApotekaZubici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'zubici')
          const productsBySubCategoryBebiProgramBebiApotekaVaske: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-apoteka', 'vaske')

          return [
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginje,
                    ...productsBySubCategoryBebiProgramBebiApotekaElektroliti,
                    ...productsBySubCategoryBebiProgramBebiApotekaGrcevi,
                    ...productsBySubCategoryBebiProgramBebiApotekaNosic,
                    ...productsBySubCategoryBebiProgramBebiApotekaNokti,
                    ...productsBySubCategoryBebiProgramBebiApotekaOci,
                    ...productsBySubCategoryBebiProgramBebiApotekaImunitet,
                    ...productsBySubCategoryBebiProgramBebiApotekaVitamini,
                    ...productsBySubCategoryBebiProgramBebiApotekaZubici,
                    ...productsBySubCategoryBebiProgramBebiApotekaVaske
          ]
}

export const getAllSubCategoriesFromBebiProgramBebiKozmetika = async () => {

          const productsBySubCategoryBebiProgramBebiApotekaBoginjeDeterdzenti: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'deterdzenti-i-omeksivaci')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeMlekaLosioni: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'mleka-losioni-ulja')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeKupke: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'kupke-i-samponi')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeMicelarneVode: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'micelarne-vode')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjePuderi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'puderi')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeKremeZaLiceITelo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'kreme-za-lice-i-telo')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeKremeOjed: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'kreme-protiv-ojeda')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeSapuni: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'sapuni')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeBalzami: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'balzami-za-usne')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeToaletneVode: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'toaletne-vode-dezodoransi')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeTuferi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'tuferi-i-vate')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeStapici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'stapici')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjeVlazne: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'vlazne-maramice')
          const productsBySubCategoryBebiProgramBebiApotekaBoginjePasteCetkice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'bebi-kozmetika', 'paste-i-cetkice-za-zube')

          return [
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeDeterdzenti,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeMlekaLosioni,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeKupke,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeMicelarneVode,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjePuderi,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeKremeZaLiceITelo,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeKremeOjed,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeSapuni,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeBalzami,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeToaletneVode,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeTuferi,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeStapici,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjeVlazne,
                    ...productsBySubCategoryBebiProgramBebiApotekaBoginjePasteCetkice
          ]
}

export const getAllSubCategoriesFromBebiProgramBebiOprema = async () => {

          const productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeKupatilo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'oprema-za-bebe', 'oprema-za-kupatilo')
          const productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebePrevijanje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'oprema-za-bebe', 'oprema-za-previjanje')
          const productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeKolica: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'oprema-za-bebe', 'kolica-i-dodaci')
          const productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeSedista: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'oprema-za-bebe', 'sedista')
          const productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeTricikli: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'oprema-za-bebe', 'tricikli-i-guralice')
          const productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeNosiljke: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'oprema-za-bebe', 'nosiljke')

          return [
                    ...productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeKupatilo,
                    ...productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebePrevijanje,
                    ...productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeKolica,
                    ...productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeSedista,
                    ...productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeTricikli,
                    ...productsBySubCategoryBebiProgramBebiApotekaOpremaZaBebeNosiljke,
          ]
}

export const getAllSubCategoriesFromBebiProgramFlasiceCucleZvecke = async () => {

          const productsBySubCategoryBebiProgramFlasiceCucleZveckeCucle: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'flasice-cucle-glodalice-zvecke', 'cucle')
          const productsBySubCategoryBebiProgramFlasiceCucleZveckeFlasice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'flasice-cucle-glodalice-zvecke', 'flasice')
          const productsBySubCategoryBebiProgramFlasiceCucleZveckeDodaci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'flasice-cucle-glodalice-zvecke', 'dodaci-za-cucle-i-flasice')
          const productsBySubCategoryBebiProgramFlasiceCucleZveckeTermios: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'flasice-cucle-glodalice-zvecke', 'termosi-i-termos-torbe')
          const productsBySubCategoryBebiProgramFlasiceCucleZveckeLazeDodaci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'flasice-cucle-glodalice-zvecke', 'laze-i-dodaci')
          const productsBySubCategoryBebiProgramFlasiceCucleZveckeGlodalice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'flasice-cucle-glodalice-zvecke', 'glodalice')
          const productsBySubCategoryBebiProgramFlasiceCucleZveckeZvecke: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'flasice-cucle-glodalice-zvecke', 'zvecke')

          return [
                    ...productsBySubCategoryBebiProgramFlasiceCucleZveckeCucle,
                    ...productsBySubCategoryBebiProgramFlasiceCucleZveckeFlasice,
                    ...productsBySubCategoryBebiProgramFlasiceCucleZveckeDodaci,
                    ...productsBySubCategoryBebiProgramFlasiceCucleZveckeTermios,
                    ...productsBySubCategoryBebiProgramFlasiceCucleZveckeLazeDodaci,
                    ...productsBySubCategoryBebiProgramFlasiceCucleZveckeGlodalice,
                    ...productsBySubCategoryBebiProgramFlasiceCucleZveckeZvecke
          ]
}

export const getAllSubCategoriesFromBebiProgramPelene = async () => {

          const productsBySubCategoryBebiProgramPeleneJednokratne: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'pelene', 'pelene-za-jednokratnu-upotrebu')
          const productsBySubCategoryBebiProgramPeleneOdvikavanje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'pelene', 'pelene-za-odvikavanje')
          const productsBySubCategoryBebiProgramPeleneKupanje: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'pelene', 'pelene-za-kupanje')
          const productsBySubCategoryBebiProgramPeleneTetra: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'pelene', 'tetra-pelene')

          return [
                    ...productsBySubCategoryBebiProgramPeleneJednokratne,
                    ...productsBySubCategoryBebiProgramPeleneOdvikavanje,
                    ...productsBySubCategoryBebiProgramPeleneKupanje,
                    ...productsBySubCategoryBebiProgramPeleneTetra
          ]
}

export const getAllSubCategoriesFromBebiProgramHrana = async () => {

          const productsBySubCategoryBebiProgramHranaLino: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'lino')
          const productsBySubCategoryBebiProgramHranaModilac: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'modilac')
          const productsBySubCategoryBebiProgramHranaNestle: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'nestle')
          const productsBySubCategoryBebiProgramHranaNutrino: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'nutrino')
          const productsBySubCategoryBebiProgramHranaBebelac: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'bebelac')
          const productsBySubCategoryBebiProgramHranaCelia: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'celia')
          const productsBySubCategoryBebiProgramHranaHipp: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'hipp')
          const productsBySubCategoryBebiProgramHranaHumana: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'humana')
          const productsBySubCategoryBebiProgramHranaNovalac: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'novalac')
          const productsBySubCategoryBebiProgramHranaJuvitana: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'juvitana')
          const productsBySubCategoryBebiProgramHranaMilupa: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'milupa')
          const productsBySubCategoryBebiProgramHranaAptamil: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'hrana-za-bebe', 'aptamil')

          return [
                    ...productsBySubCategoryBebiProgramHranaLino,
                    ...productsBySubCategoryBebiProgramHranaModilac,
                    ...productsBySubCategoryBebiProgramHranaNestle,
                    ...productsBySubCategoryBebiProgramHranaNutrino,
                    ...productsBySubCategoryBebiProgramHranaBebelac,
                    ...productsBySubCategoryBebiProgramHranaCelia,
                    ...productsBySubCategoryBebiProgramHranaHipp,
                    ...productsBySubCategoryBebiProgramHranaHumana,
                    ...productsBySubCategoryBebiProgramHranaNovalac,
                    ...productsBySubCategoryBebiProgramHranaJuvitana,
                    ...productsBySubCategoryBebiProgramHranaMilupa,
                    ...productsBySubCategoryBebiProgramHranaAptamil
          ]
}

export const getAllSubCategoriesFromBebiProgramTrudnice = async () => {

          const productsBySubCategoryBebiProgramTrudniceKozmetika: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'kozmetika-za-telo')
          const productsBySubCategoryBebiProgramTrudniceMrezasteGacice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'mrezaste-gacice')
          const productsBySubCategoryBebiProgramTrudniceNegaBradavica: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'nega-i-zastita-bradavica')
          const productsBySubCategoryBebiProgramTrudnicePojaseviGrudnjaci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'pojasevi-i-grudnjaci')
          const productsBySubCategoryBebiProgramTrudniceUlosciZaGrudi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'ulosci-za-grudi')
          const productsBySubCategoryBebiProgramTrudnicePumpice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'pumpice-za-izmlazavanje')
          const productsBySubCategoryBebiProgramTrudniceVestackeBradavice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'vestacke-bradavice-i-pumpice-za-bradavice')
          const productsBySubCategoryBebiProgramTrudniceDozeri: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'dozeri-za-mleko')
          const productsBySubCategoryBebiProgramTrudniceVitamisnkiPreparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'vitaminski-preparati')
          const productsBySubCategoryBebiProgramTrudniceCajevi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'trudnice-i-dojilje', 'cajevi-i-napici-za-trudnice-i-dojilje')

          return [
                    ...productsBySubCategoryBebiProgramTrudniceKozmetika,
                    ...productsBySubCategoryBebiProgramTrudniceMrezasteGacice,
                    ...productsBySubCategoryBebiProgramTrudniceNegaBradavica,
                    ...productsBySubCategoryBebiProgramTrudnicePojaseviGrudnjaci,
                    ...productsBySubCategoryBebiProgramTrudniceUlosciZaGrudi,
                    ...productsBySubCategoryBebiProgramTrudnicePumpice,
                    ...productsBySubCategoryBebiProgramTrudniceVestackeBradavice,
                    ...productsBySubCategoryBebiProgramTrudniceDozeri,
                    ...productsBySubCategoryBebiProgramTrudniceVitamisnkiPreparati,
                    ...productsBySubCategoryBebiProgramTrudniceCajevi
          ]
}

export const getAllSubCategoriesFromBebiProgramAparati = async () => {

          const productsBySubCategoryBebiProgramAparatiAlarmi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'aparati', 'alarmi')
          const productsBySubCategoryBebiProgramAparatiTermometri: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'aparati', 'termometri')
          const productsBySubCategoryBebiProgramAparatiBlenderi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'aparati', 'blenderi')
          const productsBySubCategoryBebiProgramAparatiGrejeci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'aparati', 'grejaci')
          const productsBySubCategoryBebiProgramAparatiSterilizatori: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'aparati', 'sterilizatori')
          const productsBySubCategoryBebiProgramAparatiAspiratoriZaNos: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('bebi-program', 'aparati', 'aspiratori-za-nos')

          return [
                    ...productsBySubCategoryBebiProgramAparatiAlarmi,
                    ...productsBySubCategoryBebiProgramAparatiTermometri,
                    ...productsBySubCategoryBebiProgramAparatiBlenderi,
                    ...productsBySubCategoryBebiProgramAparatiGrejeci,
                    ...productsBySubCategoryBebiProgramAparatiSterilizatori,
                    ...productsBySubCategoryBebiProgramAparatiAspiratoriZaNos
          ]
}

export const getAllSubCategoriesFromMedicinskiAparatiOpremaInhalatori = async () => {

          const productsBySubCategoryMedicinskiAparatiOpremaInhalatoriAparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'inhalatori', 'aparati')
          const productsBySubCategoryMedicinskiAparatiOpremaInhalatoriDodatnaOprema: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'inhalatori', 'dodatna-oprema')

          return [
                    ...productsBySubCategoryMedicinskiAparatiOpremaInhalatoriAparati,
                    ...productsBySubCategoryMedicinskiAparatiOpremaInhalatoriDodatnaOprema
          ]
}

export const getAllSubCategoriesFromMedicinskiAparatiOpremaMerenjePritiska = async () => {

          const productsBySubCategoryMedicinskiAparatiOpremaMerenjePritiskaAparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'merenje-pritiska', 'aparati')
          const productsBySubCategoryMedicinskiAparatiOpremaMerenjePritiskaDodatnaOprema: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'merenje-pritiska', 'dodatna-oprema')

          return [
                    ...productsBySubCategoryMedicinskiAparatiOpremaMerenjePritiskaAparati,
                    ...productsBySubCategoryMedicinskiAparatiOpremaMerenjePritiskaDodatnaOprema
          ]
}

export const getAllSubCategoriesFromMedicinskiAparatiOpremaMerenjeSecera = async () => {

          const productsBySubCategoryMedicinskiAparatiOpremaMerenjeSeceraAparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'merenje-secera', 'aparati')
          const productsBySubCategoryMedicinskiAparatiOpremaMerenjeSeceraDodatnaOprema: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'merenje-secera', 'dodatna-oprema')
          const productsBySubCategoryMedicinskiAparatiOpremaMerenjeSeceraTrakeLancete: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'merenje-secera', 'trake-i-lancete')

          return [
                    ...productsBySubCategoryMedicinskiAparatiOpremaMerenjeSeceraAparati,
                    ...productsBySubCategoryMedicinskiAparatiOpremaMerenjeSeceraDodatnaOprema,
                    ...productsBySubCategoryMedicinskiAparatiOpremaMerenjeSeceraTrakeLancete
          ]
}

export const getAllSubCategoriesFromOrtopedijaAntidekubitalnaPomagala = async () => {

          const productsBySubCategoryOrtopedijaAntidekubitalnaPomagalaJastuci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'antidekubitalna-pomagala', 'jastuci')
          const productsBySubCategoryOrtopedijaAntidekubitalnaPomagalaDuseci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('medicinski-aparati-i-oprema', 'antidekubitalna-pomagala', 'duseci')

          return [
                    ...productsBySubCategoryOrtopedijaAntidekubitalnaPomagalaJastuci,
                    ...productsBySubCategoryOrtopedijaAntidekubitalnaPomagalaDuseci
          ]
}

export const getAllSubCategoriesFromDezinfekcijaDezinsekcijaMaskeMaskeZaLice = async () => {

          const productsBySubCategoryDezinfekcijaDezinsekcijaMaskeMaskeZaLiceOdrasli: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('dezinfekcija-dezinsekcija-maske', 'maske-za-lice', 'odrasli')
          const productsBySubCategoryDezinfekcijaDezinsekcijaMaskeMaskeZaLiceDeca: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('dezinfekcija-dezinsekcija-maske', 'maske-za-lice', 'deca')

          return [
                    ...productsBySubCategoryDezinfekcijaDezinsekcijaMaskeMaskeZaLiceOdrasli,
                    ...productsBySubCategoryDezinfekcijaDezinsekcijaMaskeMaskeZaLiceDeca
          ]
}

export const getAllSubCategoriesFromObucaCarapeUlosciDeca = async () => {

          const productsBySubCategoryObucaCarapeUlosciDecaDecaci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('obuca-carape-ulosci', 'deca', 'decaci')
          const productsBySubCategoryObucaCarapeUlosciDecaDevojcice: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('obuca-carape-ulosci', 'deca', 'devojcice')

          return [
                    ...productsBySubCategoryObucaCarapeUlosciDecaDecaci,
                    ...productsBySubCategoryObucaCarapeUlosciDecaDevojcice
          ]
}

export const getAllSubCategoriesFromObucaCarapeUlosciOdrasli = async () => {

          const productsBySubCategoryObucaCarapeUlosciOdrasliMuskarci: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('obuca-carape-ulosci', 'odrasli', 'muskarci')
          const productsBySubCategoryObucaCarapeUlosciOdrasliZene: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('obuca-carape-ulosci', 'odrasli', 'zene')

          return [
                    ...productsBySubCategoryObucaCarapeUlosciOdrasliMuskarci,
                    ...productsBySubCategoryObucaCarapeUlosciOdrasliZene
          ]
}