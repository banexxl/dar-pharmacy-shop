import * as React from 'react'
import Typography from '@mui/material/Typography'
import { NavbarAccordion, NavbarAccordionDetails, NavbarAccordionSummary } from '../../styles/accordion/accordion'

export default function NavbarAccordionComponent() {
          const [expanded, setExpanded] = React.useState<string | false>('panel1')

          const handleChange =
                    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
                              setExpanded(newExpanded ? panel : false)
                    }

          const stopPropagation = (event: any) => {
                    event.stopPropagation();
          };


          return (
                    <div>
                              <NavbarAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} onClick={(e: any) => stopPropagation(e)}>
                                        <NavbarAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                  <Typography>Collapsible Group Item #1</Typography>
                                        </NavbarAccordionSummary>
                                        <NavbarAccordionDetails>
                                                  <NavbarAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                            <NavbarAccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                                                      <Typography>Collapsible Group Item #2</Typography>
                                                            </NavbarAccordionSummary>
                                                            <NavbarAccordionDetails>
                                                                      <Typography>
                                                                                bbb
                                                                      </Typography>
                                                            </NavbarAccordionDetails>
                                                  </NavbarAccordion>
                                                  <NavbarAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
                                                            <NavbarAccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                                                      <Typography>Collapsible Group Item #3</Typography>
                                                            </NavbarAccordionSummary>
                                                            <NavbarAccordionDetails>
                                                                      <Typography>
                                                                                ccc
                                                                      </Typography>
                                                            </NavbarAccordionDetails>
                                                  </NavbarAccordion>
                                        </NavbarAccordionDetails>
                              </NavbarAccordion>


                    </div>
          )
}
