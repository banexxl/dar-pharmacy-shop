import { link } from "fs";

export const AccordionPanels = [
     {
          id: 'svi-/proizvodi',
          title: 'Proizvodi',
          link: '/proizvodi-proizvodjac-kategorija/proizvodi',
          children: [
               {
                    id: 'prirodna-kozmetika',
                    link: '/proizvodi/prirodna-kozmetika',
                    title: 'Prirodna kozmetika',
                    children: [
                         {
                              id: 'prirodna-kozmetika-gana',
                              title: 'Gana kozmetika',
                              link: '/proizvodi-proizvodjac-kategorija/gana-kozmetika/prirodna-kozmetika',
                         },
                         {
                              id: 'prirodna-kozmetika-gloria',
                              title: 'Gloria',
                              link: '/proizvodi-proizvodjac-kategorija/gloria/prirodna-kozmetika',
                         },
                         {
                              id: 'prirodna-kozmetika-majana',
                              title: 'Majana',
                              link: '/proizvodi-proizvodjac-kategorija/majana/prirodna-kozmetika',
                         },
                         {
                              id: 'prirodna-kozmetika-viviscal',
                              title: 'Vivivscal',
                              link: '/proizvodi-proizvodjac-kategorija/viviscal/prirodna-kozmetika',
                         },
                         {
                              id: 'prirodna-kozmetika-herbalab',
                              title: 'Herbalab',
                              link: '/proizvodi-proizvodjac-kategorija/herbalab/prirodna-kozmetika',
                         },
                         {
                              id: 'prirodna-kozmetika-medical-plants',
                              link: '/proizvodi-proizvodjac-kategorija/medical-plants/prirodna-kozmetika',
                              title: 'Medical plants'
                         },
                         {
                              id: 'prirodna-kozmetika-gamarde',
                              link: '/proizvodi-proizvodjac-kategorija/gamarde/prirodna-kozmetika',
                              title: 'Gamarde'
                         },
                         {
                              id: 'prirodna-kozmetika-aronica',
                              link: '/proizvodi-proizvodjac-kategorija/aronica/prirodna-kozmetika',
                              title: 'Aronica'
                         },
                         {
                              id: 'prirodna-kozmetika-hedera-vita',
                              link: '/proizvodi-proizvodjac-kategorija/hedera-vita/prirodna-kozmetika',
                              title: 'Hedera Vita'
                         },
                         {
                              id: 'prirodna-kozmetika-fitaky',
                              link: '/proizvodi-proizvodjac-kategorija/fitaky/prirodna-kozmetika',
                              title: 'Fitaky'
                         },
                         {
                              id: 'prirodna-kozmetika-weleda',
                              link: '/proizvodi-proizvodjac-kategorija/weleda/prirodna-kozmetika',
                              title: 'Weleda'
                         },
                         {
                              id: 'prirodna-kozmetika-phyto',
                              title: 'Phyto',
                              link: '/proizvodi-proizvodjac-kategorija/phyto/prirodna-kozmetika',
                         },
                    ]
               },
               {

                    id: 'sve-za-bebe',
                    title: 'Sve za bebe',
                    link: '/proizvodi/sve-za-bebe',
                    children: [
                         {
                              id: 'bebi-prirodna-kozmetika',
                              link: '/proizvodi/bebi-prirodna-kozmetika',
                              title: 'Bebi prirodna kozmetika',
                              children: [
                                   {
                                        id: 'bebi-prirodna-kozmetika-fitaky',
                                        title: 'Fitaky',
                                        link: '/proizvodi-proizvodjac-kategorija/fitaky/bebi-prirodna-kozmetika',
                                   },
                                   {
                                        id: 'bebi-prirodna-kozmetika-azeta-bio',
                                        title: 'Azeta bio',
                                        link: '/proizvodi-proizvodjac-kategorija/azeta-bio/bebi-prirodna-kozmetika',
                                   },
                                   {
                                        id: 'bebi-prirodna-kozmetika-gamarde',
                                        title: 'Gamarde',
                                        link: '/proizvodi-proizvodjac-kategorija/gamarde/bebi-prirodna-kozmetika',
                                   },
                                   {
                                        id: 'bebi-prirodna-kozmetika-weleda',
                                        title: 'Weleda',
                                        link: '/proizvodi-proizvodjac-kategorija/weleda/bebi-prirodna-kozmetika'
                                   },
                              ]
                         },
                         {
                              id: 'bebi-pelene',
                              title: 'Bebi pelene',
                              link: '/proizvodi/bebi-pelene',
                              children: [
                                   {
                                        id: 'bebi-pelene-eco-boom',
                                        title: 'Eco Boom',
                                        link: '/proizvodi-proizvodjac-kategorija/eco-boom/bebi-pelene',
                                   }
                              ]
                         }
                    ]


               },
               {
                    id: 'biljne-tinkture',
                    link: '/proizvodi/biljne-tinkture/',
                    title: 'Biljne tinkture',
                    children: [
                         {
                              id: 'fantastik-fungi',
                              title: 'Fantastik Fungi',
                              link: '/proizvodi-proizvodjac-kategorija/fantastik-fungi/biljne-tinkture/',
                         },
                         {
                              id: 'priroda-na-dar',
                              title: 'Priroda na dar',
                              link: '/proizvodi-proizvodjac-kategorija/priroda-na-dar/biljne-tinkture/',
                         },
                         {
                              id: 'bioteo',
                              title: 'Bioteo',
                              link: '/proizvodi-proizvodjac-kategorija/bioteo/biljne-tinkture/',
                         }
                    ]
               },
               {
                    id: 'ciscenje-organizma',
                    link: '/proizvodi/ciscenje-organizma/',
                    title: 'Čišćenje organizma',
                    children: [
                         {
                              id: 'okp',
                              title: 'OKP paket za čišćenje organizma',
                              link: '/proizvodi-proizvodjac-kategorija/okp/ciscenje-organizma/',
                         }
                    ]
               },
               {
                    title: 'Prirodni imunitet',
                    link: '/proizvodi/prirodni-imunitet',
                    id: 'prirodni-imunitet'
               },
               {
                    id: 'ruska-apoteka',
                    link: '/proizvodi/ruska-apoteka/',
                    title: 'Ruska Apoteka'
               },
               {
                    id: 'kolagen',
                    link: '/proizvodi/kolagen/',
                    title: 'Kolagen'
               },
               {
                    id: 'suplementi',
                    link: '/proizvodi/suplementi/',
                    title: 'Suplementi'
               },
               {
                    id: 'ledene-kocke-za-imunitet',
                    link: '/proizvodi/ledene-kocke-za-imunitet/',
                    title: 'Ledene kocke za imunitet'
               },
               {
                    id: 'domaci-prirodni-melemi',
                    link: '/proizvodi/domaci-prirodni-melemi/',
                    title: 'Domaći prirodni melemi'
               },
               {
                    id: 'mast-od-jazavca',
                    link: '/proizvodi/mast-od-jazavca/',
                    title: 'Mast od jazavca'
               },
               {
                    id: 'guscija-mast',
                    link: '/proizvodi/guscija-mast/',
                    title: 'Gusčija mast'
               },
               {
                    id: 'ulja-za-masazu',
                    link: '/proizvodi/ulja-za-masazu/',
                    title: 'Ulja za masažu'
               },
               {
                    id: 'imunitet-za-decu',
                    link: '/proizvodi/imunitet-za-decu/',
                    title: 'Imunitet za decu'
               },
               {
                    id: 'todoxin',
                    link: '/proizvodi-proizvodjac-kategorija/todoxin/prirodni-imunitet/',
                    title: 'Todoxin'
               },
               {
                    id: 'suplemania',
                    link: '/proizvodi/suplemania/',
                    title: 'Suplemania'
               },
               {
                    id: 'zao-prirodna-kozmetika',
                    link: '/proizvodi/zao-prirodna-kozmetika/',
                    title: 'Zao prirodna kozmetika'
               },
               {
                    id: '/proizvodi-za-zene',
                    link: '/proizvodi/proizvodi-za-zene/',
                    title: 'Proizvodi za žene'
               },
               {
                    id: 'homeopatija',
                    link: '/proizvodi/homeopatija/',
                    title: 'Homeopatija'
               },
          ]
     },
]