import * as React from 'react';
import Typography from '@mui/material/Typography';
import { AccordionBox, Accordion, AccordionDetails, AccordionSummary } from '@/styles/accordions/accordions';
import { Box } from '@mui/material';
import { AccordionPanels } from './all-categories'
import Link from 'next/link';
import { useState } from 'react';

const NestedAccordion = ({ title, links }: any) => {
          return (
                    <div>
                              {AccordionPanels.map((item: any, index: any) => (
                                        <Accordion key={index}>
                                                  <AccordionSummary>
                                                            <Typography>{item.title}</Typography>
                                                  </AccordionSummary>
                                                  <AccordionDetails>
                                                            {item.children.map((child: any, childIndex: any) => (
                                                                      <NestedAccordion key={childIndex} title={child.title} links={child.links} />
                                                            ))}
                                                  </AccordionDetails>
                                        </Accordion>
                              ))}
                    </div>
          );
};
export default function ProductsAllCategories() {

          const [expanded, setExpanded] = useState<string | false>('Apoteka');

          const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
                    setExpanded(newExpanded ? panel : false);
          };

          return (
                    // <AccordionBox>
                    //           <Accordion expanded={expanded === 'Apoteka'} onChange={handleChange('Apoteka')}>
                    //                     <AccordionSummary >
                    //                               <Typography>Apoteka</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Accordion expanded={expanded === 'Alergije'} onChange={handleChange('Alergije')}>
                    //                                         <AccordionSummary>
                    //                                                   <Typography>Alergije</Typography>
                    //                                         </AccordionSummary>
                    //                                         <AccordionDetails>
                    //                                                   <Typography>
                    //                                                             <Link href="/apoteka">Kapsule i tablete</Link>
                    //                                                   </Typography>
                    //                                         </AccordionDetails>
                    //                                         <AccordionDetails>
                    //                                                   <Typography>Sprejevi za nos</Typography>
                    //                                         </AccordionDetails>
                    //                                         <AccordionDetails>
                    //                                                   <Typography>Masti, gelovi</Typography>
                    //                                         </AccordionDetails>
                    //                                         <AccordionDetails>
                    //                                                   <Typography>Irigacioni set</Typography>
                    //                                         </AccordionDetails>
                    //                               </Accordion>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    //           <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    //                     <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    //                               <Typography>Medicinska kozmetika</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Typography>
                    //                                         bbbbbbbbb
                    //                               </Typography>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    //           <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    //                     <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    //                               <Typography>Lepota i nega</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Typography>
                    //                                         cccccccc
                    //                               </Typography>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    //           <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    //                     <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    //                               <Typography>Bebi program</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Typography>
                    //                                         cccccccc
                    //                               </Typography>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    //           <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    //                     <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    //                               <Typography>Medicinski aparati i oprema</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Typography>
                    //                                         cccccccc
                    //                               </Typography>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    //           <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    //                     <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    //                               <Typography>Ortopedija i pomagala</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Typography>
                    //                                         cccccccc
                    //                               </Typography>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    //           <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    //                     <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                    //                               <Typography>Dezinfekcija, dezinsekcija i maske</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Typography>
                    //                                         cccccccc
                    //                               </Typography>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    //           <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    //                     <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                    //                               <Typography>Obuća, čarape, ulošci</Typography>
                    //                     </AccordionSummary>
                    //                     <AccordionDetails>
                    //                               <Typography>
                    //                                         cccccccc
                    //                               </Typography>
                    //                     </AccordionDetails>
                    //           </Accordion>
                    // </AccordionBox >
                    <NestedAccordion panels={AccordionPanels} />
          );
}
