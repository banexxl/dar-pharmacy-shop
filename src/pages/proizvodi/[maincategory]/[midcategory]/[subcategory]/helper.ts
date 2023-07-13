import productsServices from "@/services/product.services"

export const getAllSubCategoriesFromApotekaAlergije = async () => {

          const productsBySubCategoryApotekaAlergijeKapsuleTablete: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'kapsule-i-tablete')
          const productsBySubCategoryApotekaAlergijeSprejeviZaNos: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'sprejevi-za-nos')
          const productsBySubCategoryApotekaAlergijeMastiIGelovi: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'masti-gelovi')
          const productsBySubCategoryApotekaAlergijeIrigacioniSet: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'alergije', 'irigacioni-set')

          return [
                    ...productsBySubCategoryApotekaAlergijeKapsuleTablete,
                    ...productsBySubCategoryApotekaAlergijeSprejeviZaNos,
                    ...productsBySubCategoryApotekaAlergijeMastiIGelovi,
                    ...productsBySubCategoryApotekaAlergijeIrigacioniSet
          ]
}

export const getAllSubCategoriesFromApotekaAnemije = async () => {

          const productsBySubCategoryApotekaAnemijeFolanaKiselina: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'anemije', 'folna-kiselina-i-vitamini')
          const productsBySubCategoryApotekaAnemijeBiljniPreparati: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'anemije', 'biljni-preparati')
          const productsBySubCategoryApotekaAnemijePreparatiGvozdja: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'anemije', 'preparati-gvozda')

          return [
                    ...productsBySubCategoryApotekaAnemijeFolanaKiselina,
                    ...productsBySubCategoryApotekaAnemijeBiljniPreparati,
                    ...productsBySubCategoryApotekaAnemijePreparatiGvozdja,
          ]
}

export const getAllSubCategoriesFromApotekaBol = async () => {

          const productsBySubCategoryApotekaBolUGrlu: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'bol', 'bol-u-grlu')
          const productsBySubCategoryApotekaBolMenstrualni: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'bol', 'menstrualni-bolovi')
          const productsBySubCategoryApotekaBolKostiMisici: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'bol', 'bolovi-u-kostima-i-misicima')

          return [
                    ...productsBySubCategoryApotekaBolUGrlu,
                    ...productsBySubCategoryApotekaBolMenstrualni,
                    ...productsBySubCategoryApotekaBolKostiMisici,
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

export const getAllSubCategoriesFromApotekaHolesterolTrigliceridi = async () => {

          const productsBySubCategoryApotekaHolesterolTrigliceridiOmegaMasneKiseline: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'holesterol-i-trigliceridi', 'omega-masne-kiseline')
          const productsBySubCategoryApotekaHolesterolTrigliceridiOstalo: any = await productsServices().getProductsByMainCategoryMidCategorySubCategory('apoteka', 'holesterol-i-trigliceridi', 'ostalo')

          return [
                    ...productsBySubCategoryApotekaHolesterolTrigliceridiOmegaMasneKiseline,
                    ...productsBySubCategoryApotekaHolesterolTrigliceridiOstalo,
          ]
}