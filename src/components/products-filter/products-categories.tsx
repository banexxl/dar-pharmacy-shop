import * as React from 'react';
import Typography from '@mui/material/Typography';
import { AccordionBox, Accordion, AccordionDetails, AccordionSummary } from '@/styles/accordions/accordions';
import { Box } from '@mui/material';

export default function ProductsAllCategories() {

          const [expanded, setExpanded] = React.useState<string | false>('panel1');

          const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
                    setExpanded(newExpanded ? panel : false);
          };

          return (
                    <AccordionBox>
                              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                  <Typography>Apoteka</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            Alergije
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                                  <Typography>Medicinska kozmetika</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            bbbbbbbbb
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                                  <Typography>Lepota i nega</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            cccccccc
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                                  <Typography>Bebi program</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            cccccccc
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                                  <Typography>Medicinski aparati i oprema</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            cccccccc
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                                  <Typography>Ortopedija i pomagala</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            cccccccc
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                                                  <Typography>Dezinfekcija, dezinsekcija i maske</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            cccccccc
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                                                  <Typography>Obuća, čarape, ulošci</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            cccccccc
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                    </AccordionBox >
          );
}
